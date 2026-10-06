(window.PORTFOLIO_PROJECTS ||= []).push({
    id: "portfolio", page: "project9.html", title: "Portfolio", category: "Web", year: "2024-26", image: "assets/images/projects/portfolio/screenshot-1.png",
    summary: "My portfolio site: the first web project I built and keep improving.", description: "The first draft was made in May 2024. I have kept updating it alongside new projects and the web skills I have learned.", contribution: "I designed and built the site, its project pages, and the shared styling. This refresh turns the repeated content into editable project and skill records.", tools: ["HTML", "CSS", "JavaScript"], tags: ["html", "css", "javascript", "git", "creative-thinking"], duration: "Ongoing solo project", date: "3 May 2024", imageAlt: "Portfolio website preview", screenshots: ["assets/images/projects/portfolio/screenshot-1.png", "assets/images/projects/portfolio/screenshot-2.png", "assets/images/projects/portfolio/screenshot-3.png"], github: "https://github.com/JoahvanderSloot/Portfolio",
    showcase: [
        { type: "code", title: "Render projects from content data", language: "javascript", code: "const projectCards = projects.map((project) => `\n  <article class=\"project-card\">\n    <img src=\"${project.image}\" alt=\"${project.imageAlt}\">\n    <h3>${project.title}</h3>\n    <p>${project.summary}</p>\n  </article>\n`);" },
        { type: "image", src: "assets/images/projects/portfolio/screenshot-1.png", alt: "Portfolio homepage", caption: "The site presents projects and skills from shared data." }
    ]
});
