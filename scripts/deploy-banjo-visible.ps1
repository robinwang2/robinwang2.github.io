param(
    [string]$Username = $env:RIT_USERNAME,
    [string]$HostName = "banjo.rit.edu",
    [string]$RemoteRoot = "www/SanxingWang",
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"
$Root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path

if (-not $Username) {
    $Username = Read-Host "RIT username"
}

Push-Location $Root
try {
    if (-not $SkipBuild) {
        node scripts\build-blog.js
    }

    $remoteCommand = "REMOTE_ROOT='$RemoteRoot'; mkdir -p `"`$REMOTE_ROOT`" && cd `"`$REMOTE_ROOT`" && tar -xf - && chmod 755 . blog blog/en css 2>/dev/null; find blog -type d -exec chmod 755 {} \; 2>/dev/null; find blog -type f -exec chmod 644 {} \; 2>/dev/null; chmod 644 index.html blog.html css/styles.css 2>/dev/null"

    Write-Host ""
    Write-Host "Uploading to $Username@${HostName}:$RemoteRoot"
    Write-Host "When prompted, type your RIT password. The password will not be displayed."
    Write-Host ""

    $escapedRemoteCommand = $remoteCommand.Replace("'", "'\''")
    cmd /c "tar -cf - index.html blog.html css/styles.css blog | ssh -o StrictHostKeyChecking=accept-new $Username@$HostName ""sh -lc '$escapedRemoteCommand'"""

    if ($LASTEXITCODE -ne 0) {
        throw "Upload failed with exit code $LASTEXITCODE."
    }

    Write-Host ""
    Write-Host "Upload finished."
    Write-Host "Try: http://people.rit.edu/$Username/"
}
finally {
    Pop-Location
}
