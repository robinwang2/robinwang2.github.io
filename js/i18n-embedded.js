(() => {
  const SITE_DATA = {
    projects: [
      {
        id: 'project2',
        page: 'project2.html',
        image: 'images/project2.jpg',
        actionHref: 'download/Dualing_Drivers_V1.1.zip',
        download: true
      },
      {
        id: 'project5',
        page: 'project5.html',
        image: 'images/project5.jpg',
        actionHref: 'https://igme-202-2241.github.io/202-work-robinwang2/Project_04/',
        external: true
      },
      {
        id: 'project7',
        page: 'project7.html',
        image: 'images/project7.png',
        actionHref: 'download/DesignDoc_Sailors.docx',
        download: true
      },
      {
        id: 'project8',
        page: 'project8.html',
        image: 'images/project8.png',
        actionHref: 'https://photoer.itch.io/you-are-fired',
        external: true
      },
      {
        id: 'project9',
        page: 'project9.html',
        image: 'images/Doubledresden.png',
        actionHref: 'download/doubleDresden.zip',
        download: true
      },
      {
        id: 'project10',
        page: 'project10.html',
        image: 'images/trench-wisperer.png',
        actionHref: 'https://drive.google.com/file/d/1tZpWRgrIJ2ZIEmTH7ugCgXvsaNSVY-13/view?usp=sharing',
        external: true
      }
    ],
    translations: {
      en: {
        meta: {
          lang: 'en',
          title: 'Sanxing Wang - Game Developer & Designer'
        },
        nav: {
          logo: '<span class="red-cap">S</span>anxing <span class="red-cap">W</span>ang',
          about: 'About',
          projects: 'Projects',
          contact: 'Contact',
          languageToggle: '中文'
        },
        hero: {
          description: 'I create interactive experiences that challenge and inspire. Currently studying Game Design and Development at RIT.',
          viewProjects: 'View Projects',
          getInTouch: 'Get in Touch'
        },
        about: {
          title: 'About Me',
          p1: "I'm currently pursuing a Bachelor of Science in Game Design and Development at the Rochester Institute of Technology (RIT), with an anticipated graduation in May 2027. My coursework includes Game Development Algorithms, Problem Solving, Interactive Media, 2D Animation, and Web Technology."
        },
        projects: {
          title: 'Featured Projects',
          back: '← Back to Projects',
          skillsTitle: 'technical skill:',
          project2: {
            title: 'Dualing Driver',
            description: 'Dualing Driver is an arcade-style multiplayer shooter focused on fast-paced combat and precise bullet control. I was responsible for implementing and tuning the core movement and combat systems. By improving hit detection and gameplay feedback, I strengthened combat readability and input responsiveness, while also contributing to map pacing and match-length balance.',
            action: 'Download Build',
            skills: ['Unity (C#)', 'Player control systems', 'Combat feedback optimization', 'Multiplayer balance design', 'Rapid prototyping']
          },
          project5: {
            title: 'Auto Robot',
            description: 'Auto Robot is an RTS-inspired survival strategy game in which players plan robot paths for resource collection and risk avoidance. I designed and implemented an AI behavior system based on a finite state machine, allowing the robot to make decisions in a dynamic environment. I also iterated on the onboarding flow to reduce the learning curve and improve the first-time player experience.',
            action: 'Play Online',
            skills: ['Unity (C#)', 'AI finite state machines (FSM)', 'Pathing and behavior logic', 'Systems iteration design', 'Onboarding optimization']
          },
          project7: {
            title: 'There Are No Flowers',
            description: 'There Are No Flowers On The Graves Of Sailors is an original tabletop strategy game centered on ship-to-ship combat. As a system and numerical designer, I designed ship attributes, skill effects, combat values, and helped restructure the rules when early tests showed that the first version was too complex for new players. Through repeated playtests, rule rewrites, and balance iteration, the revised version reduced the average rules-learning time by nearly 20 minutes while preserving hidden information, unit variety, and dice-driven uncertainty.',
            action: 'Download Design Doc',
            skills: ['System design', 'Numerical balance', 'Rule simplification', 'Playtest facilitation', 'Tabletop strategy design']
          },
          project8: {
            title: 'U Are Fired',
            description: 'U Are Fired is a time-limited Game Jam project: a top-down roguelike shooter themed around workplace pressure. I managed project progress, clarified feature priorities and stage goals, implemented the main menu and core UI, and wrote the design documentation that organized gameplay rules, system requirements, and production tasks. The team delivered a runnable prototype with a basic combat loop, UI flow, and thematic presentation within the jam schedule.',
            action: 'View on itch.io',
            skills: ['Project management', 'Game design documentation', 'UI implementation', 'Scope control', 'Game jam production']
          },
          project9: {
            title: 'Double Dresden',
            description: 'Double Dresden is a course team project: a point-and-click detective puzzle game adapted from an instructor-provided IP. I collaborated on the core puzzle flow, designed the clue JSON structure, implemented about 30% of the remaining interactions, and hosted playtests by writing questionnaires and guiding sessions. Across five staged evaluations, player feedback on UI function recognition and interaction experience showed a clear upward trend.',
            action: 'Download Installer',
            skills: ['Puzzle flow design', 'Clue JSON structure', 'Interaction implementation', 'Questionnaire design', 'Playtest hosting']
          },
          project10: {
            title: 'TrenchWhisperer',
            description: "TrenchWhisperer is a Unity AI text role-playing game exploring how LLM and RAG systems can support narrative interaction, character dialogue, and dynamic feedback. As lead designer and developer, I designed the core loop, built the RAG knowledge retrieval logic, implemented a suspicion-based dynamic evaluation system, and integrated both local model deployment and cloud API options in Unity. The prototype connects prompt engineering, AI-generated dialogue, and playable in-game content into a working production pipeline.",
            action: 'Download Build',
            skills: ['Unity (C#)', 'LLM local deployment', 'RAG retrieval logic', 'Suspicion evaluation system', 'Prompt engineering pipeline']
          }
        },
        contact: {
          title: 'Get in Touch',
          description: 'Interested in collaborating or learning more about my work?',
          sendEmail: 'Send Email'
        },
        footer: {
          copyright: '© 2025 Sanxing Wang. All rights reserved.'
        }
      },
      'zh-Hans': {
        meta: {
          lang: 'zh-Hans',
          title: '王三省 - 游戏开发与设计'
        },
        nav: {
          logo: '<span class="red-cap">王</span>三省',
          about: '关于我',
          projects: '项目',
          contact: '联系',
          languageToggle: 'EN'
        },
        hero: {
          description: '我专注于制作有挑战性、富有启发性的互动体验。目前在 RIT 学习游戏设计与开发。',
          viewProjects: '查看项目',
          getInTouch: '联系我'
        },
        about: {
          title: '关于我',
          p1: '我目前在罗切斯特理工学院（RIT）攻读游戏设计与开发理学学士学位，预计 2027 年 5 月毕业。我的课程包括游戏开发算法、问题解决、互动媒体、2D 动画和网页技术。'
        },
        projects: {
          title: '精选项目',
          back: '← 返回项目',
          skillsTitle: '技术技能:',
          project2: {
            title: '斗杀驾驶员',
            description: '《斗杀驾驶员》是一款街机风格的多人射击游戏，专注于快节奏战斗与精准子弹控制。我负责核心移动与战斗系统的实现和调优，通过优化命中判定与反馈，提高了战斗可读性和操作响应。',
            action: '下载游戏',
            skills: ['Unity (C#)', '玩家控制系统', '战斗反馈优化', '多人平衡设计', '快速原型开发']
          },
          project5: {
            title: '自动机器人',
            description: '《自动机器人》是一款受 RTS 启发的生存策略游戏。玩家通过规划机器人路径进行资源收集与风险规避。我设计并实现了基于状态机的 AI 行为系统，并优化了新手引导体验。',
            action: '在线体验',
            skills: ['Unity (C#)', 'AI 状态机 (FSM)', '路径与行为逻辑', '系统迭代设计', '新手引导优化']
          },
          project7: {
            title: '水兵之墓 - 无花',
            description: '《There Are No Flowers On The Graves Of Sailors》是一款以舰船对抗为核心的原创策略桌游。我担任系统策划与数值策划，负责船只属性、技能效果与战斗数值设计。项目中期针对早期规则过于复杂、新玩家理解成本高的问题，与主策划共同推进系统重构，主导规则简化、规则文本重写与核心流程梳理。经过多轮玩家测试与数值调整，改版后玩家平均熟悉规则时长较初始版本缩短近 20 分钟，同时保留了信息隐藏、单位差异与随机判定带来的策略深度。',
            action: '下载设计文档',
            skills: ['系统策划', '数值策划', '规则简化', '玩家测试主持', '桌游策略设计']
          },
          project8: {
            title: '你被开除了',
            description: '《U Are Fired》是一款 Game Jam 限时开发作品，是以“职场压力”为主题的俯视角 Roguelike 射击游戏。我负责项目主持与进度推进，协调团队明确开发目标、功能优先级与阶段任务，同时完成主菜单和基础 UI 的设计与实施，并撰写项目策划文档，整理玩法设定、系统规则与开发需求。项目在 Game Jam 周期内完成了可运行版本，包含基础战斗循环、UI 流程和主题叙事氛围。',
            action: '前往 itch.io',
            skills: ['项目管理', '策划文档撰写', 'UI 实施', '范围控制', 'Game Jam 开发']
          },
          project9: {
            title: '双重德累斯顿',
            description: '《The Dresden Files: Double Dresden》是学校小组合作开发的点击式侦探解谜游戏，基于课程教师提供的 IP 改编。我协同团队设计并实现核心解谜流程，负责线索 JSON 文件结构设计和约 30% 交互内容开发，同时撰写每次游玩测试的问卷并主持测试。累计五次阶段性测试中，玩家对 UI 元素功能认知与交互体验的反馈评分持续上升。',
            action: '下载安装包',
            skills: ['解谜流程设计', '线索 JSON 结构', '交互开发', '问卷设计', '测试主持']
          },
          project10: {
            title: 'TrenchWhisperer',
            description: '《TrenchWhisperer》是一款基于 Unity 开发的 AI 文字角色扮演游戏，探索 LLM 与 RAG 技术在游戏叙事、角色交互与动态反馈中的落地应用。我担任主策划与开发，负责核心玩法设计、RAG 知识库检索逻辑搭建、“怀疑度”动态判定系统设计，以及本地模型部署与云端 API 调用两种运行模式的集成。项目打通了从 Prompt Engineering 到游戏内容生成与落地的基础生产链路。',
            action: '下载游戏',
            skills: ['Unity (C#)', 'LLM 本地部署', 'RAG 检索逻辑', '怀疑度动态判定', 'Prompt Engineering 流程']
          }
        },
        contact: {
          title: '联系我',
          description: '如果你想合作，或想进一步了解我的项目，欢迎联系我。',
          sendEmail: '发送邮件'
        },
        footer: {
          copyright: '© 2025 王三省. 保留所有权利。'
        }
      }
    }
  };

  const DEFAULT_LANG = 'en';
  const STORAGE_KEY = 'site-language';
  const TOGGLE_ID = 'language-toggle';

  let currentLang = DEFAULT_LANG;

  const getByPath = (obj, path) => {
    return path.split('.').reduce((acc, key) => (acc && key in acc ? acc[key] : undefined), obj);
  };

  const getProject = (projectId) => {
    return SITE_DATA.projects.find((project) => project.id === projectId);
  };

  const getProjectText = (translations, projectId) => {
    return translations.projects[projectId];
  };

  const setExternalLink = (link, project) => {
    link.removeAttribute('download');
    link.removeAttribute('target');
    link.removeAttribute('rel');

    if (project.download) {
      link.setAttribute('download', '');
    }

    if (project.external) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  };

  const renderProjectTiles = (translations) => {
    const grid = document.getElementById('project-tile-grid');
    if (!grid) return;

    grid.replaceChildren();

    SITE_DATA.projects.forEach((project) => {
      const projectText = getProjectText(translations, project.id);
      if (!projectText) return;

      const link = document.createElement('a');
      link.className = 'project-tile';
      link.href = project.page;

      const thumb = document.createElement('span');
      thumb.className = 'project-tile-thumb';

      const image = document.createElement('img');
      image.src = project.image;
      image.alt = projectText.title;
      thumb.append(image);

      const caption = document.createElement('span');
      caption.className = 'project-tile-caption';

      const title = document.createElement('span');
      title.className = 'project-tile-title';
      title.textContent = projectText.title;
      caption.append(title);

      // First entry of the skills list doubles as the role/tech one-liner.
      if (Array.isArray(projectText.skills) && projectText.skills.length) {
        const role = document.createElement('span');
        role.className = 'project-tile-role';
        role.textContent = projectText.skills.slice(0, 2).join(' · ');
        caption.append(role);
      }

      link.append(thumb, caption);
      grid.append(link);
    });
  };

  const renderProjectPage = (translations) => {
    const projectId = document.body.dataset.projectId;
    if (!projectId) return;

    const project = getProject(projectId);
    const projectText = getProjectText(translations, projectId);
    if (!project || !projectText) return;

    document.title = `${projectText.title} | Sanxing Wang`;

    const image = document.querySelector('.project-detail-image');
    if (image) {
      image.src = project.image;
      image.alt = `${projectText.title} cover image`;
    }

    const description = document.querySelector('.project-detail-description');
    if (description) {
      description.textContent = projectText.description;
    }

    const action = document.querySelector('.project-action-button');
    if (action) {
      action.href = project.actionHref;
      action.textContent = projectText.action;
      setExternalLink(action, project);
    }

    const skillsList = document.getElementById('skills-list');
    if (skillsList && Array.isArray(projectText.skills)) {
      skillsList.replaceChildren(
        ...projectText.skills.map((skill) => {
          const item = document.createElement('li');
          item.textContent = skill;
          return item;
        })
      );
    }
  };

  const applyLanguage = (lang) => {
    const selectedLang = SITE_DATA.translations[lang] ? lang : DEFAULT_LANG;
    const translations = SITE_DATA.translations[selectedLang];
    currentLang = selectedLang;

    document.documentElement.lang = translations.meta.lang;
    if (!document.body.dataset.projectId) {
      document.title = translations.meta.title;
    }

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = getByPath(translations, element.getAttribute('data-i18n'));
      if (typeof value === 'string') {
        element.textContent = value;
      }
    });

    const logo = document.getElementById('site-logo');
    if (logo) {
      logo.innerHTML = translations.nav.logo;
      logo.classList.toggle('zh-logo', selectedLang === 'zh-Hans');
    }

    renderProjectTiles(translations);
    renderProjectPage(translations);

    localStorage.setItem(STORAGE_KEY, selectedLang);
    window.__currentLang = selectedLang;
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: selectedLang } }));
  };

  const boot = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    applyLanguage(SITE_DATA.translations[stored] ? stored : DEFAULT_LANG);

    const toggle = document.getElementById(TOGGLE_ID);
    if (!toggle) return;

    toggle.addEventListener('click', (event) => {
      event.preventDefault();
      applyLanguage(currentLang === 'en' ? 'zh-Hans' : 'en');
    });
  };

  window.SITE_DATA = SITE_DATA;
  window.TRANSLATIONS = SITE_DATA.translations;

  document.addEventListener('DOMContentLoaded', boot);
})();
