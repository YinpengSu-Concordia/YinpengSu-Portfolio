
(function(){
  const I18N = {
  "en": {
    "brandSubtitle": "Personal Research Portfolio",
    "navHome": "Home",
    "navCV": "CV",
    "navProjects": "Projects",
    "navContact": "More Info",
    "footerLine": "Research software · Data visualization · Personal portfolio",
    "footerDemo": "Interactive Demo",
    "footerCV": "CV",
    "homeTitle": "Research Software Developer | Full-Stack Web | Data Visualization",
    "btnProjects": "View Projects",
    "btnCV": "View CV",
    "btnContact": "Contact",
    "btnDemo": "View Interactive Demo",
    "proof1Title": "Understand the Problem",
    "proof1Body": "I first try to clarify the research question, data structure, model logic, or practical workflow behind a project.",
    "proof2Title": "Build the Structure",
    "proof2Body": "I then organize the idea into code, file structures, visual outputs, or a small interactive prototype.",
    "proof3Title": "Make the Result Easier to Understand",
    "proof3Body": "Finally, I focus on whether the result can be inspected, explained, reproduced, and shared.",
    "aboutKicker": "About Me",
    "aboutTitle": "Computer science, clear explanations, and a habit of turning rough ideas into usable tools.",
    "aboutBody1": "I have a background in computer science and have worked on projects involving Python simulation, data analysis, web development, and research-oriented visualization. I am especially interested in connecting technical implementation with clear explanation: turning raw data, model outputs, or abstract ideas into something that can be inspected, tested, and discussed.",
    "aboutBody2": "I also hope to present distilled knowledge in a more intuitive way, so that more people who are interested in a topic can understand it more easily.",
    "aboutBody3": "Outside academic and technical work, I enjoy fitness, skiing, hiking, outdoor exploration, and cooperative board games — especially tabletop role-playing games. I have a growing dice collection, some bought by myself and some given by friends. If you are interested, maybe we can run a TRPG session together someday.",
    "pill1": "Python Simulation",
    "pill2": "Data Analysis",
    "pill3": "Interactive Visualization",
    "pill4": "TRPG Dice Collector",
    "deerCaption": "Yes, you can probably tell that I like forests and deer. This space could be a profile photo, but for privacy and security reasons, please view my current professional photo on LinkedIn.",
    "contribKicker": "What I Am Building Toward",
    "contribTitle": "Three directions I am steadily developing",
    "card1Title": "Research Data Interfaces",
    "card1Body": "I am interested in organizing experimental outputs, simulation results, and analytical findings into clear web-based views.",
    "card2Title": "Interactive Model Explanation",
    "card2Body": "I like exploring how formulas, Python logic, and model behavior can be translated into small visual demos.",
    "card3Title": "Project Documentation Websites",
    "card3Body": "I also care about making research projects easier to present through clean pages, structured notes, figures, and reproducible materials.",
    "demoKicker": "Featured Demo",
    "demoTitle": "WorkLord Toolbox appears here as a simplified browser explanation layer.",
    "demoBody": "It is not the full Python toolbox. It is the part meant to help people see the model idea more quickly.",
    "btnOpenDemo": "Open Demo",
    "contactKicker": "More Information",
    "contactTitle": "LinkedIn and GitHub are the cleanest public paths for now.",
    "contactBody": "You can find more detailed and updated information about my background, projects, and professional profile through LinkedIn and GitHub. This public website keeps email and phone details private.",
    "contactLinkedInBody": "Professional profile, updated background, and messaging channel.",
    "contactGitHubBody": "Code profile for research software, visualization, and technical prototypes.",
    "contactPrivacyTitle": "Privacy note",
    "contactPrivacyBody": "Direct contact information can be shared through formal CV attachments or email communication when appropriate. I keep it off this public version because public websites can be indexed or scraped automatically.",
    "cvKicker": "CV / Resume",
    "cvHeroTitle": "Technical Research CV",
    "cvHeroBody": "A concise overview of my background in research software, data analysis, simulation, and interactive visualization.",
    "cvSidebarText": "Research Software · Data Analysis · Simulation · Interactive Visualization",
    "publicEmailPrivate": "Public email: available upon request",
    "publicPhonePrivate": "Phone: private on public website",
    "projKicker": "Projects & Interactive Research Demos",
    "projHeroTitle": "One project, shown as code, figures, and an interactive explanation.",
    "projHeroBody": "This page focuses on WorkLord because it represents the workflow I want to keep developing: theory → Python toolbox → figures → web-based explanation.",
    "featuredKicker": "Featured Project",
    "worklordTitle": "WorkLord Toolbox: Human Workload Simulation and Capacity Zone Visualization",
    "worklordBody1": "This project grew out of my learning and replication work on mental workload, performance zones, and task allocation in human–autonomy teaming.",
    "worklordBody2": "For me, WorkLord is not only about generating curves. It is a way to practice turning a theoretical model into a research-oriented tool: from reading the paper, implementing Python simulations, organizing code, producing figures, and finally presenting the idea through an interactive web interface.",
    "worklordBody3": "The demo on this website is a simplified visual explanation tool. The full computation, replication, and figure generation remain implemented in the Python Toolbox.",
    "metaRole": "Role",
    "metaRoleBody": "Replication, organization, visualization, web presentation",
    "metaStack": "Stack",
    "metaValue": "Research value",
    "metaValueBody": "Model → code → figures → interactive explanation",
    "metaTheory": "Theory",
    "metricsKicker": "Model Variables",
    "metricsTitle": "What do these variables mean in real life?",
    "metricsBody": "The sliders below are simplified, but each one has a concrete interpretation. This is where the model stops being only a formula and starts becoming something people can reason about.",
    "metricWorkload": "The demand created by the task itself. It can reflect complexity, time pressure, information load, and operational burden.",
    "metricCapacity": "The current upper limit of mental resources available for handling the task. It is affected by fatigue, attention, stress, preparation, and the person’s current state.",
    "metricBeta": "β represents a person’s baseline capability for this type of task in the simplified model. The same math problem may be heavy for an elementary school student but much easier for a university student.",
    "metricStressLimit": "The boundary before stress, fatigue, or overload becomes more obvious.",
    "metricEfficiency": "The highest efficiency that the person could reach under favorable conditions in this simplified visualization.",
    "metricZone": "A useful region where the task is challenging enough to engage performance, but still manageable for the person and their current state.",
    "interactiveKicker": "Interactive Demo",
    "interactiveTitle": "A simplified workload-efficiency simulator",
    "interactiveBody": "Move the sliders to change the curve. Then press the interpretation button to see a short explanation of the current situation.",
    "sliderCapacity": "Mental Capacity",
    "sliderBeta": "Individual Capability β",
    "sliderWorkload": "Task Workload",
    "sliderSigma": "Stress Limit",
    "sliderEpsilon": "Maximum Efficiency",
    "btnInterpret": "Interpret This Scenario",
    "zoneLaid": "Laid-back Zone",
    "zoneCapacity": "Capacity Zone",
    "zoneFatigue": "Fatigue Zone",
    "humanCurve": "Human efficiency curve",
    "workloadAxis": "Task workload",
    "efficiencyAxis": "Efficiency",
    "currentLabel": "Current",
    "demoMove": "Move sliders to update the curve.",
    "galleryKicker": "Figure Gallery",
    "galleryTitle": "Figures generated by the Python Toolbox",
    "galleryBody": "The figures below come from simulation and visualization outputs generated by the WorkLord Python Toolbox. The web demo is a simplified explanation layer, while these figures are closer to the full computational output.",
    "fig1Title": "Capability comparison",
    "fig1Desc": "Shows how changing β alters the workload-efficiency relationship.",
    "fig2Title": "Capacity zone overview",
    "fig2Desc": "A direct visual explanation of laid-back, capacity, and fatigue zones.",
    "fig3Title": "Capacity zone variation",
    "fig3Desc": "Shows how the productive region shifts under different parameter settings.",
    "fig4Title": "Efficiency over time",
    "fig4Desc": "Tracks simulated work efficiency across a task process.",
    "fig5Title": "Stress over time",
    "fig5Desc": "Shows how stress may accumulate during a simulated task process.",
    "fig6Title": "High-capability efficiency case",
    "fig6Desc": "Shows how a stronger capability setting can reshape efficiency dynamics.",
    "archKicker": "Code Architecture",
    "archTitle": "How I organized the research artifact",
    "archBody": "I organized the project into several clear components: parameter configuration, formulas and variables, simulation engine, visualization functions, user interaction, and result outputs. Research code should not only run; it should also make it clear how it runs, where the results come from, and which parameters can be adjusted.",
    "archConfig": "Default simulation parameters and reusable settings.",
    "archScripts": "Entry point for running the toolbox workflow.",
    "archCode": "Core formulas, simulation engine, visualization, and user interface logic.",
    "archResults": "Generated figures and execution logs for traceable output.",
    "archDocs": "Paper, report, and slide materials that explain the research context.",
    "archWeb": "A static front-end layer that communicates the model visually.",
    "learningKicker": "What I Learned",
    "learningTitle": "From an abstract model to something people can inspect.",
    "learningBody": "This project helped me practice how to break down, replicate, organize, and present a theoretical model. The most valuable part was turning an abstract research concept into runnable code, saved figures, an explainable webpage, and a project structure that can be extended later.",
    "scenarioKicker": "Scenario Interpretation",
    "scenarioEfficiency": "Efficiency",
    "scenarioStress": "Stress",
    "scenarioZone": "Zone",
    "scenarioBetaNote": "In this scenario, the workload is interpreted together with the person’s current mental capacity and individual capability parameter β. The same workload may lead to different performance depending on who is doing the task and what state they are currently in.",
    "zoneDescLaid": "The task demand is low relative to the person’s current capacity and β. Stress stays limited, but the task may not fully engage attention or performance potential.",
    "zoneDescCapacity": "The task demand and the person’s current resources are relatively well matched. It is challenging, but still manageable.",
    "zoneDescFatigue": "The task demand is moving beyond the comfortable processing range. Stress rises more clearly, and efficiency may decline.",
    "scenarioEffLow": "Efficiency is not at its best yet. The task may be too light or not sufficiently engaging.",
    "scenarioEffMid": "Efficiency is in a useful working range. The task is creating meaningful challenge.",
    "scenarioEffHigh": "Efficiency is high in this simplified model. The task and current ability settings are well matched.",
    "scenarioStressLow": "Stress level is low. This is comfortable, though possibly under-stimulating.",
    "scenarioStressMid": "Stress is moderate. This can be a productive level when the person still has enough capacity.",
    "scenarioStressHigh": "Stress is high. The person may need task pacing, support, or a workload adjustment."
  },
  "zh": {
    "brandSubtitle": "个人研究作品集",
    "navHome": "首页",
    "navCV": "简历",
    "navProjects": "项目",
    "navContact": "更多信息",
    "footerLine": "研究软件 · 数据可视化 · 个人作品集",
    "footerDemo": "交互 Demo",
    "footerCV": "简历",
    "homeTitle": "研究软件开发｜全栈网页｜数据可视化",
    "btnProjects": "查看项目",
    "btnCV": "查看简历",
    "btnContact": "联系",
    "btnDemo": "查看交互 Demo",
    "proof1Title": "理解问题",
    "proof1Body": "我会先尽量弄清楚一个项目背后的研究问题、数据结构、模型逻辑或实际工作流程。",
    "proof2Title": "搭建结构",
    "proof2Body": "然后把想法整理成代码、文件结构、图表结果，或者一个可以操作的小型交互原型。",
    "proof3Title": "让结果更容易被理解",
    "proof3Body": "最后，我会关注结果是否容易查看、解释、复现和分享。",
    "aboutKicker": "关于我",
    "aboutTitle": "计算机科学、清楚表达，以及把粗糙想法整理成可用工具的习惯。",
    "aboutBody1": "我有计算机科学背景，做过 Python 仿真、数据分析、网页开发和研究型可视化相关项目。我热衷于把技术实现和清楚表达结合起来：把原始数据、模型输出或抽象想法，整理成可以查看、测试和讨论的东西。",
    "aboutBody2": "我也希望将知识的结晶以更直观的方式呈现，让更多感兴趣的人更容易理解。",
    "aboutBody3": "在学习和技术项目之外，我也喜欢健身、滑雪、远足冒险等户外活动，还有合作型桌游，特别是跑团 TRPG。我拥有许多骰子收藏，有些是自己买的，有些是朋友送的。如果你也感兴趣，也许我们可以一起跑个团。",
    "pill1": "Python 仿真",
    "pill2": "数据分析",
    "pill3": "交互式可视化",
    "pill4": "TRPG 骰子收藏者",
    "deerCaption": "是的，你应该看得出来我喜欢森林和鹿。这里本来可以放我的头像，但出于隐私与安全考虑，请先到 LinkedIn 查看我的真人头像。",
    "contribKicker": "我正在发展的能力方向",
    "contribTitle": "三个我正在持续发展的方向",
    "card1Title": "研究数据界面",
    "card1Body": "我对把实验输出、仿真结果和分析结果整理成清楚的网页界面很感兴趣。",
    "card2Title": "模型解释与交互 Demo",
    "card2Body": "我也在尝试把公式、Python 逻辑和模型行为转化成可以操作的小型可视化 Demo。",
    "card3Title": "项目文档与展示页面",
    "card3Body": "我希望把研究项目整理得更容易展示：包括清楚的页面、结构化说明、图表和可复现材料。",
    "demoKicker": "核心 Demo",
    "demoTitle": "WorkLord Toolbox 在这里被做成了一个简化版浏览器解释层。",
    "demoBody": "它不是完整 Python 工具箱，而是帮助人更快看懂模型想法的网页部分。",
    "btnOpenDemo": "打开 Demo",
    "contactKicker": "更多信息",
    "contactTitle": "目前最适合公开展示的是 LinkedIn 和 GitHub。",
    "contactBody": "你可以通过 LinkedIn 和 GitHub 查看我更详细、更新的背景信息、项目内容和职业资料。这个公开网站暂时不展示邮箱和电话。",
    "contactLinkedInBody": "职业资料、更新背景和消息联系渠道。",
    "contactGitHubBody": "用于展示研究软件、可视化和技术原型的代码主页。",
    "contactPrivacyTitle": "隐私说明",
    "contactPrivacyBody": "正式联系时，我可以通过 CV 附件或邮件沟通提供直接联系方式。我将这些信息保留在公开网站之外，因为公开网站可能被自动索引或爬取。",
    "cvKicker": "CV / 简历",
    "cvHeroTitle": "技术型研究简历",
    "cvHeroBody": "这里简要整理了我在研究软件、数据分析、仿真和交互式可视化方面的背景。",
    "cvSidebarText": "研究软件 · 数据分析 · 仿真 · 交互式可视化",
    "publicEmailPrivate": "公开邮箱：可在正式联系时提供",
    "publicPhonePrivate": "电话：公开网站暂不展示",
    "projKicker": "项目与交互式研究 Demo",
    "projHeroTitle": "一个项目，同时展示为代码、图表和交互式解释。",
    "projHeroBody": "这一页集中展示 WorkLord，因为它代表了我希望继续发展的工作流：理论 → Python 工具箱 → 图表 → 网页化解释。",
    "featuredKicker": "代表项目",
    "worklordTitle": "WorkLord Toolbox：人类工作负荷仿真与 Capacity Zone 可视化",
    "worklordBody1": "这个项目来自我对心理工作负荷、表现区间和人机协作中任务分配问题的学习与复刻。",
    "worklordBody2": "对我来说，WorkLord 的重点不仅是画出几张曲线，而是学习如何把一个理论模型整理成完整的研究工具：从论文理解、Python 仿真、代码结构、图表输出，到最后放进一个可以交互查看的网页界面。",
    "worklordBody3": "这个网页里的 Demo 是一个简化版视觉解释工具。完整的计算、复刻和图表生成仍然保留在 Python Toolbox 中。",
    "metaRole": "我的角色",
    "metaRoleBody": "复刻、整理、可视化、网页展示",
    "metaStack": "技术栈",
    "metaValue": "科研价值",
    "metaValueBody": "模型 → 代码 → 图表 → 交互解释",
    "metaTheory": "理论来源",
    "metricsKicker": "模型变量",
    "metricsTitle": "这些指标在现实中是什么意思？",
    "metricsBody": "下面的滑块是简化表达，但每个变量都有具体含义。这里让模型从公式变成可以被人理解和讨论的东西。",
    "metricWorkload": "任务本身带来的要求。它可以包括任务复杂度、时间压力、信息量和操作负担。",
    "metricCapacity": "人在当前状态下可用于处理任务的心理资源上限。它可能受到疲劳、注意力、压力、准备程度和当下状态影响。",
    "metricBeta": "β 代表人在某一类任务上的基础能力或能力系数。比如同一道数学题，对小学生可能是很高的负荷，对大学生可能就轻松很多。",
    "metricStressLimit": "人在进入明显压力、疲劳或过载前的边界。",
    "metricEfficiency": "在这个简化可视化模型中，人在较理想条件下可能达到的最高效率。",
    "metricZone": "一个相对有效的工作区间：任务有足够挑战，可以调动表现，但仍在当前个人状态可处理范围内。",
    "interactiveKicker": "交互 Demo",
    "interactiveTitle": "简化工作负荷—效率模拟器",
    "interactiveBody": "拖动滑块可以改变曲线。点击解释按钮后，可以看到当前情境的简短说明。",
    "sliderCapacity": "心理承受能力上限",
    "sliderBeta": "个体能力参数 β",
    "sliderWorkload": "任务工作负荷",
    "sliderSigma": "压力边界",
    "sliderEpsilon": "最高效率",
    "btnInterpret": "解释当前情境",
    "zoneLaid": "轻松区",
    "zoneCapacity": "能力区",
    "zoneFatigue": "疲劳区",
    "humanCurve": "人类效率曲线",
    "workloadAxis": "任务负荷",
    "efficiencyAxis": "效率",
    "currentLabel": "当前",
    "demoMove": "移动滑块更新曲线。",
    "galleryKicker": "图表展示",
    "galleryTitle": "Python Toolbox 生成的图表",
    "galleryBody": "下面这些图来自 WorkLord Python 工具箱的仿真与可视化结果。网页 Demo 是简化解释版，而这些图更接近完整工具箱中的计算输出。",
    "fig1Title": "个体能力参数对比",
    "fig1Desc": "展示 β 的变化如何影响工作负荷与效率之间的关系。",
    "fig2Title": "Capacity Zone 总览",
    "fig2Desc": "直接展示轻松区、能力区和疲劳区的视觉关系。",
    "fig3Title": "Capacity Zone 变化",
    "fig3Desc": "展示不同参数设置下，较有效的工作区间如何移动。",
    "fig4Title": "效率随时间变化",
    "fig4Desc": "展示一个模拟任务过程中工作效率如何变化。",
    "fig5Title": "压力随时间变化",
    "fig5Desc": "展示压力如何在模拟任务过程中累积。",
    "fig6Title": "高能力参数效率案例",
    "fig6Desc": "展示更高个体能力设置如何影响效率动态。",
    "archKicker": "代码结构",
    "archTitle": "我如何整理这个研究项目",
    "archBody": "我把这个项目整理成几个相对清楚的部分：参数配置、公式与变量、仿真引擎、可视化函数、交互入口和结果输出。研究代码不仅要能跑，也要让后来的人知道它如何运行、结果从哪里来、哪些参数可以调整。",
    "archConfig": "默认仿真参数和可复用设置。",
    "archScripts": "运行工具箱工作流的入口。",
    "archCode": "核心公式、仿真引擎、可视化和用户交互逻辑。",
    "archResults": "生成图表和运行日志，方便追踪输出。",
    "archDocs": "论文、报告和幻灯片材料，用于说明研究背景。",
    "archWeb": "一个静态前端层，用于把模型以视觉方式表达出来。",
    "learningKicker": "我从这个项目中学到的事",
    "learningTitle": "从抽象模型到可以被查看和讨论的东西。",
    "learningBody": "这个项目让我练习了如何把一个理论模型拆开、复刻、整理和展示。最有价值的部分，是把看起来抽象的研究概念一步一步变成可以运行的代码、可以保存的图表、可以解释的网页和可以继续扩展的项目结构。",
    "scenarioKicker": "情境解释",
    "scenarioEfficiency": "工作效率",
    "scenarioStress": "压力",
    "scenarioZone": "区间",
    "scenarioBetaNote": "在这个情境中，任务负荷会和当前心理承受能力、个体能力参数 β 一起解释。同样的任务负荷，面对不同的人，或者面对同一个人不同状态，可能产生完全不同的表现。",
    "zoneDescLaid": "相对于当前心理承受能力和 β，任务需求较低。压力较低，但任务可能还没有充分调动注意力和表现潜力。",
    "zoneDescCapacity": "任务需求和当前心理资源比较匹配。任务有挑战性，但仍然在可管理范围内。",
    "zoneDescFatigue": "任务需求正在超过较舒适的处理范围。压力开始明显上升，效率可能下降。",
    "scenarioEffLow": "效率还没有达到较好状态。任务可能太轻，或还没有形成足够挑战。",
    "scenarioEffMid": "效率处在可用的工作区间。任务正在形成有意义的挑战。",
    "scenarioEffHigh": "在这个简化模型里，效率较高。任务和当前能力设置比较匹配。",
    "scenarioStressLow": "压力较低。这个状态舒适，但可能也偏轻松。",
    "scenarioStressMid": "压力适中。如果仍有足够容量，这可能是比较有效的状态。",
    "scenarioStressHigh": "压力较高。此时可能需要调整任务节奏、提供支持或重新分配工作负荷。"
  },
  "fr": {
    "brandSubtitle": "Portfolio personnel de recherche",
    "navHome": "Accueil",
    "navCV": "CV",
    "navProjects": "Projets",
    "navContact": "Plus d’infos",
    "footerLine": "Logiciel de recherche · Visualisation de données · Portfolio personnel",
    "footerDemo": "Démo interactive",
    "footerCV": "CV",
    "homeTitle": "Développement logiciel de recherche | Web full-stack | Visualisation de données",
    "btnProjects": "Voir les projets",
    "btnCV": "Voir le CV",
    "btnContact": "Contact",
    "btnDemo": "Voir la démo interactive",
    "proof1Title": "Comprendre le problème",
    "proof1Body": "Je commence par clarifier la question de recherche, la structure des données, la logique du modèle ou le flux de travail pratique derrière un projet.",
    "proof2Title": "Construire la structure",
    "proof2Body": "J’organise ensuite l’idée sous forme de code, de structure de fichiers, de résultats visuels ou de petit prototype interactif.",
    "proof3Title": "Rendre le résultat plus facile à comprendre",
    "proof3Body": "Enfin, je me concentre sur la façon dont le résultat peut être examiné, expliqué, reproduit et partagé.",
    "aboutKicker": "À propos de moi",
    "aboutTitle": "Informatique, explications claires et habitude de transformer des idées brutes en outils utilisables.",
    "aboutBody1": "J’ai une formation en informatique et j’ai travaillé sur des projets liés à la simulation Python, à l’analyse de données, au développement web et à la visualisation orientée recherche. J’aime particulièrement relier la mise en œuvre technique à une explication claire : transformer des données brutes, des résultats de modèles ou des idées abstraites en éléments que l’on peut examiner, tester et discuter.",
    "aboutBody2": "J’aimerais aussi présenter les connaissances de manière plus intuitive, afin que les personnes intéressées puissent les comprendre plus facilement.",
    "aboutBody3": "En dehors du travail académique et technique, j’aime l’entraînement, le ski, la randonnée, les activités de plein air et les jeux de société coopératifs, en particulier les jeux de rôle sur table. J’ai une collection de dés, certains achetés par moi-même et d’autres offerts par des amis. Si cela vous intéresse, nous pourrions peut-être jouer une partie de TRPG ensemble un jour.",
    "pill1": "Simulation Python",
    "pill2": "Analyse de données",
    "pill3": "Visualisation interactive",
    "pill4": "Collectionneur de dés TRPG",
    "deerCaption": "Oui, vous pouvez probablement deviner que j’aime les forêts et les cerfs. Cet espace pourrait contenir une photo de profil, mais pour des raisons de confidentialité et de sécurité, veuillez consulter ma photo professionnelle actuelle sur LinkedIn.",
    "contribKicker": "Ce que je développe",
    "contribTitle": "Trois directions que je développe progressivement",
    "card1Title": "Interfaces pour données de recherche",
    "card1Body": "Je m’intéresse à l’organisation des résultats expérimentaux, des simulations et des analyses dans des interfaces web claires.",
    "card2Title": "Explication interactive de modèles",
    "card2Body": "J’explore aussi la manière de transformer des formules, de la logique Python et le comportement de modèles en petits demos visuels.",
    "card3Title": "Pages de documentation de projet",
    "card3Body": "Je porte également attention à la présentation des projets de recherche à travers des pages propres, des notes structurées, des figures et des éléments reproductibles.",
    "demoKicker": "Démo principale",
    "demoTitle": "WorkLord Toolbox apparaît ici comme une couche explicative simplifiée dans le navigateur.",
    "demoBody": "Ce n’est pas la boîte à outils Python complète. C’est la partie conçue pour aider les visiteurs à comprendre plus vite l’idée du modèle.",
    "btnOpenDemo": "Ouvrir la démo",
    "contactKicker": "Plus d’informations",
    "contactTitle": "LinkedIn et GitHub sont pour l’instant les chemins publics les plus propres.",
    "contactBody": "Vous pouvez consulter LinkedIn et GitHub pour obtenir des informations plus détaillées et à jour sur mon parcours, mes projets et mon profil professionnel. Ce site public garde l’adresse courriel et le numéro de téléphone privés.",
    "contactLinkedInBody": "Profil professionnel, informations mises à jour et canal de messagerie.",
    "contactGitHubBody": "Profil de code pour logiciel de recherche, visualisation et prototypes techniques.",
    "contactPrivacyTitle": "Note de confidentialité",
    "contactPrivacyBody": "Les coordonnées directes peuvent être partagées dans un CV formel ou lors d’un échange par courriel, lorsque cela est approprié. Je les garde hors de cette version publique parce que les sites publics peuvent être indexés ou explorés automatiquement.",
    "cvKicker": "CV / Résumé",
    "cvHeroTitle": "CV technique orienté recherche",
    "cvHeroBody": "Un aperçu concis de mon parcours en logiciel de recherche, analyse de données, simulation et visualisation interactive.",
    "cvSidebarText": "Logiciel de recherche · Analyse de données · Simulation · Visualisation interactive",
    "publicEmailPrivate": "Courriel public : disponible sur demande",
    "publicPhonePrivate": "Téléphone : privé sur le site public",
    "projKicker": "Projets et démos interactives de recherche",
    "projHeroTitle": "Un projet présenté à la fois comme code, figures et explication interactive.",
    "projHeroBody": "Cette page se concentre sur WorkLord, car il représente le flux de travail que je souhaite continuer à développer : théorie → boîte à outils Python → figures → explication web.",
    "featuredKicker": "Projet principal",
    "worklordTitle": "WorkLord Toolbox : simulation de charge humaine et visualisation de Capacity Zone",
    "worklordBody1": "Ce projet est né de mon travail d’apprentissage et de reproduction autour de la charge mentale, des zones de performance et de l’allocation des tâches dans les systèmes humain–autonomie.",
    "worklordBody2": "Pour moi, WorkLord ne consiste pas seulement à produire des courbes. C’est une manière d’apprendre à transformer un modèle théorique en outil orienté recherche : lecture de l’article, simulation Python, organisation du code, génération de figures, puis présentation de l’idée dans une interface web interactive.",
    "worklordBody3": "La démo présente sur ce site est un outil visuel simplifié. Les calculs complets, la reproduction et la génération des figures restent implémentés dans la boîte à outils Python.",
    "metaRole": "Rôle",
    "metaRoleBody": "Réplication, organisation, visualisation, présentation web",
    "metaStack": "Technologies",
    "metaValue": "Valeur recherche",
    "metaValueBody": "Modèle → code → figures → explication interactive",
    "metaTheory": "Théorie",
    "metricsKicker": "Variables du modèle",
    "metricsTitle": "Que signifient ces variables dans la réalité ?",
    "metricsBody": "Les curseurs ci-dessous sont simplifiés, mais chacun a une interprétation concrète. C’est là que le modèle cesse d’être seulement une formule et devient quelque chose que l’on peut raisonner.",
    "metricWorkload": "La demande créée par la tâche elle-même. Elle peut inclure la complexité, la pression temporelle, la quantité d’information et la charge opérationnelle.",
    "metricCapacity": "La limite supérieure des ressources mentales disponibles pour traiter la tâche dans l’état actuel de la personne. Elle peut être influencée par la fatigue, l’attention, le stress, la préparation et l’état du moment.",
    "metricBeta": "β représente la capacité de base d’une personne pour ce type de tâche dans le modèle simplifié. Le même problème de mathématiques peut être très exigeant pour un élève du primaire, mais beaucoup plus facile pour un étudiant universitaire.",
    "metricStressLimit": "La limite avant que le stress, la fatigue ou la surcharge deviennent plus visibles.",
    "metricEfficiency": "L’efficacité la plus élevée que la personne pourrait atteindre dans des conditions favorables dans cette visualisation simplifiée.",
    "metricZone": "Une zone utile où la tâche est suffisamment stimulante pour mobiliser la performance, tout en restant gérable pour la personne et son état actuel.",
    "interactiveKicker": "Démo interactive",
    "interactiveTitle": "Un simulateur simplifié charge–efficacité",
    "interactiveBody": "Déplacez les curseurs pour modifier la courbe. Appuyez ensuite sur le bouton d’interprétation pour voir une courte explication de la situation actuelle.",
    "sliderCapacity": "Capacité mentale",
    "sliderBeta": "Paramètre de capacité individuelle β",
    "sliderWorkload": "Charge de tâche",
    "sliderSigma": "Limite de stress",
    "sliderEpsilon": "Efficacité maximale",
    "btnInterpret": "Interpréter ce scénario",
    "zoneLaid": "Zone détendue",
    "zoneCapacity": "Zone de capacité",
    "zoneFatigue": "Zone de fatigue",
    "humanCurve": "Courbe d’efficacité humaine",
    "workloadAxis": "Charge de la tâche",
    "efficiencyAxis": "Efficacité",
    "currentLabel": "État actuel",
    "demoMove": "Déplacez les curseurs pour mettre à jour la courbe.",
    "galleryKicker": "Galerie de figures",
    "galleryTitle": "Figures générées par la boîte à outils Python",
    "galleryBody": "Les figures ci-dessous proviennent des sorties de simulation et de visualisation générées par la boîte à outils Python WorkLord. La démo web est une couche explicative simplifiée, tandis que ces figures se rapprochent davantage des résultats computationnels complets.",
    "fig1Title": "Comparaison de capacité individuelle",
    "fig1Desc": "Montre comment β modifie la relation charge–efficacité.",
    "fig2Title": "Vue d’ensemble de Capacity Zone",
    "fig2Desc": "Explique visuellement les zones détendue, de capacité et de fatigue.",
    "fig3Title": "Variation de Capacity Zone",
    "fig3Desc": "Montre comment la région productive se déplace selon les paramètres.",
    "fig4Title": "Efficacité dans le temps",
    "fig4Desc": "Suit l’efficacité simulée pendant un processus de tâche.",
    "fig5Title": "Stress dans le temps",
    "fig5Desc": "Montre comment le stress peut s’accumuler pendant un processus de tâche simulé.",
    "fig6Title": "Cas d’efficacité avec capacité élevée",
    "fig6Desc": "Montre comment un paramètre de capacité plus fort peut modifier la dynamique d’efficacité.",
    "archKicker": "Architecture du code",
    "archTitle": "Comment j’ai organisé cet artefact de recherche",
    "archBody": "J’ai organisé le projet en plusieurs composants clairs : configuration des paramètres, formules et variables, moteur de simulation, fonctions de visualisation, interaction utilisateur et sorties de résultats. Le code de recherche doit non seulement fonctionner, mais aussi montrer clairement comment il fonctionne, d’où viennent les résultats et quels paramètres peuvent être ajustés.",
    "archConfig": "Paramètres de simulation par défaut et réglages réutilisables.",
    "archScripts": "Point d’entrée pour exécuter le flux de travail.",
    "archCode": "Formules centrales, moteur de simulation, visualisation et logique d’interface utilisateur.",
    "archResults": "Figures générées et journaux d’exécution pour des résultats traçables.",
    "archDocs": "Article, rapport et diapositives expliquant le contexte de recherche.",
    "archWeb": "Couche front-end statique pour communiquer le modèle visuellement.",
    "learningKicker": "Ce que ce projet m’a appris",
    "learningTitle": "D’un modèle abstrait à quelque chose que l’on peut examiner.",
    "learningBody": "Ce projet m’a permis de pratiquer la décomposition, la reproduction, l’organisation et la présentation d’un modèle théorique. La partie la plus précieuse a été de transformer un concept de recherche abstrait en code exécutable, en figures sauvegardées, en page web explicative et en structure de projet pouvant être développée par la suite.",
    "scenarioKicker": "Interprétation du scénario",
    "scenarioEfficiency": "Efficacité",
    "scenarioStress": "Stress",
    "scenarioZone": "Zone",
    "scenarioBetaNote": "Dans ce scénario, la charge de la tâche est interprétée avec la capacité mentale actuelle et le paramètre de capacité individuelle β. Une même charge peut produire des performances différentes selon la personne et son état du moment.",
    "zoneDescLaid": "La demande est faible par rapport à la capacité mentale actuelle et à β. Le stress reste limité, mais la tâche peut ne pas mobiliser pleinement l’attention et le potentiel de performance.",
    "zoneDescCapacity": "La demande de la tâche et les ressources actuelles sont relativement bien alignées. La tâche est stimulante, mais reste gérable.",
    "zoneDescFatigue": "La demande dépasse une zone de traitement confortable. Le stress augmente plus clairement et l’efficacité peut diminuer.",
    "scenarioEffLow": "L’efficacité n’est pas encore à son meilleur niveau. La tâche peut être trop légère ou pas assez engageante.",
    "scenarioEffMid": "L’efficacité se trouve dans une zone de travail utile. La tâche crée un défi significatif.",
    "scenarioEffHigh": "Dans ce modèle simplifié, l’efficacité est élevée. La tâche et les paramètres de capacité actuels sont bien alignés.",
    "scenarioStressLow": "Le stress est faible. Cet état est confortable, mais possiblement peu stimulant.",
    "scenarioStressMid": "Le stress est modéré. Cela peut être productif si la personne dispose encore d’une capacité suffisante.",
    "scenarioStressHigh": "Le stress est élevé. Il peut être utile d’ajuster le rythme, d’apporter du soutien ou de redistribuer la charge."
  }
};
  let lang = localStorage.getItem('portfolioLang') || 'en';
  if(!I18N[lang]) lang = 'en';
  function tr(key){ return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }
  function applyLang(next){
    lang = next || lang;
    localStorage.setItem('portfolioLang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = tr(el.dataset.i18n); });
    document.querySelectorAll('[data-lang]').forEach(btn=>btn.classList.toggle('active', btn.dataset.lang===lang));
    document.querySelectorAll('[data-content-lang]').forEach(el=>{ el.hidden = el.dataset.contentLang !== lang; });
    if(typeof window.drawWorklord === 'function') window.drawWorklord();
  }
  window.portfolioTranslate = tr;

  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.site-nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
  const page=document.body.dataset.page;
  document.querySelectorAll('.site-nav a').forEach(a=>{if(a.dataset.nav===page) a.classList.add('active');});
  document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>applyLang(btn.dataset.lang)));

  const lightbox=document.getElementById('lightbox');
  if(lightbox){
    const img=lightbox.querySelector('img');
    document.querySelectorAll('.gallery-card').forEach(card=>{card.addEventListener('click',()=>{img.src=card.dataset.full;img.alt=card.querySelector('img').alt;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');});});
    const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');img.src='';};
    lightbox.querySelector('button').addEventListener('click',close);
    lightbox.addEventListener('click',e=>{if(e.target===lightbox) close();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape') close();});
  }

  const canvas=document.getElementById('worklordCanvas');
  if(canvas){
    const ctx=canvas.getContext('2d');
    const sliders={ capacity:document.getElementById('capacity'), beta:document.getElementById('beta'), workload:document.getElementById('workload'), sigma:document.getElementById('sigma'), epsilon:document.getElementById('epsilon') };
    const outputs={ capacity:document.getElementById('capacityValue'), beta:document.getElementById('betaValue'), workload:document.getElementById('workloadValue'), sigma:document.getElementById('sigmaValue'), epsilon:document.getElementById('epsilonValue') };
    const status=document.getElementById('demoStatus');
    const interpretBtn=document.getElementById('interpretBtn');
    const modal=document.getElementById('scenarioModal');
    function model(){
      const capacity=parseFloat(sliders.capacity.value);
      const beta=parseFloat(sliders.beta.value);
      const workload=parseFloat(sliders.workload.value);
      const stressLimit=parseFloat(sliders.sigma.value);
      const epsilonMax=parseFloat(sliders.epsilon.value);
      const effective=capacity*beta;
      const ratio=workload/Math.max(1,effective);
      const peak=0.62;
      const spread=0.30;
      const curve=Math.exp(-Math.pow((ratio-peak)/spread,2));
      const efficiency=Math.max(0, Math.min(epsilonMax, epsilonMax*(0.12+0.88*curve)));
      const stress=Math.max(0, Math.min(160, 100*ratio/Math.max(0.1, stressLimit)));
      let zoneKey='zoneCapacity', descKey='zoneDescCapacity';
      if(ratio<0.38){zoneKey='zoneLaid';descKey='zoneDescLaid';}
      else if(ratio>stressLimit){zoneKey='zoneFatigue';descKey='zoneDescFatigue';}
      const effKey=efficiency<epsilonMax*0.45?'scenarioEffLow':efficiency<epsilonMax*0.78?'scenarioEffMid':'scenarioEffHigh';
      const stressKey=stress<45?'scenarioStressLow':stress<85?'scenarioStressMid':'scenarioStressHigh';
      return {capacity,beta,workload,stressLimit,epsilonMax,effective,ratio,efficiency,stress,zoneKey,descKey,effKey,stressKey};
    }
    function efficiencyAt(W,capacity,beta,epsilonMax){
      const ratio=W/Math.max(1,capacity*beta);
      const peak=0.62, spread=0.30;
      return Math.max(0, Math.min(epsilonMax, epsilonMax*(0.12+0.88*Math.exp(-Math.pow((ratio-peak)/spread,2)))));
    }
    window.drawWorklord = function(){
      const m=model();
      outputs.capacity.textContent=m.capacity.toFixed(0);outputs.beta.textContent=m.beta.toFixed(2);outputs.workload.textContent=m.workload.toFixed(0);outputs.sigma.textContent=m.stressLimit.toFixed(2);outputs.epsilon.textContent=m.epsilonMax.toFixed(0);
      const w=canvas.width,h=canvas.height,padL=74,padR=34,padT=42,padB=68;
      const stressBoundary=m.effective*m.stressLimit;
      const laidBoundary=m.effective*0.38;
      const maxX=Math.max(680, stressBoundary*1.25, m.workload*1.15, m.effective*1.35);
      const maxY=Math.max(m.epsilonMax*1.18, 170);
      const sx=x=>padL+x/maxX*(w-padL-padR);
      const sy=y=>h-padB-y/maxY*(h-padT-padB);
      ctx.clearRect(0,0,w,h); ctx.fillStyle='#ffffff'; ctx.fillRect(0,0,w,h);
      ctx.fillStyle='rgba(147,197,253,.25)';ctx.fillRect(sx(0),padT,Math.max(0,sx(laidBoundary)-sx(0)),h-padT-padB);
      ctx.fillStyle='rgba(134,239,172,.30)';ctx.fillRect(sx(laidBoundary),padT,Math.max(0,sx(stressBoundary)-sx(laidBoundary)),h-padT-padB);
      ctx.fillStyle='rgba(252,165,165,.28)';ctx.fillRect(sx(stressBoundary),padT,Math.max(0,sx(maxX)-sx(stressBoundary)),h-padT-padB);
      ctx.strokeStyle='#e2eadf';ctx.lineWidth=1;ctx.font='13px -apple-system, Segoe UI, sans-serif';ctx.fillStyle='#64736a';ctx.textAlign='center';
      for(let i=0;i<=6;i++){const x=maxX*i/6,px=sx(x);ctx.beginPath();ctx.moveTo(px,padT);ctx.lineTo(px,h-padB);ctx.stroke();ctx.fillText(Math.round(x),px,h-padB+26);}
      ctx.textAlign='right';
      for(let i=0;i<=5;i++){const y=maxY*i/5,py=sy(y);ctx.beginPath();ctx.moveTo(padL,py);ctx.lineTo(w-padR,py);ctx.stroke();ctx.fillText(Math.round(y),padL-12,py+4);}
      ctx.strokeStyle='#0f2a1d';ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(padL,padT);ctx.lineTo(padL,h-padB);ctx.lineTo(w-padR,h-padB);ctx.stroke();
      ctx.fillStyle='#0f2a1d';ctx.font='bold 15px -apple-system, Segoe UI, sans-serif';ctx.textAlign='center';ctx.fillText(tr('workloadAxis'),w/2,h-18);ctx.save();ctx.translate(22,h/2);ctx.rotate(-Math.PI/2);ctx.fillText(tr('efficiencyAxis'),0,0);ctx.restore();
      ctx.strokeStyle='#9baa93';ctx.lineWidth=3;ctx.setLineDash([9,7]);ctx.beginPath();ctx.moveTo(sx(m.effective*0.1),sy(0));ctx.lineTo(sx(m.effective*1.05),sy(m.epsilonMax));ctx.stroke();ctx.setLineDash([]);
      ctx.strokeStyle='#102018';ctx.lineWidth=4;ctx.beginPath();
      for(let i=0;i<=480;i++){const x=maxX*i/480,y=efficiencyAt(x,m.capacity,m.beta,m.epsilonMax);if(i===0)ctx.moveTo(sx(x),sy(y));else ctx.lineTo(sx(x),sy(y));}
      ctx.stroke();
      ctx.fillStyle='#2f6f45';ctx.beginPath();ctx.arc(sx(m.workload),sy(m.efficiency),8,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle='#2f6f45';ctx.lineWidth=1.5;ctx.setLineDash([4,6]);ctx.beginPath();ctx.moveTo(sx(m.workload),sy(m.efficiency));ctx.lineTo(sx(m.workload),h-padB);ctx.stroke();ctx.setLineDash([]);
      ctx.font='bold 14px -apple-system, Segoe UI, sans-serif';ctx.textAlign='center';ctx.fillStyle='#1d4ed8';ctx.fillText(tr('zoneLaid'),sx(Math.min(laidBoundary/2,maxX*.2)),padT+24);ctx.fillStyle='#15803d';ctx.fillText(tr('zoneCapacity'),sx((laidBoundary+stressBoundary)/2),padT+24);ctx.fillStyle='#dc2626';ctx.fillText(tr('zoneFatigue'),sx((stressBoundary+maxX)/2),padT+24);
      ctx.fillStyle='#102018';ctx.textAlign='left';ctx.font='bold 16px -apple-system, Segoe UI, sans-serif';ctx.fillText(`${tr('currentLabel')}: ${tr(m.zoneKey)}`,padL+16,padT+54);ctx.font='14px -apple-system, Segoe UI, sans-serif';ctx.fillStyle='#4f5f55';ctx.fillText(`W=${m.workload.toFixed(0)} · ε≈${m.efficiency.toFixed(1)} · stress≈${m.stress.toFixed(0)} · β=${m.beta.toFixed(2)}`,padL+16,padT+78);
      status.innerHTML=`<strong>${tr(m.zoneKey)}</strong><span>${tr(m.descKey)} W=${m.workload.toFixed(0)}, ε≈${m.efficiency.toFixed(1)}, stress≈${m.stress.toFixed(0)}.</span>`;
      return m;
    };
    function openScenario(){
      const m=window.drawWorklord();
      if(!modal) return;
      modal.querySelector('#scenarioTitle').textContent=tr(m.zoneKey);
      modal.querySelector('#scenarioIntro').textContent=tr(m.descKey);
      const effPct=Math.max(0, Math.min(100, Math.round((m.efficiency/m.epsilonMax)*100)));
      const stressPct=Math.max(0, Math.min(100, Math.round(m.stress)));
      modal.querySelector('#effMeter').style.width=effPct+'%';
      modal.querySelector('#stressMeter').style.width=stressPct+'%';
      modal.querySelector('#effText').textContent=`${effPct}% · ${tr(m.effKey)}`;
      modal.querySelector('#stressText').textContent=`${stressPct}% · ${tr(m.stressKey)}`;
      modal.querySelector('#zoneText').textContent=tr(m.descKey);
      modal.classList.add('open');modal.setAttribute('aria-hidden','false');
    }
    function closeScenario(){ if(modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');} }
    if(interpretBtn) interpretBtn.addEventListener('click',openScenario);
    if(modal){ modal.querySelector('.modal-close').addEventListener('click',closeScenario); modal.addEventListener('click',e=>{if(e.target===modal) closeScenario();}); document.addEventListener('keydown',e=>{if(e.key==='Escape') closeScenario();}); }
    Object.values(sliders).forEach(s=>s.addEventListener('input',window.drawWorklord));
  }
  applyLang(lang);
})();
