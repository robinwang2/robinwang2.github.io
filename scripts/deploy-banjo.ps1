param(
    [string]$Username = $env:RIT_USERNAME,
    [string]$HostName = "banjo.rit.edu",
    [string]$RemoteRoot = "www/SanxingWang",
    [switch]$FullSite,
    [switch]$DryRun,
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"

$Root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path

if (-not $Username) {
    $Username = Read-Host "RIT username"
}

if (-not $SkipBuild) {
    Push-Location $Root
    try {
        node scripts\build-blog.js
    }
    finally {
        Pop-Location
    }
}

function Get-RelativePath {
    param([string]$Path)

    $absolutePath = (Resolve-Path $Path).Path
    $rootPrefix = $Root.TrimEnd("\", "/") + [System.IO.Path]::DirectorySeparatorChar
    if (-not $absolutePath.StartsWith($rootPrefix, [System.StringComparison]::OrdinalIgnoreCase)) {
        throw "Path is outside the workspace: $absolutePath"
    }

    return $absolutePath.Substring($rootPrefix.Length).Replace("\", "/")
}

function Add-FileIfExists {
    param(
        [System.Collections.Generic.List[string]]$List,
        [string]$RelativePath
    )

    $absolutePath = Join-Path $Root $RelativePath
    if (Test-Path -LiteralPath $absolutePath -PathType Leaf) {
        $List.Add($RelativePath.Replace("\", "/"))
    }
}

$files = [System.Collections.Generic.List[string]]::new()

if ($FullSite) {
    Get-ChildItem -LiteralPath $Root -File -Filter "*.html" | ForEach-Object {
        $files.Add((Get-RelativePath $_.FullName))
    }

    @("css", "js", "images", "download", "src", "blog") | ForEach-Object {
        $dir = Join-Path $Root $_
        if (Test-Path -LiteralPath $dir -PathType Container) {
            Get-ChildItem -LiteralPath $dir -Recurse -File | ForEach-Object {
                $files.Add((Get-RelativePath $_.FullName))
            }
        }
    }
}
else {
    Add-FileIfExists $files "index.html"
    Add-FileIfExists $files "css/styles.css"
    Add-FileIfExists $files "blog.html"

    $blogDir = Join-Path $Root "blog"
    if (Test-Path -LiteralPath $blogDir -PathType Container) {
        Get-ChildItem -LiteralPath $blogDir -Recurse -File | ForEach-Object {
            $files.Add((Get-RelativePath $_.FullName))
        }
    }
}

$files = $files | Sort-Object -Unique

if (-not $files.Count) {
    throw "No files found to upload."
}

$remoteDirs = [System.Collections.Generic.HashSet[string]]::new()
foreach ($file in $files) {
    $dir = Split-Path $file -Parent
    if (-not $dir) {
        continue
    }

    $parts = $dir.Replace("\", "/").Split("/", [System.StringSplitOptions]::RemoveEmptyEntries)
    $current = ""
    foreach ($part in $parts) {
        $current = if ($current) { "$current/$part" } else { $part }
        [void]$remoteDirs.Add($current)
    }
}

$batchLines = [System.Collections.Generic.List[string]]::new()
$batchLines.Add("cd `"$RemoteRoot`"")

foreach ($dir in ($remoteDirs | Sort-Object)) {
    $batchLines.Add("-mkdir `"$dir`"")
    $batchLines.Add("-chmod 755 `"$dir`"")
}

foreach ($file in $files) {
    $localPath = (Join-Path $Root $file).Replace("\", "/")
    $batchLines.Add("put `"$localPath`" `"$file`"")
    $batchLines.Add("chmod 644 `"$file`"")
}

$batchFile = New-TemporaryFile

try {
    Set-Content -LiteralPath $batchFile -Value $batchLines -Encoding ascii
    Write-Host "Prepared $($files.Count) file(s) for $Username@${HostName}:$RemoteRoot"

    if ($DryRun) {
        $files | ForEach-Object { Write-Host "  $_" }
        Write-Host "Dry run only. No files were uploaded."
        return
    }

    & sftp -o StrictHostKeyChecking=accept-new -b $batchFile "$Username@$HostName"
}
finally {
    Remove-Item -LiteralPath $batchFile -Force -ErrorAction SilentlyContinue
}
