/*
 * Portfolio content presets
 * Duplicate a project or skill object to add another entry.
 * Project pages are mapped to the existing projectN.html URLs below.
 */
window.PORTFOLIO = {
    profile: {
        name: "Joah van der Sloot",
        role: "Software developer",
        location: "The Netherlands",
        email: "joahvandersloot@gmail.com",
        portrait: "assets/images/ProfielFoto.jpeg",
        aboutPortrait: "assets/images/ProfielFoto.jpeg",
        intro: "I develop software and interactive systems, with a background in game development and a growing interest in how technology works behind the scenes.",
        about: "I'm a software developer from the Netherlands, currently splitting my time between my internship at SimCen Land and my Creative Software Development studies. I like understanding how a system works, then making it useful for the people who rely on it. Games are where I first got hooked on programming, and I still enjoy building them, but I'm just as interested in the software and systems behind everyday work. Away from a screen, I'm often at the gym or training kickboxing, probably trying to solve a Rubik's cube, reading, watching a good film, spending time with animals, or getting outside. I enjoy learning how things fit together, whether that's a new tool, a story, or a route through nature."
    },
    resume: {
        headline: "Software developer with a year of professional experience in simulation systems.",
        summary: "I develop software and support simulation systems used in training. My experience combines hands-on system operation with technical design, presenting, and collaborative project work. I am currently studying Creative Software Development and continue to build practical experience through personal and team projects.",
        experience: [
            {
                role: "Software Development and Systems Operation Intern",
                organization: "Het Simulatiecentrum Landoptreden (SimCen Land), Koninklijke Landmacht",
                location: "Bernhardkazerne, Amersfoort, The Netherlands",
                dates: "2 February 2025 – Present",
                highlights: [
                    "Develop software and support the operation of simulation systems used for land-force training.",
                    "Contribute to technical designs and present software or system-related work to others.",
                    "Travelled abroad as a specialist to support work related to the simulation systems."
                ]
            }
        ],
        education: [
            { qualification: "Creative Software Development", institution: "Grafisch Lyceum Utrecht", dates: "2023 – 2027", location: "Utrecht, The Netherlands" }
        ],
        languages: ["Dutch", "English"],
        focus: ["Software development", "System operation", "Technical design", "Presenting", "Unity and C#", "Web development"],
        selectedProjects: ["factsheets-generator", "materiaal-management", "boxing-data-game"]
    },
    socials: [
        { label: "GitHub", url: "https://github.com/JoahvanderSloot", icon: "GitHub.png" },
        { label: "Instagram", url: "https://www.instagram.com/joahvandersloot", icon: "instagram.png" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/joah-van-der-sloot-73bbab310/", icon: "linkedin.png" },
        { label: "itch.io", url: "https://joahvds.itch.io/", icon: "itch.png" },
        { label: "Resume", url: "resume.html", icon: "Resume.png" }
    ],
    skills: {
        hard: [
            { id: "software-development", name: "Software development", group: "Professional experience", level: "1 year professional experience", description: "Contribute to software used alongside simulation systems for land-force training.", projects: [], resumeExperience: true },
            { id: "simulation-systems", name: "Simulation systems", group: "Systems", level: "Professional experience", description: "Operate and support simulation systems in a military training environment.", projects: [], resumeExperience: true },
            { id: "technical-design", name: "Technical design", group: "Engineering practice", level: "Professional experience", description: "Contribute to technical designs for software and simulation work.", projects: [], resumeExperience: true },
            { id: "database", name: "Databases and data handling", group: "Data", level: "Project experience", description: "Collect and present game data through a Svelte-connected data system.", projects: ["boxing-data-game"] },
            { id: "svelte", name: "Svelte", group: "Web development", level: "Project experience", description: "Build an interactive game project connected to a data system.", projects: ["boxing-data-game"] },
            { id: "unity", name: "Unity", group: "Game engine", level: "Primary", description: "Builds 2D and 3D game experiences, gameplay systems, UI, and menus.", projects: ["slipstream", "grapple-battle", "space-fighter", "wa-lch"] },
            { id: "csharp", name: "C#", group: "Programming", level: "Primary", description: "Gameplay logic, reusable systems, and tools for Unity projects.", projects: ["space-fighter", "grapple-battle", "slipstream"] },
            { id: "gameplay", name: "Gameplay systems", group: "Interactive development", level: "Experienced", description: "Game loops, player-facing features, enemies, scoring, progression, and interaction.", projects: ["color-dodge", "wa-lch-origins", "space-fighter"] },
            { id: "ui", name: "UI and menus", group: "Interface development", level: "Experienced", description: "Interfaces, menus, settings, and clear user feedback.", projects: ["merge-packing", "ballpit-chase", "slipstream"] },
            { id: "multiplayer", name: "Multiplayer", group: "Networking", level: "Project experience", description: "Online rooms and local multiplayer player workflows.", projects: ["grapple-battle", "ballpit-chase"] },
            { id: "html", name: "HTML", group: "Web", level: "Working knowledge", description: "Semantic page structure and accessible web content.", projects: ["portfolio"] },
            { id: "css", name: "CSS", group: "Web", level: "Working knowledge", description: "Responsive layouts, styling, and interface states.", projects: ["portfolio"] },
            { id: "javascript", name: "JavaScript", group: "Web", level: "Working knowledge", description: "Small web interactions and p5.js sketches.", projects: ["portfolio"] },
            { id: "git", name: "Git and GitHub", group: "Workflow", level: "Experienced", description: "Version control and collaboration across individual and team projects.", projects: ["slipstream", "wa-lch-origins", "portfolio"] },
            { id: "blender", name: "Blender", group: "3D", level: "Project experience", description: "3D asset and level-work collaboration in game projects.", projects: ["slipstream", "ballpit-chase"] },
            { id: "php", name: "PHP and databases", group: "Web", level: "Foundational", description: "Basic backend and database integration experience.", projects: [] },
            { id: "p5js", name: "p5.js", group: "Creative coding", level: "Foundational", description: "Creative coding fundamentals and small interactive sketches.", projects: [] }
        ],
        soft: [
            { id: "presenting", name: "Presenting", group: "Communication", level: "Professional experience", description: "Present software and system-related work to others.", projects: [], resumeExperience: true },
            { id: "teamwork", name: "Teamwork", group: "Collaboration", level: "Experienced", description: "Contribute across disciplines and support shared goals in small teams.", projects: ["slipstream", "ballpit-chase", "wa-lch-origins"] },
            { id: "communication", name: "Communication", group: "Collaboration", level: "Experienced", description: "Coordinate with teammates in person and across international online work.", projects: ["slipstream", "ballpit-chase"] },
            { id: "planning", name: "Planning and ownership", group: "Delivery", level: "Project experience", description: "Break down work, plan sprint tasks, and take responsibility for delivery.", projects: ["ballpit-chase", "slipstream"] },
            { id: "adaptability", name: "Adaptability", group: "Delivery", level: "Experienced", description: "Switch priorities and help across features when a team needs it.", projects: ["wa-lch-origins", "merge-packing"] },
            { id: "problem-solving", name: "Problem solving", group: "Creative practice", level: "Experienced", description: "Investigate unfamiliar problems and find practical solutions through iteration.", projects: ["grapple-battle", "space-fighter"] },
            { id: "creative-thinking", name: "Creative thinking", group: "Creative practice", level: "Experienced", description: "Turn a prompt or rough idea into a focused player experience.", projects: ["merge-packing", "color-dodge"] }
        ]
    },
    projects: [
        {
            id: "merge-packing", page: "project1.html", title: "Merge Packing", category: "Game", year: "2025", image: "assets/images/MergePacking.png",
            summary: "A quick, tactile mobile merge game made during a four-day game jam.", description: "Drop toys into a box and merge matching items into larger ones. Every merge adds points, while packing peanuts slowly take up space. Clear them by combining two of the biggest toys before the box fills.", contribution: "I built the game manager, game loop, score and high-score flow, UI, and menus. I also helped with item and merge behavior.", tools: ["Unity", "C#", "Photoshop"], tags: ["unity", "csharp", "gameplay", "ui", "teamwork", "creative-thinking"], duration: "4 days, 4-person team", date: "9 May 2025", imageAlt: "Merge Packing gameplay", video: "assets/images/ScreenShots/MergePackingVideo.mp4", screenshots: ["assets/images/ScreenShots/MergePackingScreenshot1.jpg"], itch: "https://joahvds.itch.io/merge-packing", embed: "https://itch.io/embed-upload/13820968?color=ffffff", github: "https://github.com/JoahvanderSloot/Packing-Merge",
            showcase: [
                { type: "code", title: "Choose the next item", language: "csharp", code: "void ChooseRandomDrop()\n{\n    if (nextDropIndex == -1)\n        nextDropIndex = 0;\n    else\n    {\n        int nextIndex = Random.Range(1, dropPrefabs.Length);\n        nextDropIndex = nextIndex == nextDropIndex ? 0 : nextIndex;\n    }\n\n    nextDrop = dropPrefabs[nextDropIndex];\n    nextDropDisplay.GetComponent<Image>().sprite =\n        nextDrop.GetComponent<SpriteRenderer>().sprite;\n}" },
                { type: "image", src: "assets/images/ScreenShots/MergePackingScreenshot1.jpg", alt: "A Merge Packing gameplay screenshot", caption: "The game loop and item presentation." }
            ]
        },
        {
            id: "grapple-battle", page: "project2.html", title: "Grapple Battle", category: "Game", year: "2025", image: "assets/images/GrappleBattle.png",
            summary: "A first-person 1v1 arena fighter built around grappling movement.", description: "Fight on floating islands with a katana, shurikens, and a grappling hook. Movement and timing turn each match into a fast duel above the void.", contribution: "A solo project. I made the game systems and multiplayer experience, using Photon PUN 2. Art assets and some audio came from external sources.", tools: ["Unity", "C#", "Photon PUN 2"], tags: ["unity", "csharp", "multiplayer", "gameplay", "problem-solving"], duration: "9 weeks, solo", date: "11 April 2025", imageAlt: "Grapple Battle arena", screenshots: ["assets/images/ScreenShots/GrappleBattleScreenshot1.png", "assets/images/ScreenShots/GrappleBattleScreenshot2.png", "assets/images/ScreenShots/GrappleBattleScreenshot3.png", "assets/images/ScreenShots/GrappleBattleScreenshot4.png"], youtube: "https://www.youtube-nocookie.com/embed/w_6AXxW0HN4", itch: "https://joahvds.itch.io/grapple-battle", embed: "https://itch.io/embed-upload/13684119?color=4F3C69", github: "https://github.com/JoahvanderSloot/Grapple-Battle",
            showcase: [
                { type: "code", title: "Connect and prepare the menu", language: "csharp", code: "void Start()\n{\n    menuUI.interactable = false;\n    connectingIndicator.SetActive(true);\n\n    if (!PhotonNetwork.IsConnectedAndReady)\n        PhotonNetwork.ConnectUsingSettings();\n    else\n        SetMenuReady();\n}\n\npublic override void OnConnectedToMaster()\n{\n    SetMenuReady();\n}" },
                { type: "image", src: "assets/images/ScreenShots/GrappleBattleScreenshot1.png", alt: "Grapple Battle floating-island arena", caption: "Floating arenas keep grappling movement central." },
                { type: "code", title: "Join or create a duel", language: "csharp", code: "public void JoinRoom()\n{\n    PhotonNetwork.JoinOrCreateRoom(\n        \"GameRoom\",\n        new RoomOptions { MaxPlayers = 2 },\n        null\n    );\n}\n\npublic override void OnJoinedRoom()\n{\n    PhotonNetwork.LoadLevel(\"Game\");\n}" },
                { type: "image", src: "assets/images/ScreenShots/GrappleBattleScreenshot3.png", alt: "Grapple Battle combat screenshot", caption: "Combat combines melee and ranged attacks." }
            ]
        },
        {
            id: "wa-lch-origins", page: "project3.html", title: "WA-LCH origins", category: "Game", year: "2025", image: "assets/images/WA-LCHog.png",
            summary: "A Global Game Jam prequel about a cleaning robot in an active laboratory.", description: "Play as the familiar cleaning robot before the original WA-LCH. The scientists are still using the lab, and their clumsy habits keep the work coming.", contribution: "I made the menus, UI, scientists, rats, trash, clock, and much of the game manager. In a two-day jam, our team also shared work across features.", tools: ["Unity", "C#", "Blender"], tags: ["unity", "csharp", "gameplay", "ui", "teamwork", "adaptability"], duration: "2 days, 5-person team", date: "1 February 2025", imageAlt: "WA-LCH origins gameplay", screenshots: ["assets/images/ScreenShots/WALCHogScreenshot1.png", "assets/images/ScreenShots/WALCHogScreenshot2.png", "assets/images/ScreenShots/WALCHogScreenshot3.png", "assets/images/ScreenShots/WALCHogScreenshot4.png"], youtube: "https://www.youtube-nocookie.com/embed/z1rAx_g-JZI", itch: "https://joahvds.itch.io/walch-origins", embed: "https://itch.io/embed-upload/12701195?color=02f2ff", github: "https://github.com/NielsCraft12/ggj-walch2",
            showcase: [
                { type: "code", title: "Pick a scientist destination", language: "csharp", code: "private Vector3 ChooseRandomPos()\n{\n    Vector2 direction = Random.insideUnitCircle.normalized;\n    float distance = Random.Range(minRadius, maxRadius);\n    Vector3 point = startPosition +\n        new Vector3(direction.x, 0, direction.y) * distance;\n\n    if (NavMesh.SamplePosition(point, out NavMeshHit hit,\n        maxRadius, NavMesh.AllAreas))\n        return hit.position;\n\n    return startPosition;\n}" },
                { type: "image", src: "assets/images/ScreenShots/WALCHogScreenshot2.png", alt: "Scientists moving through the WA-LCH origins lab", caption: "The lab stays lively as scientists move around." }
            ]
        },
        {
            id: "color-dodge", page: "project4.html", title: "Color Dodge", category: "Game", year: "2025", image: "assets/images/ColorDodge.png",
            summary: "A six-hour arcade challenge inspired by a smartwatch game.", description: "Dodge and catch falling circles based on their color. Score milestones change the player's color, and the game speeds up as the score rises.", contribution: "I built the complete game as a solo speed challenge, from the gameplay and UI to the itch.io release.", tools: ["Unity", "C#"], tags: ["unity", "csharp", "gameplay", "creative-thinking"], duration: "6 hours, solo", date: "7 January 2025", imageAlt: "Color Dodge game screen", screenshots: ["assets/images/ScreenShots/ColorScreenshot1.png", "assets/images/ScreenShots/ColorScreenshot2.png", "assets/images/ScreenShots/ColorScreenshot3.png"], youtube: "https://www.youtube-nocookie.com/embed/woED4udK3Rk", itch: "https://joahvds.itch.io/color-dodge", embed: "https://itch.io/embed-upload/12437933?color=000000",
            showcase: [
                { type: "code", title: "Spawn a changing wave", language: "csharp", code: "private IEnumerator SpawnBalls()\n{\n    while (true)\n    {\n        int amount = Random.Range(1, 4 + (int)scores.BallSpeed);\n        for (int i = 0; i <= amount; i++)\n        {\n            Vector3 spawnPoint = new Vector3(\n                Random.Range(-4, 5), Random.Range(5.5f, 7), 0);\n            Instantiate(ballPrefab, spawnPoint, Quaternion.identity);\n        }\n        yield return new WaitForSeconds(spawnSpeed);\n    }\n}" },
                { type: "image", src: "assets/images/ScreenShots/ColorScreenshot1.png", alt: "Color Dodge gameplay", caption: "A small rule set lets the challenge ramp up quickly." }
            ]
        },
        {
            id: "ballpit-chase", page: "project5.html", title: "Ballpit Chase", category: "Game", year: "2024", image: "assets/images/BallpitChase.png",
            summary: "A local multiplayer parkour tag game for two to four players.", description: "Play classic tag in a ball-pit playhouse. Players can join with a keyboard or controller and use the interactive map to escape the tagger.", contribution: "I built the map, camera, menus, UI, settings, and audio. I also rotated into the group-lead role and helped the other developer with player and connection work.", tools: ["Unity", "C#", "Blender"], tags: ["unity", "csharp", "multiplayer", "ui", "blender", "teamwork", "planning"], duration: "4 weeks, 5-person team", date: "4 December 2024", imageAlt: "Ballpit Chase playhouse", screenshots: ["assets/images/ScreenShots/BallpitScreenshot1.png", "assets/images/ScreenShots/BallpitScreenshot2.png", "assets/images/ScreenShots/BallpitScreenshot3.png", "assets/images/ScreenShots/BallpitScreenshot4.png", "assets/images/ScreenShots/BallpitScreenshot5.png"], youtube: "https://www.youtube-nocookie.com/embed/uPHAsQa7ArY", itch: "https://joahvds.itch.io/ballpit-chase", embed: "https://itch.io/embed-upload/12173267?color=5a68fc",
            showcase: [
                { type: "code", title: "Register audio sources", language: "csharp", code: "foreach (Sound sound in sounds)\n{\n    AudioSource source = gameObject.AddComponent<AudioSource>();\n    source.clip = sound.Clip;\n    source.loop = sound.Loop;\n    source.outputAudioMixerGroup = mixerGroup;\n    sound.Source = source;\n}" },
                { type: "image", src: "assets/images/ScreenShots/BallpitScreenshot1.png", alt: "Ballpit Chase playhouse arena", caption: "The playhouse map gives players multiple routes." }
            ]
        },
        {
            id: "space-fighter", page: "project6.html", title: "Space Fighter", category: "Game", year: "2024", image: "assets/images/SpaceFighter.jpg",
            summary: "A space shoot 'em up with escalating waves and boss encounters.", description: "Fight enemy spacecraft, collect score and upgrades, and survive increasingly difficult waves. Every fifth wave brings a boss encounter.", contribution: "A four-week solo project. I built the game and leaderboard; I am especially happy with how the saved scores are ranked and displayed.", tools: ["Unity", "C#"], tags: ["unity", "csharp", "gameplay", "problem-solving"], duration: "4 weeks, solo", date: "25 October 2024", imageAlt: "Space Fighter ship and enemies", screenshots: ["assets/images/ScreenShots/SpaceFighterScreenshot1.png", "assets/images/ScreenShots/SpaceFighterScreenshot2.png", "assets/images/ScreenShots/SpaceFighterScreenshot3.png", "assets/images/ScreenShots/SpaceFighterScreenshot4.png"], youtube: "https://www.youtube-nocookie.com/embed/mK8M9fiuPy8", itch: "https://joahvds.itch.io/space-fighter", embed: "https://itch.io/embed-upload/11817264?color=000000", github: "https://github.com/JoahvanderSloot/SHMUP-2.0",
            showcase: [
                { type: "code", title: "Sort scores from highest to lowest", language: "csharp", code: "private void CheckForRanking()\n{\n    var rankedScores = new List<(string name, int score)>();\n\n    for (int i = 0; i < names.Count; i++)\n        rankedScores.Add((names[i], scores[i]));\n\n    rankedScores.Sort((first, second) =>\n        second.score.CompareTo(first.score));\n\n    names.Clear();\n    scores.Clear();\n    foreach (var entry in rankedScores)\n    {\n        names.Add(entry.name);\n        scores.Add(entry.score);\n    }\n}" },
                { type: "image", src: "assets/images/ScreenShots/SpaceFighterScreenshot2.png", alt: "Space Fighter battle screenshot", caption: "Wave progression drives the difficulty curve." },
                { type: "code", title: "Display only the top entries", language: "csharp", code: "int visibleCount = Mathf.Min(10, names.Count);\nfor (int i = 0; i < visibleCount; i++)\n{\n    int rank = i + 1;\n    TextMeshProUGUI line = Instantiate(entryPrefab, canvas.transform);\n    line.text = $\"#{rank} - {scores[i]}: {names[i]}\";\n}" },
                { type: "image", src: "assets/images/ScreenShots/SpaceFighterScreenshot4.png", alt: "Space Fighter boss wave", caption: "Boss encounters punctuate every five waves." }
            ]
        },
        {
            id: "wa-lch", page: "project7.html", title: "WA-LCH", category: "Game", year: "2024", image: "assets/images/WA-LCH.png",
            summary: "A twin-stick shooter about a cleaning robot defending an abandoned lab.", description: "Clean radioactive waste, restart power generators, and defend against hostile robots inside an abandoned laboratory. The team placed second in a competition.", contribution: "I made enemies, pickups, cleanup systems, UI, menus, interactive map parts, and sound effects, and helped with player features.", tools: ["Unity", "C#", "LibreSprite"], tags: ["unity", "csharp", "gameplay", "ui", "teamwork"], duration: "4 weeks, 5-person team", date: "27 June 2024", imageAlt: "WA-LCH cleaning robot", screenshots: ["assets/images/ScreenShots/WALCHscreenshot1.png", "assets/images/ScreenShots/WALCHscreenshot2.png", "assets/images/ScreenShots/WALCHscreenshot3.png", "assets/images/ScreenShots/WALCHscreenshot4.png"], youtube: "https://www.youtube-nocookie.com/embed/D95I2jfcv_Q?si=fh-rcTKH2u2YGZFf", itch: "https://joahvds.itch.io/wa-lch", embed: "https://itch.io/embed-upload/10784145?color=333333",
            showcase: [
                { type: "code", title: "Switch enemy behavior based on player activity", language: "csharp", code: "if (!playerIsCleaning)\n{\n    if (agent.velocity.magnitude <= 0.1f)\n        agent.SetDestination(ChooseNearbyPosition());\n}\nelse\n{\n    agent.SetDestination(player.transform.position);\n}\n\nplayerIsCleaning = playerMovement.IsActive;" },
                { type: "image", src: "assets/images/ScreenShots/WALCHscreenshot1.png", alt: "WA-LCH gameplay screenshot", caption: "Enemies react when the player starts cleaning." }
            ]
        },
        {
            id: "slipstream", page: "project8.html", title: "Slipstream", category: "Game", year: "2025", image: "assets/images/Slipstream.png",
            summary: "First-person cyberpunk parkour with a drone in pursuit.", description: "Run through two timed levels, gather checkpoints, and stay ahead of a pursuing drone. Built during an international student exchange with a Finnish school.", contribution: "I made the drone, game manager, menus, UI, settings and their save/load flow, plus the tutorial level. I also built a customizable crosshair picker.", tools: ["Unity", "C#", "Blender"], tags: ["unity", "csharp", "gameplay", "ui", "blender", "teamwork", "communication", "planning"], duration: "5 weeks, 5-person international team", date: "1 July 2025", imageAlt: "Slipstream cyberpunk level", screenshots: ["assets/images/ScreenShots/SlipstreamScreenshot1.png", "assets/images/ScreenShots/SlipstreamScreenshot2.png", "assets/images/ScreenShots/SlipstreamScreenshot3.png", "assets/images/ScreenShots/SlipstreamScreenshot4.png", "assets/images/ScreenShots/SlipstreamScreenshot5.png", "assets/images/ScreenShots/SlipstreamScreenshot6.png"], youtube: "https://www.youtube-nocookie.com/embed/LJg_0XI5j0w", itch: "https://joahvds.itch.io/slipstream", github: "https://github.com/JoahvanderSloot/Parkour-game",
            showcase: [
                { type: "code", title: "Map a click to a color texture", language: "csharp", code: "Vector2 localPoint;\nif (!RectTransformUtility.ScreenPointToLocalPointInRectangle(\n    chartRect, Input.mousePosition, null, out localPoint))\n    return;\n\nfloat normalizedX = localPoint.x / chartRect.rect.width + chartRect.pivot.x;\nfloat normalizedY = localPoint.y / chartRect.rect.height + chartRect.pivot.y;\nint pixelX = Mathf.Clamp(Mathf.RoundToInt(normalizedX * colorChart.width),\n    0, colorChart.width - 1);\nint pixelY = Mathf.Clamp(Mathf.RoundToInt(normalizedY * colorChart.height),\n    0, colorChart.height - 1);\nsettings.CrosshairColor = colorChart.GetPixel(pixelX, pixelY);" },
                { type: "image", src: "assets/images/ScreenShots/SlipstreamScreenshot2.png", alt: "Slipstream running course", caption: "The course balances speed with checkpoint routes." },
                { type: "code", title: "Apply crosshair settings", language: "csharp", code: "settings.CrosshairColor.a = alphaSlider.value;\nsettings.CrosshairSize = sizeSlider.value;\ncrosshairImage.color = settings.CrosshairColor;\ncrosshairImage.transform.localScale = Vector3.one * settings.CrosshairSize;" },
                { type: "image", src: "assets/images/ScreenShots/SlipstreamScreenshot5.png", alt: "Slipstream cyberpunk environment", caption: "The drone keeps pressure on every run." }
            ]
        },
        {
            id: "portfolio", page: "project9.html", title: "Portfolio", category: "Web", year: "2024-26", image: "assets/images/ScreenShots/PortfolioScreenshot1.png",
            summary: "My portfolio site: the first web project I built and keep improving.", description: "The first draft was made in May 2024. I have kept updating it alongside new projects and the web skills I have learned.", contribution: "I designed and built the site, its project pages, and the shared styling. This refresh turns the repeated content into editable project and skill records.", tools: ["HTML", "CSS", "JavaScript"], tags: ["html", "css", "javascript", "git", "creative-thinking"], duration: "Ongoing solo project", date: "3 May 2024", imageAlt: "Portfolio website preview", screenshots: ["assets/images/ScreenShots/PortfolioScreenshot1.png", "assets/images/ScreenShots/PortfolioScreenshot2.png", "assets/images/ScreenShots/PortfolioScreenshot3.png"], github: "https://github.com/JoahvanderSloot/Portfolio",
            showcase: [
                { type: "code", title: "Render projects from content data", language: "javascript", code: "const projectCards = projects.map((project) => `\n  <article class=\"project-card\">\n    <img src=\"${project.image}\" alt=\"${project.imageAlt}\">\n    <h3>${project.title}</h3>\n    <p>${project.summary}</p>\n  </article>\n`);" },
                { type: "image", src: "assets/images/ScreenShots/PortfolioScreenshot1.png", alt: "Portfolio homepage", caption: "The site presents projects and skills from shared data." }
            ]
        },
        {
            id: "glory-ranking-website", title: "GLORY Kickboxing Ranking", category: "Web", year: "2026", image: "", imageAlt: "", coverLabel: "GLORY / RANKING",
            summary: "A web version of my GLORY kickboxing ranking system.", description: "The current website version of my GLORY kickboxing ranking system, following an earlier app prototype.", contribution: "Personal project exploring how to present and use the ranking system on the web.", tools: [], tags: [], duration: "Personal project", date: "In progress", screenshots: [], showcase: []
        },
        {
            id: "glory-ranking-app", title: "GLORY Ranking App", category: "Software", year: "2026", image: "", imageAlt: "", coverLabel: "GLORY / APP",
            summary: "The first app version of my GLORY kickboxing ranking system.", description: "An early application prototype for the same ranking system now being developed as a website.", contribution: "Personal project. This first version established the app-based ranking experience.", tools: [], tags: [], duration: "First version", date: "Project version 1", screenshots: [], showcase: []
        },
        {
            id: "factsheets-generator", title: "Factsheets Generator", category: "Software", year: "2025-26", image: "", imageAlt: "", coverLabel: "FACTSHEETS / GENERATOR",
            summary: "A factsheet-generation tool developed during my SimCen Land internship.", description: "Factsheets Generator is one of the software projects I worked on during my software development internship at SimCen Land.", contribution: "Developed as part of my internship work. Further technical details are not included here.", tools: [], tags: ["software-development", "simulation-systems", "technical-design"], duration: "Internship project", date: "2025–2026", screenshots: [], showcase: []
        },
        {
            id: "materiaal-management", title: "Materiaalmanagement", category: "Software", year: "2025-26", image: "", imageAlt: "", coverLabel: "MATERIAAL / MANAGEMENT",
            summary: "A material-management software project developed during my SimCen Land internship.", description: "Materiaalmanagement is one of the software projects I worked on during my software development internship at SimCen Land.", contribution: "Developed as part of my internship work. Further technical details are not included here.", tools: [], tags: ["software-development", "simulation-systems", "technical-design"], duration: "Internship project", date: "2025–2026", screenshots: [], showcase: []
        },
        {
            id: "boxing-data-game", title: "Boxing Data Game", category: "Game", year: "2025", image: "", imageAlt: "", coverLabel: "BOXING / DATA",
            summary: "A boxing game that collects and displays data through a Svelte-connected system.", description: "A compact boxing game that combines gameplay with data collection and display, built in a short amount of time.", contribution: "I built the game and its connection to a Svelte-based data system, combining interactive gameplay with data handling.", tools: ["Svelte"], tags: ["javascript", "database", "svelte"], duration: "Short project", date: "Earlier project", screenshots: [], showcase: []
        }
    ]
};
