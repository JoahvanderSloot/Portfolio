# Editing portfolio content

Skill and resume records live in `assets/js/portfolio-data.js`; each project has its own file in `assets/js/projects/<id>.js`; Dutch text overrides live in `assets/js/portfolio-nl.js`. English is the default copy. New visible project or skill text should have a matching Dutch entry when you want both site languages complete.

## Folder layout

```
assets/js/projects/<id>.js          one file per project
assets/images/projects/<id>/        cover.png, screenshot-1.png, other media
```

## Add a project

1. Create `assets/js/projects/my-new-game.js` (template below) with a unique lowercase `id`.
2. Put its images in `assets/images/projects/my-new-game/`.
3. Add the `id` to `projectIds` in `assets/js/portfolio-data.js`; the list order is the display order.

Cards link to `project.html?id=your-id`, so no new HTML page is needed (`project1.html` to `project9.html` only remain for old links). A cover image is optional; when omitted, the project uses a typographic cover.

In `showcase`, code snippets always render on the left and images on the right. The nth snippet pairs with the nth image; snippets without an image stay left with an empty right side. Extra `screenshots` that are not in `showcase` appear in the gallery below.

```js
(window.PORTFOLIO_PROJECTS ||= []).push({
    id: "my-new-game",
    title: "My New Game",
    category: "Software",
    year: "2026",
    date: "12 October 2026",
    image: "assets/images/projects/my-new-game/cover.png",
    imageAlt: "A scene from My New Game",
    imageFit: "contain",
    icon: "assets/images/projects/my-new-game/icon.png",
    summary: "One sentence describing the player experience.",
    description: "A short explanation of what the project is.",
    contribution: "What I built, and what the team built.",
    tools: ["Unity", "C#"],
    tags: ["unity", "csharp", "teamwork"],
    duration: "3 weeks, 4-person team",
    screenshots: ["assets/images/projects/my-new-game/screenshot-1.png"],
    screenshotAlts: ["A scene from My New Game"],
    itch: "https://example.itch.io/my-new-game",
    github: "https://github.com/example/my-new-game",
    showcase: [
        { type: "code", title: "A useful excerpt", language: "csharp", code: `void Start()\n{\n    Debug.Log("Ready");\n}` },
        { type: "image", src: "assets/images/projects/my-new-game/screenshot-1.png", alt: "A scene from My New Game", caption: "A short image caption." }
    ]
});
```

Use `youtube` with a YouTube embed URL or `video` with a local MP4 when available. `embed` may be added for an itch.io playable embed.

## Add a skill

Add a skill record to `skills.hard` or `skills.soft`. Its `id` becomes the link anchor. Use the same ID in project `tags` to show that skill on project cards, detail pages, and the skill's related-project links. The skill's `projects` list is optional and can add an explicit project association without showing the skill as a project tag.

```js
{ id: "level-design", name: "Level design", group: "Game development", level: "Project experience", description: "Build readable spaces that support the player and the game loop.", projects: [], filterGroup: "Game" }
```

The skills page groups hard skills under `Web`, `Software`, or `Game`, and soft skills under `Team`, `Solo`, or `Leadership`. Set `filterGroup` to one of those values so the skill appears in the right filter. The default **Best to worst** ordering ranks professional experience first, followed by primary, experienced, project experience, working knowledge, and foundational skills.

Set `imageFit: "contain"` when a project cover is a screenshot or banner that should stay fully visible instead of being cropped. Omit it to keep the default cropped cover style.
`icon` is an optional small app icon shown on the project card, and `screenshotAlts` provides matching descriptions for gallery images in screenshot order.

To translate a new skill, add the same ID to the `skills` object in `assets/js/portfolio-nl.js` with Dutch `name`, `group`, `level`, and `description` fields.

## Translate a project

Add a matching entry under `projects` in `assets/js/portfolio-nl.js`, using the project ID as the key. Translate the visible fields such as `title`, `summary`, `description`, `contribution`, `duration`, `date`, `imageAlt`, and any `showcase` captions or titles. Missing Dutch fields fall back to English.

## Edit the resume

The web resume at `resume.html` and its downloadable PDF are both rendered from the `resume` object near the top of `assets/js/portfolio-data.js`. Update the `headline`, `summary`, `experience`, `education`, `languages`, `focus`, and `selectedProjects` fields. Dutch resume text is in the `resume` section of `assets/js/portfolio-nl.js`. Experience highlights are intentionally plain statements; add measured results only when you have confirmed figures. The **Download as PDF** button creates and downloads the current language directly.

## Existing skill IDs

Hard skills: `software-development`, `simulation-systems`, `technical-design`, `database`, `svelte`, `unity`, `csharp`, `gameplay`, `ui`, `multiplayer`, `html`, `css`, `javascript`, `git`, `blender`, `php`, `p5js`.

Soft skills: `presenting`, `teamwork`, `communication`, `planning`, `adaptability`, `problem-solving`, `creative-thinking`.

Project categories currently used are `Software`, `Web`, and `Game`. The archive only displays filters for categories that have at least one project entry. The language toggle stores its selection between pages and supports `?lang=en` and `?lang=nl` for shareable language-specific links.
