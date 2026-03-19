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
          "description": "Dualing Driver is an arcade-style multiplayer shooter focused on fast-paced combat and precise bullet control. I was responsible for implementing and tuning the core movement and combat systems. By improving hit detection and gameplay feedback, I strengthened combat readability and input responsiveness, while also contributing to map pacing and match-length balance.",
          "action": "Download Build",
          "skills": ["Unity (C#)", "Player control systems", "Combat feedback optimization", "Multiplayer balance design", "Rapid prototyping"]
        },
        "project5": {
          "title": "Auto Robot",
          "description": "Auto Robot is an RTS-inspired survival strategy game in which players plan robot paths for resource collection and risk avoidance. I designed and implemented an AI behavior system based on a finite state machine, allowing the robot to make decisions in a dynamic environment. I also iterated on the onboarding flow to reduce the learning curve and improve the first-time player experience.",
          "action": "Play Online",
          "skills": ["Unity (C#)", "AI finite state machines (FSM)", "Pathing and behavior logic", "Systems iteration design", "Onboarding optimization"]
        },
        "project7": {
          "title": "There Are No Flowers",
          "description": "Tomb of Sailors: No Flowers is a tabletop strategy game design project set against a historical naval warfare backdrop. I led the design of the turn structure and core rules, then used data from multiple playtests to continuously refine strategic weight and win conditions, improving overall depth and expanding player decision space.",
          "action": "Download Design Doc",
          "skills": ["Game systems design", "Rules modeling", "Playtest data analysis", "Balance tuning", "Team collaboration"]
        },
        "project8": {
          "title": "U Are Fired",
          "description": "U Are Fired is a project completed during a time-limited game jam. I was responsible for quickly defining the core gameplay and prioritizing features, building a playable version within an extremely short production cycle. I also coordinated the team to finish critical features and bug fixes before the deadline to ensure a complete delivery.",
          "action": "View on itch.io",
          "skills": ["Game jam development", "Scope control", "Rapid iteration", "Bug fixing and release", "Cross-team collaboration"]
        },
        "project9": {
          "title": "Double Dresden",
          "description": "Double Dresden is a narrative-driven point-and-click puzzle game. I contributed to the design of the clue system and event flow, combining narrative information with puzzle mechanics to guide players through deduction and story progression. I also refined interaction feedback to strengthen immersion.",
          "action": "Download Installer",
          "skills": ["Narrative design", "Puzzle systems design", "Event-driven architecture", "Interaction design", "Team development"]
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
  "title": "精选项目",
  "back": "← 返回项目",
  "skillsTitle": "技术技能:",

  "project2": {
    "title": "斗杀驾驶员",
    "description": "《斗杀驾驶员》是一款街机风格的多人射击游戏，专注于快节奏战斗与精准子弹控制。我负责核心移动与战斗系统的实现与调优，通过优化反馈与命中判定，提高了战斗可读性与操作响应性，并参与地图节奏与对局时长的平衡设计。",
    "action": "下载压缩包",
    "skills": ["Unity (C#)", "玩家控制系统", "战斗反馈优化", "多人平衡设计", "快速原型开发"]
  },

  "project5": {
    "title": "自动机器人",
    "description": "《自动机器人》是一款受 RTS 启发的生存策略游戏。玩家通过规划机器人路径进行资源收集与风险规避。我设计并实现了基于状态机的 AI 行为系统，使机器人能够在动态环境中做出决策，同时通过迭代优化新手引导，提升玩家理解成本与上手体验。",
    "action": "在线体验",
    "skills": ["Unity (C#)", "AI 状态机 (FSM)", "路径与行为逻辑", "系统迭代设计", "新手引导优化"]
  },

  "project7": {
    "title": "水兵之墓 - 无花",
    "description": "《水兵之墓 - 无花》是一个基于历史海战背景的桌面策略游戏设计项目。我主导回合机制与核心规则设计，并通过多轮 playtest 收集数据，持续调整策略权重与胜负条件，提升整体博弈深度与玩家决策空间。",
    "action": "下载设计文档",
    "skills": ["游戏系统设计", "规则建模", "Playtest 数据分析", "平衡性调优", "团队协作"]
  },

  "project8": {
    "title": "你被开除了",
    "description": "《你被开除了》是一款在限时 Game Jam 中完成的项目。我负责快速确定核心玩法并进行功能优先级排序，在极短周期内完成可玩版本开发，同时协调团队在截止前完成关键功能与缺陷修复，确保项目完整交付。",
    "action": "前往 itch.io",
    "skills": ["Game Jam 开发", "范围控制 (Scoping)", "快速迭代", "Bug 修复与发布", "跨团队协作"]
  },

  "project9": {
    "title": "双重德累斯顿",
    "description": "《双重德累斯顿》是一款叙事驱动的点击式解谜游戏。我参与设计线索系统与事件流程，通过将叙事信息与解谜机制结合，引导玩家逐步推理并推进剧情，同时优化交互反馈以提升沉浸感。",
    "action": "下载安装包",
    "skills": ["叙事设计", "谜题系统设计", "事件驱动架构", "交互设计", "团队开发"]
  }
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

  window.TRANSLATIONS = TRANSLATIONS;

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
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
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
