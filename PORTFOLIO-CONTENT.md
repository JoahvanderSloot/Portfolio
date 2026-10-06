# Editing portfolio content

Project and skill records live in `assets/js/portfolio-data.js`; Dutch text overrides live in `assets/js/portfolio-nl.js`. English is the default copy in the data file. New visible project or skill text should have a matching Dutch entry when you want both site languages complete.

## Add a project

Copy a project object inside the `projects` array. Choose a unique lowercase `id`, use paths under `assets/images/`, and keep showcase excerpts short. Cards automatically link to `project.html?id=your-id`; the older `project1.html` through `project9.html` addresses remain available for the existing projects. A cover image is optional; when omitted, the project uses a typographic cover until media is ready.

```js
{
    id: "my-new-game",
    title: "My New Game",
    category: "Software",
    year: "2026",
    date: "12 October 2026",
    image: "assets/images/MyNewGame.png",
    imageAlt: "A scene from My New Game",
    summary: "One sentence describing the player experience.",
    description: "A short explanation of what the project is.",
    contribution: "What I built, and what the team built.",
    tools: ["Unity", "C#"],
    tags: ["unity", "csharp", "teamwork"],
    duration: "3 weeks, 4-person team",
    screenshots: ["assets/images/ScreenShots/MyNewGame1.png"],
    itch: "https://example.itch.io/my-new-game",
    github: "https://github.com/example/my-new-game",
    showcase: [
        { type: "code", title: "A useful excerpt", language: "csharp", code: `void Start()\n{\n    Debug.Log("Ready");\n}` },
        { type: "image", src: "assets/images/ScreenShots/MyNewGame1.png", alt: "A scene from My New Game", caption: "A short image caption." }
    ]
}
```

Use `youtube` with a YouTube embed URL or `video` with a local MP4 when available. `embed` may be added for an itch.io playable embed.

## Add a skill

Add a skill record to `skills.hard` or `skills.soft`. Its `id` becomes the link anchor. Use the same ID in project `tags` to show that skill on project cards, detail pages, and the skill's related-project links. The skill's `projects` list is optional and can add an explicit project association without showing the skill as a project tag.

```js
{ id: "level-design", name: "Level design", group: "Game development", level: "Project experience", description: "Build readable spaces that support the player and the game loop.", projects: [] }
```

To translate a new skill, add the same ID to the `skills` object in `assets/js/portfolio-nl.js` with Dutch `name`, `group`, `level`, and `description` fields.

## Translate a project

Add a matching entry under `projects` in `assets/js/portfolio-nl.js`, using the project ID as the key. Translate the visible fields such as `title`, `summary`, `description`, `contribution`, `duration`, `date`, `imageAlt`, and any `showcase` captions or titles. Missing Dutch fields fall back to English.

## Edit the resume

The web resume at `resume.html` and its downloadable PDF are both rendered from the `resume` object near the top of `assets/js/portfolio-data.js`. Update the `headline`, `summary`, `experience`, `education`, `languages`, `focus`, and `selectedProjects` fields. Dutch resume text is in the `resume` section of `assets/js/portfolio-nl.js`. Experience highlights are intentionally plain statements; add measured results only when you have confirmed figures. The **Download as PDF** button creates and downloads the current language directly.

## Existing skill IDs

Hard skills: `software-development`, `simulation-systems`, `technical-design`, `database`, `svelte`, `unity`, `csharp`, `gameplay`, `ui`, `multiplayer`, `html`, `css`, `javascript`, `git`, `blender`, `php`, `p5js`.

Soft skills: `presenting`, `teamwork`, `communication`, `planning`, `adaptability`, `problem-solving`, `creative-thinking`.

Project categories currently used are `Software`, `Web`, and `Game`. The archive only displays filters for categories that have at least one project entry. The language toggle stores its selection between pages and supports `?lang=en` and `?lang=nl` for shareable language-specific links.
