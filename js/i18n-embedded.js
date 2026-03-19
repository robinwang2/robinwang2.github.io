(() => {
  // 备用方案：将翻译数据直接嵌入
  const TRANSLATIONS = {
    "en": {
      "meta": {
        "lang": "en",
        "title": "Sanxing Wang - Game Developer & Designer"
      },
      "nav": {
        "logo": "<span class=\"red-cap\">S</span>anxing <span class=\"red-cap\">W</span>ang",
        "about": "About",
        "projects": "Projects",
        "contact": "Contact",
        "languageToggle": "中文"
      },
      "hero": {
        "description": "I create interactive experiences that challenge and inspire. Currently studying Game Design and Development at RIT.",
        "viewProjects": "View Projects",
        "getInTouch": "Get in Touch"
      },
      "about": {
        "title": "About Me",
        "p1": "I'm currently pursuing a Bachelor of Science in Game Design and Development at the Rochester Institute of Technology (RIT), with an anticipated graduation in May 2027. My coursework includes Game Development Algorithms, Problem Solving, Interactive Media, 2D Animation, and Web Technology.",
        "p2": "Along the way, I've earned the RIT Award (merit-based). I'm seeking a co-op or internship opportunity for Summer 2026 where I can apply my skills in C# and game development.",
        "p3": "Outside of academics, I enjoy exploring new technologies and working on interactive media projects that challenge my problem-solving abilities and creativity."
      },
      "projects": {
        "title": "Featured Projects",
        "back": "← Back to Projects",
        "skillsTitle": "technical skill:",
        "project2": {
          "title": "Dualing Driver",
          "description": "Dualing Driver is an arcade-style multiplayer shooter focused on fast pacing and bullet control. The project emphasizes responsive movement, combat readability, and map flow balancing in short matches.",
          "skills": ["Unity (C#)", "Multiplayer gameplay balancing", "Combat feedback tuning", "Rapid prototyping"]
        },
        "project5": {
          "title": "Auto Robot",
          "description": "Auto Robot is a small RTS-inspired survival game where players route a robot to collect coins, avoid threats, and optimize decisions under pressure.",
          "skills": ["Gameplay scripting", "AI behavior setup", "State machine design", "UX onboarding iteration"]
        },
        "project7": {
          "title": "There Are No Flowers",
          "description": "There Are No Flowers is a tabletop naval combat design project based on historical maritime conflict. The work centers on turn structure, strategic choices, and collaborative balancing across playtests.",
          "skills": ["Systems design documentation", "Team collaboration workflow", "Playtest analytics", "Rule balancing"]
        },
        "project8": {
          "title": "U Are Fired",
          "description": "U Are Fired is a game jam project created under tight time constraints. It demonstrates quick scoping, mechanic prioritization, and fast iteration for a playable final build.",
          "skills": ["Game jam production pipeline", "Feature triage and scope control", "Bug fixing under deadline", "Cross-discipline communication"]
        },
        "project9": {
          "title": "Double Dresden",
          "description": "Double Dresden is a point-and-click mystery puzzle experience. Players investigate scenes, combine clues, and progress through narrative-driven logic challenges.",
          "skills": ["Puzzle and narrative integration", "Event flow scripting", "Interactive scene design", "Team development process"]
        }
      },
      "contact": {
        "title": "Get in Touch",
        "description": "Interested in collaborating or learning more about my work?",
        "sendEmail": "Send Email"
      },
      "footer": {
        "copyright": "© 2025 Sanxing Wang. All rights reserved."
      }
    },
    "zh-Hans": {
      "meta": {
        "lang": "zh-Hans",
        "title": "王三省 - 游戏开发与设计"
      },
      "nav": {
        "logo": "<span class=\"red-cap\">王</span>三省",
        "about": "关于我",
        "projects": "项目",
        "contact": "联系",
        "languageToggle": "EN"
      },
      "hero": {
        "description": "我专注于制作有挑战性、富有启发性的互动体验。目前在 RIT 学习游戏设计与开发。",
        "viewProjects": "查看项目",
        "getInTouch": "联系我"
      },
      "about": {
        "title": "关于我",
        "p1": "我目前在罗切斯特理工学院（RIT）攻读游戏设计与开发理学学士，预计 2027 年 5 月毕业。课程涵盖游戏开发算法、问题求解、互动媒体、二维动画与网页技术等方向。",
        "p2": "在校期间我获得了 RIT 奖学金。我正在寻找 2026 年夏季的实习或 Co-op 机会，以进一步应用 C# 与游戏开发能力。",
        "p3": "课余时间我喜欢探索新技术，并通过互动媒体项目持续提升创造力与解决问题的能力。"
      },
      "projects": {
        "title": "精选项目"
      },
      "contact": {
        "title": "联系我",
        "description": "如果你想合作，或想进一步了解我的项目，欢迎联系我。",
        "sendEmail": "发送邮件"
      },
      "footer": {
        "copyright": "© 2025 王三省. 保留所有权利。"
      }
    }
  };

  const DEFAULT_LANG = 'en';
  const TOGGLE_ID = 'language-toggle';
  const STORAGE_KEY = 'site-language';
  let currentLang = DEFAULT_LANG;  // Track current language state

  const getByPath = (obj, path) => path.split('.').reduce((acc, key) => (acc && key in acc ? acc[key] : undefined), obj);

  const setLanguage = (translations, lang) => {
    const selected = translations[lang] || translations[DEFAULT_LANG];
    currentLang = lang;  // Update current state

    document.documentElement.lang = selected.meta.lang;
    document.title = selected.meta.title;

    // Store current language globally for use in other scripts
    window.__currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = getByPath(selected, key);
      if (typeof value === 'string') {
        el.textContent = value;
      }
    });

    // Update logo with special handling for Chinese
    const logoEl = document.getElementById('site-logo');
    if (logoEl && selected.nav.logo) {
      logoEl.innerHTML = selected.nav.logo;
      // Add class for Chinese logo sizing
      if (lang === 'zh-Hans') {
        logoEl.classList.add('zh-logo');
      } else {
        logoEl.classList.remove('zh-logo');
      }
    }

    // Update dynamic download links
    const sailorsLink = document.getElementById('sailors-gdd-link');
    if (sailorsLink && selected.projects.project7 && selected.projects.project7.gddDownloadPath) {
      sailorsLink.href = selected.projects.project7.gddDownloadPath;
    }

    localStorage.setItem(STORAGE_KEY, lang);
  };

  const boot = () => {
    try {
      console.log('[i18n] Initializing...');
      const translations = TRANSLATIONS;
      console.log('[i18n] Translations loaded from embedded data');

      const stored = localStorage.getItem(STORAGE_KEY);
      const initialLang = translations[stored] ? stored : DEFAULT_LANG;
      setLanguage(translations, initialLang);
      console.log('[i18n] Initial language set to:', initialLang);

      const toggle = document.getElementById(TOGGLE_ID);
      console.log('[i18n] Toggle button found:', !!toggle);
      
      if (toggle) {
        toggle.addEventListener('click', (event) => {
          event.preventDefault();
          const nextLang = currentLang === 'en' ? 'zh-Hans' : 'en';
          console.log('[i18n] Switching language from', currentLang, 'to', nextLang);
          setLanguage(translations, nextLang);
        });
      } else {
        console.log('[i18n] Language toggle element not found - this is OK for project pages');
      }
      
      console.log('[i18n] Initialization complete');
    } catch (error) {
      console.error('[i18n] Initialization failed:', error);
    }
  };

  document.addEventListener('DOMContentLoaded', boot);
})();
