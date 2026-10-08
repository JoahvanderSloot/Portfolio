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
        intro: "I develop software and interactive systems, with a background in game development and a growing interest in how technology works behind the scenes.",
        about: "I'm a software developer from the Netherlands, currently splitting my time between my internship at SimCen Land and my Creative Software Development studies. I like understanding how a system works, then making it useful for the people who rely on it. Games are where I first got hooked on programming, and I still enjoy building them, but I'm just as interested in the software and systems behind everyday work. Away from a screen, I'm often at the gym or training kickboxing, reading, watching a good film, or spending time in nature. I enjoy learning how things fit together, whether that's solving a Rubik's Cube, playing chess, or creating a story."
    },
    resume: {
        headline: "Software developer with a base in game development, and skills ranging from code to general IT.",
        summary: "I develop software and currently operate simulation systems used in training. My experience combines hands-on system operation with technical design, collaborative project work, and writing code. I am currently studying Creative Software Development and continue to build practical experience through personal and team projects.",
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
        focus: ["Software development", "Game development", "Website development", "Design documents", "Technical design", "System operation", "Collaboration"],
        selectedProjects: ["factsheets-generator", "materiaal-management"]
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
            { id: "software-development", name: "Software development", group: "Software and systems", level: "advanced", years: 4, professionalExperience: true, description: "Creating and building software solutions for different systems, including desktop and mobile applications and even Arduino PCBs.", projects: ["factsheets-generator", "materiaal-management", "glory-ranking-app"], filterGroup: "Software" },
            { id: "csharp", name: "C#", group: "Programming", level: "advanced", years: 4, professionalExperience: true, description: "I have been writing code in C# for about four years. I use it in Unity projects and WPF applications.", projects: ["factsheets-generator", "materiaal-management", "space-fighter", "grapple-battle", "slipstream", "merge-packing"], symbol: "{}", filterGroup: "Software" },
            { id: "git", name: "Git and GitHub", group: "Workflow", level: "advanced", years: 4, professionalExperience: true, description: "Personally, I use GitHub Desktop. Almost every development project I have made uses Git to track progress. In team projects, I use it to share a workspace with other group members.", projects: ["slipstream", "wa-lch-origins", "factsheets-generator"], symbol: "G", filterGroup: "Software" },
            { id: "unity", name: "Unity", group: "Game engine", level: "advanced", years: 4, professionalExperience: true, description: "I build 2D and 3D games and explore different versions and parts of the engine. With about four years of experience, I can find my way around Unity.", projects: ["slipstream", "grapple-battle", "space-fighter", "wa-lch-origins"], symbol: "U", filterGroup: "Game" },
            { id: "wpf", name: "WPF", group: "Desktop development", level: "advanced", years: 2, professionalExperience: true, description: "I build desktop applications with WPF to help myself and others work more efficiently or get a clearer overview of information.", projects: ["factsheets-generator", "materiaal-management", "glory-ranking-app"], symbol: "W", filterGroup: "Software" },
            { id: "technical-design", name: "Technical design", group: "Engineering practice", level: "advanced", years: 3, professionalExperience: true, description: "A good technical design before coding can resolve many issues early. For almost every game I have made, I designed at least a few systems before coding.", projects: ["factsheets-generator", "materiaal-management", "grapple-battle", "space-fighter"], symbol: "⌘", filterGroup: "Software" },
            { id: "design-doc", name: "Design documents", group: "Engineering practice", level: "advanced", years: 3, professionalExperience: true, description: "Like technical designs, thinking a project through before actually making it is key to creating solid software or games.", projects: ["factsheets-generator", "materiaal-management", "grapple-battle", "space-fighter"], symbol: "◉", filterGroup: "Software" },
            { id: "ui", name: "UI and menus", group: "Interface development", level: "advanced", years: 4, professionalExperience: true, description: "I have made many types of UI: interfaces, menus, settings, and clear user feedback. Usability is important in every project, so UI has been a core part of my work.", projects: ["glory-ranking-website", "ballpit-chase", "slipstream", "glory-ranking-app"], filterGroup: "Software" },
            { id: "javascript", name: "JavaScript", group: "Web", level: "working", years: 4, description: "I work on a few websites every now and then, which also helps keep my JavaScript skills up to date.", projects: ["portfolio", "glory-ranking-website"], symbol: "JS", filterGroup: "Web" },
            { id: "html", name: "HTML", group: "Web", level: "working", years: 4, description: "I build web pages, especially their structure, before adding JavaScript and styling to improve the user experience.", projects: ["portfolio", "glory-ranking-website"], symbol: "<>", filterGroup: "Web" },
            { id: "css", name: "CSS", group: "Web", level: "working", years: 4, professionalExperience: true, description: "I especially enjoy making responsive websites. I'm no designer, but making pages look nice and respond correctly to different screen sizes makes me happy.", projects: ["portfolio", "glory-ranking-website"], symbol: "#", filterGroup: "Web" },
            { id: "xaml", name: "XAML", group: "Interface development", level: "working", years: 2, professionalExperience: true, description: "WPF applications use XAML to create interfaces. I prefer to program them rather than use preset items, so I have spent quite some time working with XAML.", projects: ["factsheets-generator", "materiaal-management", "glory-ranking-app"], symbol: "<>", filterGroup: "Software" },
            { id: "gameplay", name: "Gameplay systems", group: "Interactive development", level: "working", years: 4, description: "Game loops, player-facing features, enemies, scoring, progression, and interaction. I have made many different gameplay features in my projects, and I always get excited about new creative ideas.", projects: ["grapple-battle", "color-dodge", "wa-lch-origins"], filterGroup: "Game" },
            { id: "2d", name: "2D art / pixel art", group: "Interface development", level: "working", years: 5, description: "I don't always have an artist available for my projects, so I have learned to make my own 2D sprites using LibreSprite or Paint. I mainly use them for UI.", projects: ["grapple-battle", "color-dodge", "space-fighter"], filterGroup: "Software" },
            { id: "p5js", name: "p5.js", group: "Creative coding", level: "working", years: 4, description: "I first learned coding with p5.js. It was a great base to expand from into other languages.", projects: [], symbol: "p5", filterGroup: "Web" },
            { id: "simulation-systems", name: "System operation", group: "Systems", level: "working", years: 1, professionalExperience: true, description: "During my internship at SimCen Land, I operated simulation systems for military training.", projects: ["factsheets-generator"], symbol: "◉", filterGroup: "Software" },
            { id: "multiplayer", name: "Multiplayer", group: "Networking", level: "practiced", years: 3, description: "I have worked with online rooms and local multiplayer in a few projects. I have always liked multiplayer games most, so I try to expand my skill set in that direction.", projects: ["grapple-battle", "ballpit-chase"], symbol: "♟", filterGroup: "Game" },
            { id: "database", name: "Databases and data handling", group: "Data", level: "practiced", years: 3, professionalExperience: true, description: "I have worked with multiple ways of collecting, storing, and using data in projects, from local storage to online databases.", projects: ["glory-ranking-website", "materiaal-management"], symbol: "▤", filterGroup: "Software" },
            { id: "php", name: "PHP", group: "Web", level: "practiced", years: 4, description: "I have basic backend and database integration experience using PHP, exclusively in websites.", projects: [], symbol: "{}", filterGroup: "Web" },
            { id: "arduino", name: "Arduino", group: "Engineering practice", level: "developing", years: 2, professionalExperience: true, description: "I have done a few technical projects with an ESP32 board and Arduino, and I definitely want to explore this more in the future.", symbol: "⌘", filterGroup: "Software" }
        ],
        soft: [
            { id: "problem-solving", name: "Problem solving", group: "Creative practice", level: "advanced", projectExperience: true, professionalExperience: true, description: "Problem solving is one of the main skills a developer needs. From debugging my code to working around hardware limitations, I try to find the best working solution.", projects: ["grapple-battle", "glory-ranking-website"], symbol: "?", filterGroup: "Solo" },
            { id: "adaptability", name: "Adaptability", group: "Delivery", level: "advanced", projectExperience: true, professionalExperience: true, description: "I have found that things do not always go as planned, especially during my internship. Being able to refocus when something unexpected comes up helps resolve issues.", projects: ["wa-lch-origins", "color-dodge"], symbol: "↻", filterGroup: "Team" },
            { id: "communication", name: "Communication", group: "Collaboration", level: "advanced", projectExperience: true, professionalExperience: true, description: "Working in a group or for a client requires clear communication, so everyone knows what is actually needed.", projects: ["slipstream", "ballpit-chase", "factsheets-generator", "materiaal-management"], symbol: "↔", filterGroup: "Team" },
            { id: "creative-thinking", name: "Creative thinking", group: "Creative practice", level: "working", projectExperience: true, professionalExperience: true, description: "When designing something, finding another way to reach the same goal can make the end result much better.", projects: ["merge-packing", "ballpit-chase"], symbol: "✳", filterGroup: "Solo" },
            { id: "teamwork", name: "Teamwork", group: "Collaboration", level: "working", projectExperience: true, professionalExperience: true, description: "I have made many projects in teams and worked with people with different skill sets. I can find a useful role in a team, whether that means leading or quietly getting the work done.", projects: ["slipstream", "ballpit-chase", "wa-lch-origins", "factsheets-generator", "materiaal-management"], symbol: "2", filterGroup: "Team" },
            { id: "planning", name: "Planning and ownership", group: "Delivery", level: "practiced", projectExperience: true, professionalExperience: true, description: "After making a good design, I plan the tasks and take responsibility for ensuring that the project progresses smoothly and is delivered on time.", projects: ["ballpit-chase", "slipstream", "factsheets-generator", "materiaal-management"], symbol: "✓", filterGroup: "Leadership" },
            { id: "presenting", name: "Presenting", group: "Communication", level: "developing", projectExperience: true, description: "I have presented software and system-related work to others. This includes explaining complex technical concepts to non-technical audiences, such as a client or a teammate who specializes in 3D art.", projects: [], symbol: "↗", filterGroup: "Leadership" }
        ]
    },
    projectIds: [
        "glory-ranking-website", "materiaal-management", "factsheets-generator", "glory-ranking-app",
        "merge-packing", "grapple-battle", "ballpit-chase", "wa-lch-origins", "slipstream", "portfolio", "color-dodge", "space-fighter", "wa-lch"
    ],
    projects: []
};
