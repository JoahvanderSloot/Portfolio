/*
 * Portfolio content: profile, resume, skills.
 * Projects live in assets/js/projects/<id>.js; list each id in projectIds (display order) below.
 * Project media lives in assets/images/projects/<id>/.
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
            { id: "software-development", name: "Software development", group: "Professional experience", level: "1 year professional experience", description: "Contribute to software used alongside simulation systems for land-force training.", projects: [], resumeExperience: true, symbol: "{}" },
            { id: "simulation-systems", name: "Simulation systems", group: "Systems", level: "Professional experience", description: "Operate and support simulation systems in a military training environment.", projects: [], resumeExperience: true, symbol: "◉" },
            { id: "technical-design", name: "Technical design", group: "Engineering practice", level: "Professional experience", description: "Contribute to technical designs for software and simulation work.", projects: [], resumeExperience: true, symbol: "⌘" },
            { id: "database", name: "Databases and data handling", group: "Data", level: "Project experience", description: "Collect and present game data through a Svelte-connected data system.", projects: ["boxing-data-game"], symbol: "▤" },
            { id: "svelte", name: "Svelte", group: "Web development", level: "Project experience", description: "Build an interactive game project connected to a data system.", projects: ["boxing-data-game"], symbol: "S" },
            { id: "unity", name: "Unity", group: "Game engine", level: "Primary", description: "Builds 2D and 3D game experiences, gameplay systems, UI, and menus.", projects: ["slipstream", "grapple-battle", "space-fighter", "wa-lch"], symbol: "U" },
            { id: "csharp", name: "C#", group: "Programming", level: "Primary", description: "Gameplay logic, reusable systems, and tools for Unity projects.", projects: ["space-fighter", "grapple-battle", "slipstream"], symbol: "{}" },
            { id: "gameplay", name: "Gameplay systems", group: "Interactive development", level: "Experienced", description: "Game loops, player-facing features, enemies, scoring, progression, and interaction.", projects: ["color-dodge", "wa-lch-origins", "space-fighter"] },
            { id: "ui", name: "UI and menus", group: "Interface development", level: "Experienced", description: "Interfaces, menus, settings, and clear user feedback.", projects: ["merge-packing", "ballpit-chase", "slipstream"] },
            { id: "multiplayer", name: "Multiplayer", group: "Networking", level: "Project experience", description: "Online rooms and local multiplayer player workflows.", projects: ["grapple-battle", "ballpit-chase"] },
            { id: "html", name: "HTML", group: "Web", level: "Working knowledge", description: "Semantic page structure and accessible web content.", projects: ["portfolio"], symbol: "<>" },
            { id: "css", name: "CSS", group: "Web", level: "Working knowledge", description: "Responsive layouts, styling, and interface states.", projects: ["portfolio"], symbol: "#" },
            { id: "javascript", name: "JavaScript", group: "Web", level: "Working knowledge", description: "Small web interactions and p5.js sketches.", projects: ["portfolio"], symbol: "JS" },
            { id: "git", name: "Git and GitHub", group: "Workflow", level: "Experienced", description: "Version control and collaboration across individual and team projects.", projects: ["slipstream", "wa-lch-origins", "portfolio"], symbol: "G" },
            { id: "blender", name: "Blender", group: "3D", level: "Project experience", description: "3D asset and level-work collaboration in game projects.", projects: ["slipstream", "ballpit-chase"] },
            { id: "php", name: "PHP and databases", group: "Web", level: "Foundational", description: "Basic backend and database integration experience.", projects: [], symbol: "{}" },
            { id: "p5js", name: "p5.js", group: "Creative coding", level: "Foundational", description: "Creative coding fundamentals and small interactive sketches.", projects: [], symbol: "p5" }
        ],
        soft: [
            { id: "presenting", name: "Presenting", group: "Communication", level: "Professional experience", description: "Present software and system-related work to others.", projects: [], resumeExperience: true, symbol: "↗" },
            { id: "teamwork", name: "Teamwork", group: "Collaboration", level: "Experienced", description: "Contribute across disciplines and support shared goals in small teams.", projects: ["slipstream", "ballpit-chase", "wa-lch-origins"], symbol: "2" },
            { id: "communication", name: "Communication", group: "Collaboration", level: "Experienced", description: "Coordinate with teammates in person and across international online work.", projects: ["slipstream", "ballpit-chase"], symbol: "↔" },
            { id: "planning", name: "Planning and ownership", group: "Delivery", level: "Project experience", description: "Break down work, plan sprint tasks, and take responsibility for delivery.", projects: ["ballpit-chase", "slipstream"], symbol: "✓" },
            { id: "adaptability", name: "Adaptability", group: "Delivery", level: "Experienced", description: "Switch priorities and help across features when a team needs it.", projects: ["wa-lch-origins", "merge-packing"], symbol: "↻" },
            { id: "problem-solving", name: "Problem solving", group: "Creative practice", level: "Experienced", description: "Investigate unfamiliar problems and find practical solutions through iteration.", projects: ["grapple-battle", "space-fighter"], symbol: "?" },
            { id: "creative-thinking", name: "Creative thinking", group: "Creative practice", level: "Experienced", description: "Turn a prompt or rough idea into a focused player experience.", projects: ["merge-packing", "color-dodge"], symbol: "✳" }
        ]
    },
    projectIds: [
        "glory-ranking-website", "materiaal-management", "factsheets-generator", "boxing-data-game", "glory-ranking-app",
        "merge-packing", "grapple-battle", "ballpit-chase", "wa-lch-origins", "slipstream", "portfolio", "color-dodge", "space-fighter", "wa-lch"
    ],
    projects: []
};
