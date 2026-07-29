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
          languageToggle: 'ä¸­æ'
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
          back: 'â Back to Projects',
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
          copyright: 'Â© 2025 Sanxing Wang. All rights reserved.'
        }
      },
      'zh-Hans': {
        meta: {
          lang: 'zh-Hans',
          title: 'çä¸ç - æ¸¸æå¼åä¸è®¾è®¡'
        },
        nav: {
          logo: '<span class="red-cap">ç</span>ä¸ç',
          about: 'å³äºæ',
          projects: 'é¡¹ç®',
          contact: 'èç³»',
          languageToggle: 'EN'
        },
        hero: {
          description: 'æä¸æ³¨äºå¶ä½ææææ§ãå¯æå¯åæ§çäºå¨ä½éªãç®åå¨ RIT å­¦ä¹ æ¸¸æè®¾è®¡ä¸å¼åã',
          viewProjects: 'æ¥çé¡¹ç®',
          getInTouch: 'èç³»æ'
        },
        about: {
          title: 'å³äºæ',
          p1: 'æç®åå¨ç½åæ¯ç¹çå·¥å­¦é¢ï¼RITï¼æ»è¯»æ¸¸æè®¾è®¡ä¸å¼åçå­¦å­¦å£«å­¦ä½ï¼é¢è®¡ 2027 å¹´ 5 ææ¯ä¸ãæçè¯¾ç¨åæ¬æ¸¸æå¼åç®æ³ãé®é¢è§£å³ãäºå¨åªä½ã2D å¨ç»åç½é¡µææ¯ã'
        },
        projects: {
          title: 'ç²¾éé¡¹ç®',
          back: 'â è¿åé¡¹ç®',
          skillsTitle: 'ææ¯æè½:',
          project2: {
            title: 'ææé©¾é©¶å',
            description: 'ãææé©¾é©¶åãæ¯ä¸æ¬¾è¡æºé£æ ¼çå¤äººå°å»æ¸¸æï¼ä¸æ³¨äºå¿«èå¥ææä¸ç²¾åå­å¼¹æ§å¶ãæè´è´£æ ¸å¿ç§»å¨ä¸ææç³»ç»çå®ç°åè°ä¼ï¼éè¿ä¼åå½ä¸­å¤å®ä¸åé¦ï¼æé«äºææå¯è¯»æ§åæä½ååºã',
            action: 'ä¸è½½æ¸¸æ',
            skills: ['Unity (C#)', 'ç©å®¶æ§å¶ç³»ç»', 'ææåé¦ä¼å', 'å¤äººå¹³è¡¡è®¾è®¡', 'å¿«éååå¼å']
          },
          project5: {
            title: 'èªå¨æºå¨äºº',
            description: 'ãèªå¨æºå¨äººãæ¯ä¸æ¬¾å RTS å¯åççå­ç­ç¥æ¸¸æãç©å®¶éè¿è§åæºå¨äººè·¯å¾è¿è¡èµæºæ¶éä¸é£é©è§é¿ãæè®¾è®¡å¹¶å®ç°äºåºäºç¶ææºç AI è¡ä¸ºç³»ç»ï¼å¹¶ä¼åäºæ°æå¼å¯¼ä½éªã',
            action: 'å¨çº¿ä½éª',
            skills: ['Unity (C#)', 'AI ç¶ææº (FSM)', 'è·¯å¾ä¸è¡ä¸ºé»è¾', 'ç³»ç»è¿­ä»£è®¾è®¡', 'æ°æå¼å¯¼ä¼å']
          },
          project7: {
            title: 'æ°´åµä¹å¢ - æ è±',
            description: 'ãThere Are No Flowers On The Graves Of Sailorsãæ¯ä¸æ¬¾ä»¥è°è¹å¯¹æä¸ºæ ¸å¿çååç­ç¥æ¡æ¸¸ãææä»»ç³»ç»ç­åä¸æ°å¼ç­åï¼è´è´£è¹åªå±æ§ãæè½ææä¸æææ°å¼è®¾è®¡ãé¡¹ç®ä¸­æéå¯¹æ©æè§åè¿äºå¤æãæ°ç©å®¶çè§£ææ¬é«çé®é¢ï¼ä¸ä¸»ç­åå±åæ¨è¿ç³»ç»éæï¼ä¸»å¯¼è§åç®åãè§åææ¬éåä¸æ ¸å¿æµç¨æ¢³çãç»è¿å¤è½®ç©å®¶æµè¯ä¸æ°å¼è°æ´ï¼æ¹çåç©å®¶å¹³åçæè§åæ¶é¿è¾åå§çæ¬ç¼©ç­è¿ 20 åéï¼åæ¶ä¿çäºä¿¡æ¯éèãåä½å·®å¼ä¸éæºå¤å®å¸¦æ¥çç­ç¥æ·±åº¦ã',
            action: 'ä¸è½½è®¾è®¡ææ¡£',
            skills: ['ç³»ç»ç­å', 'æ°å¼ç­å', 'è§åç®å', 'ç©å®¶æµè¯ä¸»æ', 'æ¡æ¸¸ç­ç¥è®¾è®¡']
          },
          project8: {
            title: 'ä½ è¢«å¼é¤äº',
            description: 'ãU Are Firedãæ¯ä¸æ¬¾ Game Jam éæ¶å¼åä½åï¼æ¯ä»¥âèåºååâä¸ºä¸»é¢çä¿¯è§è§ Roguelike å°å»æ¸¸æãæè´è´£é¡¹ç®ä¸»æä¸è¿åº¦æ¨è¿ï¼åè°å¢éæç¡®å¼åç®æ ãåè½ä¼åçº§ä¸é¶æ®µä»»å¡ï¼åæ¶å®æä¸»èåååºç¡ UI çè®¾è®¡ä¸å®æ½ï¼å¹¶æ°åé¡¹ç®ç­åææ¡£ï¼æ´çç©æ³è®¾å®ãç³»ç»è§åä¸å¼åéæ±ãé¡¹ç®å¨ Game Jam å¨æåå®æäºå¯è¿è¡çæ¬ï¼åå«åºç¡ææå¾ªç¯ãUI æµç¨åä¸»é¢åäºæ°å´ã',
            action: 'åå¾ itch.io',
            skills: ['é¡¹ç®ç®¡ç', 'ç­åææ¡£æ°å', 'UI å®æ½', 'èå´æ§å¶', 'Game Jam å¼å']
          },
          project9: {
            title: 'åéå¾·ç´¯æ¯é¡¿',
            description: 'ãThe Dresden Files: Double Dresdenãæ¯å­¦æ ¡å°ç»åä½å¼åçç¹å»å¼ä¾¦æ¢è§£è°æ¸¸æï¼åºäºè¯¾ç¨æå¸æä¾ç IP æ¹ç¼ãæååå¢éè®¾è®¡å¹¶å®ç°æ ¸å¿è§£è°æµç¨ï¼è´è´£çº¿ç´¢ JSON æä»¶ç»æè®¾è®¡åçº¦ 30% äº¤äºåå®¹å¼åï¼åæ¶æ°åæ¯æ¬¡æ¸¸ç©æµè¯çé®å·å¹¶ä¸»ææµè¯ãç´¯è®¡äºæ¬¡é¶æ®µæ§æµè¯ä¸­ï¼ç©å®¶å¯¹ UI åç´ åè½è®¤ç¥ä¸äº¤äºä½éªçåé¦è¯åæç»­ä¸åã',
            action: 'ä¸è½½å®è£å',
            skills: ['è§£è°æµç¨è®¾è®¡', 'çº¿ç´¢ JSON ç»æ', 'äº¤äºå¼å', 'é®å·è®¾è®¡', 'æµè¯ä¸»æ']
          },
          project10: {
            title: 'TrenchWhisperer',
            description: 'ãTrenchWhispererãæ¯ä¸æ¬¾åºäº Unity å¼åç AI æå­è§è²æ®æ¼æ¸¸æï¼æ¢ç´¢ LLM ä¸ RAG ææ¯å¨æ¸¸æåäºãè§è²äº¤äºä¸å¨æåé¦ä¸­çè½å°åºç¨ãææä»»ä¸»ç­åä¸å¼åï¼è´è´£æ ¸å¿ç©æ³è®¾è®¡ãRAG ç¥è¯åºæ£ç´¢é»è¾æ­å»ºãâæçåº¦âå¨æå¤å®ç³»ç»è®¾è®¡ï¼ä»¥åæ¬å°æ¨¡åé¨ç½²ä¸äºç«¯ API è°ç¨ä¸¤ç§è¿è¡æ¨¡å¼çéæãé¡¹ç®æéäºä» Prompt Engineering å°æ¸¸æåå®¹çæä¸è½å°çåºç¡çäº§é¾è·¯ã',
            action: 'ä¸è½½æ¸¸æ',
            skills: ['Unity (C#)', 'LLM æ¬å°é¨ç½²', 'RAG æ£ç´¢é»è¾', 'æçåº¦å¨æå¤å®', 'Prompt Engineering æµç¨']
          }
        },
        contact: {
          title: 'èç³»æ',
          description: 'å¦æä½ æ³åä½ï¼ææ³è¿ä¸æ­¥äºè§£æçé¡¹ç®ï¼æ¬¢è¿èç³»æã',
          sendEmail: 'åéé®ä»¶'
        },
        footer: {
          copyright: 'Â© 2025 çä¸ç. ä¿çæææå©ã'
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

      const image = document.createElement('img');
      image.src = project.image;
      image.alt = projectText.title;

      link.append(image);
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

