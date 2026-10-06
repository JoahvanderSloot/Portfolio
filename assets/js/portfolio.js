(async () => {
    const data = window.PORTFOLIO;
    await Promise.all(data.projectIds.map((id) => new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = `assets/js/projects/${id}.js`;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Missing project file: ${id}`));
        document.head.append(script);
    })));
    data.projects = data.projectIds.map((id) => window.PORTFOLIO_PROJECTS.find((project) => project.id === id));
    const root = document.querySelector("#app");
    const urlParams = new URLSearchParams(window.location.search);
    let language = urlParams.get("lang");
    try {
        language ||= window.localStorage.getItem("portfolio-language");
    } catch {}
    language = language === "nl" ? "nl" : "en";
    const translations = window.PORTFOLIO_NL;
    const translate = (key) => language === "nl" ? translations.ui[key] || window.PORTFOLIO_EN[key] || key : window.PORTFOLIO_EN[key] || key;
    const localized = (record, key) => key === "title" ? record.title : language === "nl"
        ? translations.projects[record.id]?.[key] || record[key] || ""
        : record[key] || "";
    const localizedProfile = (key) => language === "nl"
        ? translations.profile[key] || data.profile[key]
        : data.profile[key];
    const localizedSkill = (skill, key) => language === "nl"
        ? translations.skills[skill.id]?.[key] || skill[key] || ""
        : skill[key] || "";
    const skillGlyph = (skill) => ({
        "software-development": "{}", "simulation-systems": "◉", "technical-design": "⌘",
        database: "▤", svelte: "S", unity: "U", csharp: "{}", gameplay: "▶", ui: "▣",
        multiplayer: "♟", html: "<> ", css: "#", javascript: "JS", git: "⑂", blender: "◇",
        php: "PHP", p5js: "p5", presenting: "↗", teamwork: "♧", communication: "↔",
        planning: "✓", adaptability: "↻", "problem-solving": "?", "creative-thinking": "✳"
    }[skill.id] || skill.symbol || skill.name.slice(0, 2));
    const localizedShowcase = (project, index, key, fallback) => language === "nl"
        ? translations.projects[project.id]?.showcase?.[index]?.[key] || fallback || ""
        : fallback || "";
    const categoryLabel = (category) => language === "nl"
        ? ({ Software: translate("software"), Web: translate("web"), Game: translate("games") }[category] || category)
        : category;
    const orderedProjects = data.projects;
    const asset = (path) => path || "";
    const escapeHTML = (value = "") => String(value).replace(/[&<>\"]/g, (character) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;"
    })[character]);
    const skillById = new Map([...data.skills.hard, ...data.skills.soft].map((skill) => [skill.id, skill]));
    const currentPage = document.body.dataset.page || "home";
    const requestedProjectId = urlParams.get("id");
    const projectForPage = data.projects.find((project) => project.page === `${currentPage}.html`)
        || (currentPage === "project" ? data.projects.find((project) => project.id === requestedProjectId) : undefined);
    const projectLink = (project) => `project.html?id=${encodeURIComponent(project.id)}${language === "nl" ? "&lang=nl" : ""}`;
    const pageTitle = projectForPage ? localized(projectForPage, "title") : translate(({
        home: "home", projects: "projects", skills: "skills", resume: "resume"
    })[currentPage] || "portfolio");

    function tagList(ids) {
        return `<ul class="tag-list" aria-label="${escapeHTML(translate("skillsInProject"))}">${ids.map((id) => {
            const skill = skillById.get(id);
            return skill ? `<li><a href="skills.html#${escapeHTML(skill.id)}">${escapeHTML(localizedSkill(skill, "name"))}</a></li>` : "";
        }).join("")}</ul>`;
    }

    function projectCard(project, index = 0) {
        const projectTags = project.tags.length ? `<div class="project-card-tags">${tagList(project.tags)}</div>` : "";
        return `<article class="project-card reveal" style="--delay:${Math.min(index, 8) * 55}ms">
            <a class="project-card-link" href="${escapeHTML(projectLink(project))}" aria-label="${escapeHTML(localized(project, "title"))} / ${escapeHTML(translate("project"))}">
                <div class="project-card-image">${project.image ? `<img src="${escapeHTML(asset(project.image))}" alt="${escapeHTML(localized(project, "imageAlt"))}" loading="lazy">` : `<span class="project-card-placeholder">${escapeHTML(localized(project, "coverLabel") || localized(project, "title"))}</span>`}<span class="project-year">${escapeHTML(project.year)}</span></div>
                <div class="project-card-content"><div class="eyebrow">${escapeHTML(categoryLabel(localized(project, "category")))} / ${escapeHTML(localized(project, "date"))}</div><h3>${escapeHTML(localized(project, "title"))}</h3><p>${escapeHTML(localized(project, "summary"))}</p></div>
            </a>${projectTags}
        </article>`;
    }

    function socialLinks() {
        return data.socials.map((social) => `<a class="social-link" href="${escapeHTML(social.url)}" target="_blank" rel="noreferrer" aria-label="${escapeHTML(social.label)}"><img src="assets/images/${escapeHTML(social.icon)}" alt=""><span>${escapeHTML(social.label === "Resume" && language === "nl" ? "CV" : social.label)}</span></a>`).join("");
    }

    function homePage() {
        const featured = orderedProjects.slice(0, 3);
        const featuredSkills = [
            data.skills.hard.find((skill) => skill.id === "software-development"),
            data.skills.hard.find((skill) => skill.id === "csharp"),
            data.skills.soft.find((skill) => skill.id === "teamwork"),
            data.skills.soft.find((skill) => skill.id === "presenting")
        ].filter(Boolean);
        return `<main class="page-content home-page">
            <section class="hero" aria-labelledby="hero-title">
                <div class="hero-copy"><p class="eyebrow"><span class="status-dot"></span> ${escapeHTML(localizedProfile("location"))} / ${escapeHTML(translate("softwareAndSystems"))}</p><h1 id="hero-title">${escapeHTML(data.profile.name)}<span class="hero-period">.</span></h1><p class="hero-role">${escapeHTML(localizedProfile("role"))}</p><p class="hero-intro">${escapeHTML(localizedProfile("intro"))}</p><p class="hero-proof">${escapeHTML(language === "nl" ? translations.resume.headline : data.resume.headline)}</p><div class="hero-actions"><a class="button button-primary" href="allProjects.html">${escapeHTML(translate("exploreWork"))} <span aria-hidden="true">↗</span></a><a class="text-link" href="resume.html">${escapeHTML(translate("viewResume"))} <span aria-hidden="true">↗</span></a></div></div>
            <div class="hero-art"><div class="hero-image-frame"><img src="${escapeHTML(data.profile.portrait)}" alt="${language === "nl" ? "Portret van" : "Portrait of"} ${escapeHTML(data.profile.name)}"><span class="image-index">JOAH / ${escapeHTML(localizedProfile("location").toUpperCase())}</span></div><div class="hero-art-note"><span>${escapeHTML(translate("softwareTag"))}</span><i></i><span>${escapeHTML(translate("systemsTag"))}</span><i></i><span>${escapeHTML(translate("interactiveTag"))}</span></div></div>
                <a class="scroll-cue" href="#selected-work"><span></span> ${escapeHTML(translate("scrollToExplore"))}</a>
            </section>
            <section id="selected-work" class="content-section" aria-labelledby="work-title"><div class="section-heading"><div><p class="eyebrow">${escapeHTML(translate("selectedWork"))}</p><h2 id="work-title">${escapeHTML(translate("highlightedProjects"))}</h2></div><a class="text-link" href="allProjects.html">${escapeHTML(translate("allProjects"))} <span aria-hidden="true">↗</span></a></div><div class="project-grid">${featured.map(projectCard).join("")}</div><p class="work-note">${escapeHTML(translate("workNote"))}</p></section>
            <section class="content-section skills-band" aria-labelledby="skills-title"><div class="section-heading"><div><p class="eyebrow">${escapeHTML(translate("toolsAndPractice"))}</p><h2 id="skills-title">${escapeHTML(translate("skills"))}</h2></div><a class="text-link" href="skills.html">${escapeHTML(translate("allSkills"))} <span aria-hidden="true">↗</span></a></div><div class="skill-overview">${featuredSkills.map((skill) => `<a class="skill-chip" href="skills.html#${escapeHTML(skill.id)}"><span class="skill-chip-mark" aria-hidden="true">${escapeHTML(skillGlyph(skill))}</span><span><strong>${escapeHTML(localizedSkill(skill, "name"))}</strong><small>${escapeHTML(localizedSkill(skill, "group"))}</small></span><span class="skill-level">${escapeHTML(localizedSkill(skill, "level"))}</span></a>`).join("")}</div><p class="skills-note">${escapeHTML(translate("skillsNote"))}</p></section>
            <section id="about" class="content-section about-band"><figure class="about-portrait"><img src="${escapeHTML(data.profile.aboutPortrait || data.profile.portrait)}" alt="${language === "nl" ? "Portret van" : "Portrait of"} ${escapeHTML(data.profile.name)}" loading="lazy"><figcaption>${language === "nl" ? "BUITEN WERK" : "OFF THE CLOCK"}</figcaption></figure><div class="about-story"><div class="about-marker"><span>${escapeHTML(translate("aboutMarker"))}</span><span class="marker-line"></span></div><p class="eyebrow">${escapeHTML(translate("curiosity"))}</p><h2>${escapeHTML(translate("aLittleAboutMe"))}</h2><p class="about-copy">${escapeHTML(localizedProfile("about"))}</p><a class="text-link" href="skills.html">${escapeHTML(translate("exploreSkills"))} <span aria-hidden="true">↗</span></a></div></section>
            <section id="contact" class="contact-band"><div><p class="eyebrow">${escapeHTML(translate("projectInMind"))}</p><h2>${escapeHTML(translate("letsBuildTogether"))}</h2></div><a class="contact-email" href="mailto:${escapeHTML(data.profile.email)}">${escapeHTML(data.profile.email)} <span aria-hidden="true">↗</span></a><div class="social-links">${socialLinks()}</div></section>
        </main>`;
    }

    function projectsPage() {
        const categories = ["Software", "Web", "Game"].filter((category) => data.projects.some((project) => project.category === category));
        const categoryLabels = { Software: "Software", Web: "Web", Game: "Games" };
        return `<main class="page-content listing-page"><header class="page-intro"><p class="eyebrow">${escapeHTML(translate("archive"))}</p><h1>${escapeHTML(translate("projects"))}<span class="hero-period">.</span></h1><p>${escapeHTML(translate("projectsIntro"))}</p></header><section class="content-section project-archive" aria-label="${escapeHTML(translate("projects"))}"><div class="archive-controls"><label class="search-field"><span class="visually-hidden">${escapeHTML(translate("findProject"))}</span><span aria-hidden="true">⌕</span><input id="project-search" type="search" placeholder="${escapeHTML(translate("findProject"))}" autocomplete="off"></label><label class="select-field"><span class="visually-hidden">${escapeHTML(translate("filterType"))}</span><select id="project-filter"><option value="all">${escapeHTML(translate("allWork"))}</option>${categories.map((category) => `<option value="${escapeHTML(category)}">${escapeHTML(categoryLabel(category))}</option>`).join("")}</select></label><p class="result-count" id="result-count" aria-live="polite"></p></div><div class="project-grid" id="project-grid">${orderedProjects.map(projectCard).join("")}</div><p class="empty-state" id="empty-state" hidden>${escapeHTML(translate("noProjects"))}</p></section></main>`;
    }

    function skillCard(skill, index) {
        const related = data.projects.filter((project) => (skill.projects || []).includes(project.id) || project.tags.includes(skill.id));
        const relatedLinks = [
            ...related.map((project) => `<a href="${escapeHTML(projectLink(project))}">${escapeHTML(localized(project, "title"))}</a>`),
            ...(skill.resumeExperience ? [`<a href="resume.html">${escapeHTML(translate("resumeExperience"))}</a>`] : [])
        ];
        return `<article class="skill-card reveal" id="${escapeHTML(skill.id)}" style="--delay:${Math.min(index, 8) * 45}ms"><div class="skill-card-top"><span class="skill-symbol" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span><span class="skill-level">${escapeHTML(localizedSkill(skill, "level"))}</span></div><div class="skill-illustration" aria-hidden="true">${escapeHTML(skillGlyph(skill))}</div><p class="eyebrow">${escapeHTML(localizedSkill(skill, "group"))}</p><h3>${escapeHTML(localizedSkill(skill, "name"))}</h3><p>${escapeHTML(localizedSkill(skill, "description"))}</p>${relatedLinks.length ? `<div class="skill-project-links"><span>${escapeHTML(skill.resumeExperience ? translate("experience") : translate("usedIn"))}</span>${relatedLinks.join("")}</div>` : ""}</article>`;
    }

    function skillsPage() {
        return `<main class="page-content listing-page skills-page"><header class="page-intro"><p class="eyebrow">${escapeHTML(translate("toolkit"))}</p><h1>${escapeHTML(translate("skills"))}<span class="hero-period">.</span></h1><p>${escapeHTML(translate("skillsIntro"))}</p><nav class="skill-jump" aria-label="${escapeHTML(translate("skills"))}"><a href="#hard-skills">${escapeHTML(translate("hardSkills"))} <span>${String(data.skills.hard.length).padStart(2, "0")}</span></a><a href="#soft-skills">${escapeHTML(translate("softSkills"))} <span>${String(data.skills.soft.length).padStart(2, "0")}</span></a></nav></header><section class="content-section skill-section" id="hard-skills"><div class="section-heading"><div><p class="eyebrow">${escapeHTML(translate("toolsTechniques"))}</p><h2>${escapeHTML(translate("hardSkills"))}<span class="hero-period">.</span></h2></div></div><div class="skill-grid">${data.skills.hard.map(skillCard).join("")}</div></section><section class="content-section skill-section" id="soft-skills"><div class="section-heading"><div><p class="eyebrow">${escapeHTML(translate("howIWork"))}</p><h2>${escapeHTML(translate("softSkills"))}<span class="hero-period">.</span></h2></div></div><div class="skill-grid">${data.skills.soft.map((skill, index) => skillCard(skill, index)).join("")}</div></section><section class="contact-strip"><p>${escapeHTML(translate("skillsContext"))}</p><a class="text-link" href="allProjects.html">${escapeHTML(translate("seeInProjects"))} <span aria-hidden="true">↗</span></a></section></main>`;
    }

    function resumePage() {
        const experience = data.resume.experience.map((job) => {
            const dates = language === "nl" ? "2 februari 2025 – heden" : job.dates;
            const role = language === "nl" ? translations.resume.experienceRole : job.role;
            const location = language === "nl" ? translations.resume.experienceLocation : job.location;
            const highlights = language === "nl" ? translations.resume.highlights : job.highlights;
            return `<article class="resume-experience"><div class="resume-dates">${escapeHTML(dates)}<span>${escapeHTML(location)}</span></div><div><h3>${escapeHTML(role)}</h3><p class="resume-org">${escapeHTML(job.organization)}</p><ul>${highlights.map((highlight) => `<li>${escapeHTML(highlight)}</li>`).join("")}</ul></div></article>`;
        }).join("");
        const education = data.resume.education.map((item) => `<article class="resume-education"><div><h3>${escapeHTML(item.qualification)}</h3><p>${escapeHTML(item.institution)} / ${escapeHTML(language === "nl" ? "Utrecht, Nederland" : item.location)}</p></div><span>${escapeHTML(item.dates)}</span></article>`).join("");
        const selectedProjectIds = language === "nl" ? ["factsheets-generator", "materiaal-management", "boxing-data-game"] : data.resume.selectedProjects;
        const selectedProjects = selectedProjectIds.map((id) => data.projects.find((project) => project.id === id)).filter(Boolean);
        const resumeHeadline = language === "nl" ? translations.resume.headline : data.resume.headline;
        const resumeSummary = language === "nl" ? translations.resume.summary : data.resume.summary;
        const resumeFocus = language === "nl" ? translations.resume.focus : data.resume.focus;
        const resumeLanguages = language === "nl" ? ["Nederlands", "Engels"] : data.resume.languages;
        return `<main class="page-content resume-page"><header class="resume-toolbar"><div><p class="eyebrow">${escapeHTML(translate("resumeProfile"))}</p><h1>${escapeHTML(translate("resume"))}<span class="hero-period">.</span></h1></div><button class="button button-primary print-resume" type="button"><span aria-hidden="true">↓</span> ${escapeHTML(translate("downloadPdf"))}</button></header><article class="resume-sheet"><header class="resume-heading"><div class="resume-name"><p class="eyebrow">${escapeHTML(translate("softwareSystems"))}</p><h2>${escapeHTML(data.profile.name)}</h2><p>${escapeHTML(localizedProfile("role"))} <span>/</span> ${escapeHTML(localizedProfile("location"))}</p></div><div class="resume-contact"><a href="mailto:${escapeHTML(data.profile.email)}">${escapeHTML(data.profile.email)}</a><a href="https://github.com/JoahvanderSloot" target="_blank" rel="noreferrer">github.com/JoahvanderSloot</a><a href="https://www.linkedin.com/in/joah-van-der-sloot-73bbab310/" target="_blank" rel="noreferrer">LinkedIn</a></div></header><section class="resume-summary"><p class="eyebrow resume-headline">${escapeHTML(resumeHeadline)}</p><p>${escapeHTML(resumeSummary)}</p></section><section class="resume-section"><div class="resume-section-title"><span>01</span><h2>${escapeHTML(translate("resumeExperience"))}</h2></div>${experience}</section><section class="resume-section"><div class="resume-section-title"><span>02</span><h2>${escapeHTML(translate("education"))}</h2></div>${education}</section><section class="resume-lower"><div class="resume-section"><div class="resume-section-title"><span>03</span><h2>${escapeHTML(translate("skills"))}</h2></div><div class="resume-focus">${resumeFocus.map((item) => `<span>${escapeHTML(item)}</span>`).join("")}</div></div><div class="resume-section"><div class="resume-section-title"><span>04</span><h2>${escapeHTML(translate("languages"))}</h2></div><ul class="resume-languages">${resumeLanguages.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul></div></section><section class="resume-section resume-projects"><div class="resume-section-title"><span>05</span><h2>${escapeHTML(translate("selectedWorkResume"))}</h2></div><div class="resume-project-grid">${selectedProjects.map((project) => `<a href="${escapeHTML(projectLink(project))}"><strong>${escapeHTML(localized(project, "title"))}</strong><span>${escapeHTML(localized(project, "summary"))}</span></a>`).join("")}</div></section><footer class="resume-bottom"><span>${escapeHTML(data.profile.name)}</span><a href="mailto:${escapeHTML(data.profile.email)}">${escapeHTML(data.profile.email)}</a></footer></article></main>`;
    }

    function imageButton(src, alt, caption, className = "") {
        return `<button class="image-view-trigger ${className}" type="button" data-lightbox-src="${escapeHTML(src)}" data-lightbox-alt="${escapeHTML(alt)}" data-lightbox-caption="${escapeHTML(caption || alt)}" aria-label="${escapeHTML(translate("openImage"))}: ${escapeHTML(alt)}"><img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" loading="lazy"></button>`;
    }

    function projectDetail(project) {
        const showcase = project.showcase || [];
        const screenshots = project.screenshots || [];
        const showcaseHTML = (item, index) => {
            const itemTitle = localizedShowcase(project, index, "title", item.title);
            const itemAlt = localizedShowcase(project, index, "alt", item.alt);
            const itemCaption = localizedShowcase(project, index, "caption", item.caption || item.alt);
            return item.type === "image"
                ? `<figure class="showcase-image">${imageButton(item.src, itemAlt, itemCaption)}<figcaption>${escapeHTML(itemCaption)}</figcaption></figure>`
                : `<article class="code-panel"><header><div><span class="code-indicator"></span><span>${escapeHTML(itemTitle)}</span></div><button class="copy-code" type="button" aria-label="${escapeHTML(translate("copyCode"))}: ${escapeHTML(itemTitle)}" title="${escapeHTML(translate("copyCode"))}">${escapeHTML(translate("copyCode"))}</button></header><pre><code class="language-${escapeHTML(item.language)}">${escapeHTML(item.code)}</code></pre><p>${escapeHTML(item.language)} / ${escapeHTML(translate("excerpt"))}</p>${item.source ? `<a class="source-link" href="${escapeHTML(item.source)}" target="_blank" rel="noreferrer">${escapeHTML(translate("viewSource"))} <span aria-hidden="true">↗</span></a>` : ""}</article>`;
        };
        // Code always sits left and images right; the nth snippet pairs with the nth image.
        const entries = showcase.map((item, index) => ({ item, index }));
        const codeEntries = entries.filter(({ item }) => item.type !== "image");
        const imageEntries = entries.filter(({ item }) => item.type === "image");
        const rowCount = Math.max(codeEntries.length, imageEntries.length);
        const media = Array.from({ length: rowCount }, (_, row) => {
            const code = codeEntries[row];
            const image = imageEntries[row];
            return `<div class="showcase-row">${code ? showcaseHTML(code.item, code.index) : "<div></div>"}${image ? showcaseHTML(image.item, image.index) : ""}</div>`;
        }).join("");
        const gallery = screenshots.filter((src) => !showcase.some((item) => item.type === "image" && item.src === src));
        const youtubeId = project.youtube?.match(/\/embed\/([^/?]+)/)?.[1];
        const youtubeLink = youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : project.youtube;
        const title = localized(project, "title");
        const video = project.video ? `<video class="project-video-element" controls preload="metadata"><source src="${escapeHTML(project.video)}" type="video/mp4"></video>` : project.youtube && window.location.protocol === "file:" ? `<a class="video-fallback" href="${escapeHTML(youtubeLink)}" target="_blank" rel="noreferrer"><img src="${escapeHTML(project.image)}" alt=""><span><strong>${escapeHTML(translate("watchVideo"))}</strong><small>${escapeHTML(translate("openYoutube"))} <b aria-hidden="true">↗</b></small></span></a>` : project.youtube ? `<div class="video-frame"><iframe src="${escapeHTML(project.youtube)}" title="${escapeHTML(title)}" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>` : "";
        const playable = project.embed ? `<section class="detail-section media-section"><details class="playable-details"><summary><span><span class="eyebrow">${escapeHTML(translate("playableBuild"))}</span><strong>${escapeHTML(translate("openPlayable"))}</strong></span><span class="play-toggle" aria-hidden="true">+</span></summary><p>${escapeHTML(translate("optionalEmbed"))}</p><div class="playable-frame"><iframe src="${escapeHTML(project.embed)}" title="${escapeHTML(title)}" loading="lazy" allowfullscreen></iframe></div></details></section>` : "";
        const links = [[translate("play"), project.itch], [translate("source"), project.github]].filter(([, url]) => url).map(([label, url]) => `<a class="button button-secondary" href="${escapeHTML(url)}" target="_blank" rel="noreferrer">${escapeHTML(label)} <span aria-hidden="true">↗</span></a>`).join("");
        const cover = project.image ? imageButton(project.image, localized(project, "imageAlt"), title, "detail-cover-image") : `<span class="detail-cover-placeholder">${escapeHTML(localized(project, "coverLabel") || title)}</span>`;
        const showcaseSection = media ? `<section class="detail-section showcase-section"><div class="section-heading"><div><p class="eyebrow">${escapeHTML(translate("selectedDetails"))}</p><h2>${escapeHTML(translate("builtThenPlayed"))}</h2></div><p>${escapeHTML(translate("codeAndMedia"))}</p></div><div class="showcase-grid">${media}</div></section>` : "";
        return `<main class="page-content detail-page"><a class="back-link" href="allProjects.html"><span aria-hidden="true">←</span> ${escapeHTML(translate("backToProjects"))}</a><header class="detail-hero"><div class="detail-hero-copy"><p class="eyebrow">${escapeHTML(categoryLabel(localized(project, "category")))} / ${escapeHTML(localized(project, "date"))}</p><h1>${escapeHTML(title)}<span class="hero-period">.</span></h1><p class="detail-summary">${escapeHTML(localized(project, "summary"))}</p><div class="detail-actions">${links}</div></div><div class="detail-cover">${cover}</div></header><div class="detail-meta">${project.tools.length ? `<div><span>${escapeHTML(translate("builtWith"))}</span><strong>${project.tools.map(escapeHTML).join(" / ")}</strong></div>` : ""}<div><span>${escapeHTML(translate("projectFormat"))}</span><strong>${escapeHTML(localized(project, "duration"))}</strong></div><div><span>${escapeHTML(translate("released"))}</span><strong>${escapeHTML(localized(project, "date"))}</strong></div></div><section class="detail-section overview-grid"><div><p class="eyebrow">${escapeHTML(translate("projectAbout"))}</p><h2>${escapeHTML(translate("insideProject"))}</h2></div><div><p>${escapeHTML(localized(project, "description"))}</p><p>${escapeHTML(localized(project, "contribution"))}</p>${project.tags.length ? `<h3>${escapeHTML(translate("skillsInProject"))}</h3>${tagList(project.tags)}` : ""}</div></section>${video ? `<section class="detail-section media-section"><div class="section-heading"><div><p class="eyebrow">${escapeHTML(translate("inMotion"))}</p><h2>${escapeHTML(translate("seeItPlay"))}</h2></div></div>${video}</section>` : ""}${playable}${showcaseSection}${gallery.length ? `<section class="detail-section gallery-section"><div class="section-heading"><div><p class="eyebrow">${escapeHTML(translate("moreMoments"))}</p><h2>${escapeHTML(translate("fromTheBuild"))}</h2></div></div><div class="screenshot-grid">${gallery.map((src, index) => imageButton(src, `${title} ${index + 1}`, `${title} ${index + 1}`, "screenshot-trigger")).join("")}</div></section>` : ""}<nav class="project-next" aria-label="${escapeHTML(translate("projects"))}"><a href="allProjects.html"><span>${escapeHTML(translate("browseArchive"))}</span><strong>${escapeHTML(translate("moreProjects"))} <span aria-hidden="true">↗</span></strong></a></nav></main>`;
    }

    function imageViewer() {
        return `<div class="image-viewer" id="image-viewer" role="dialog" aria-modal="true" aria-hidden="true" aria-label="${escapeHTML(translate("imageViewer"))}"><button class="image-viewer-close" type="button" aria-label="${escapeHTML(translate("closeImage"))}">×</button><button class="image-viewer-arrow image-viewer-previous" type="button" aria-label="${escapeHTML(translate("previousImage"))}">‹</button><figure class="image-viewer-figure"><img class="image-viewer-image" alt=""><figcaption class="image-viewer-caption"></figcaption></figure><button class="image-viewer-arrow image-viewer-next" type="button" aria-label="${escapeHTML(translate("nextImage"))}">›</button></div>`;
    }

    function sidebar() {
        return `<div class="drawer-backdrop" data-close-drawer></div><aside class="side-drawer" id="site-drawer" aria-label="${escapeHTML(translate("navigate"))}" aria-hidden="true"><div class="drawer-heading"><a class="drawer-brand" href="index.html">J<small>vd</small>S</a><button class="drawer-close" type="button" aria-label="${escapeHTML(translate("close"))}">×</button></div><p class="eyebrow">${escapeHTML(translate("navigate"))}</p><nav class="drawer-nav"><a href="index.html"><span>01</span> ${escapeHTML(translate("overview"))}</a><a href="allProjects.html"><span>02</span> ${escapeHTML(translate("projects"))} <small>${String(data.projects.length).padStart(2, "0")}</small></a><a href="skills.html"><span>03</span> ${escapeHTML(translate("skills"))} <small>${escapeHTML(translate("hardSkills"))} + ${escapeHTML(translate("softSkills"))}</small></a><a href="resume.html"><span>04</span> ${escapeHTML(translate("resume"))}</a><a href="index.html#about"><span>05</span> ${escapeHTML(translate("about"))}</a><a href="index.html#contact"><span>06</span> ${escapeHTML(translate("contact"))}</a></nav><div class="drawer-subnav"><p class="eyebrow">${escapeHTML(translate("highlightedProjects"))}</p>${orderedProjects.slice(0, 5).map((project) => `<a href="${escapeHTML(projectLink(project))}">${escapeHTML(localized(project, "title"))} <span aria-hidden="true">↗</span></a>`).join("")}</div><a class="drawer-contact" href="mailto:${escapeHTML(data.profile.email)}">${escapeHTML(translate("startConversation"))} <span aria-hidden="true">↗</span></a></aside>`;
    }

    const layout = `<header class="site-header"><a class="brand-mark" href="index.html" aria-label="${escapeHTML(data.profile.name)} / ${escapeHTML(translate("home"))}">J<small>vd</small>S</a><a class="header-context" href="${projectForPage ? "allProjects.html" : "index.html"}">${escapeHTML(pageTitle)}<span aria-hidden="true"> / </span>${escapeHTML(translate(projectForPage ? "project" : "portfolio"))}</a><div class="header-actions"><button class="language-toggle" type="button" aria-label="${escapeHTML(language === "nl" ? translations.ui.switchLanguage : window.PORTFOLIO_EN.switchLanguage)}" title="${escapeHTML(language === "nl" ? translations.ui.switchLanguage : window.PORTFOLIO_EN.switchLanguage)}">${language === "nl" ? "NL" : "EN"}</button><button class="menu-toggle" type="button" aria-controls="site-drawer" aria-expanded="false"><span class="menu-lines" aria-hidden="true"><i></i><i></i></span><span>${escapeHTML(translate("menu"))}</span></button></div></header>${sidebar()}${currentPage === "projects" ? projectsPage() : currentPage === "skills" ? skillsPage() : currentPage === "resume" ? resumePage() : projectForPage ? projectDetail(projectForPage) : homePage()}${imageViewer()}<footer class="site-footer"><a href="index.html" class="footer-brand">JvdS / ${escapeHTML(data.profile.name)}</a><span>${language === "nl" ? "Software / systemen / web / games" : "Software / systems / web / games"}</span><a href="resume.html">${escapeHTML(translate("resume"))} ↗</a><a href="mailto:${escapeHTML(data.profile.email)}">${escapeHTML(translate("getInTouch"))} ↗</a></footer>`;
    root.innerHTML = layout;
    document.documentElement.lang = language;
    document.title = `${pageTitle} / ${data.profile.name}`;
    if (currentPage === "resume") {
        document.querySelector(".resume-projects")?.remove();
        const resumeName = document.querySelector(".resume-name");
        const headshot = document.createElement("img");
        headshot.className = "resume-headshot";
        headshot.src = data.profile.portrait;
        headshot.alt = `${language === "nl" ? "Portret van" : "Portrait of"} ${data.profile.name}`;
        resumeName.prepend(headshot);
        const personalNote = document.createElement("p");
        personalNote.className = "resume-personal-note";
        personalNote.textContent = translate("personalInfoRequest");
        document.querySelector(".resume-bottom").prepend(personalNote);
    }
    const viewer = document.querySelector("#image-viewer");
    const viewerImage = viewer.querySelector(".image-viewer-image");
    const viewerCaption = viewer.querySelector(".image-viewer-caption");
    const viewerClose = viewer.querySelector(".image-viewer-close");
    const viewerItems = [...document.querySelectorAll("[data-lightbox-src]")];
    let activeViewerIndex = 0;
    let viewerReturnFocus = null;
    const updateViewer = () => {
        const item = viewerItems[activeViewerIndex];
        viewerImage.src = item.dataset.lightboxSrc;
        viewerImage.alt = item.dataset.lightboxAlt || "";
        viewerCaption.textContent = `${item.dataset.lightboxCaption || item.dataset.lightboxAlt || ""}  (${activeViewerIndex + 1} / ${viewerItems.length})`;
    };
    const closeViewer = () => {
        viewer.classList.remove("is-open");
        viewer.setAttribute("aria-hidden", "true");
        document.body.classList.remove("viewer-open");
        viewerImage.removeAttribute("src");
        viewerReturnFocus?.focus();
    };
    const stepViewer = (direction) => {
        activeViewerIndex = (activeViewerIndex + direction + viewerItems.length) % viewerItems.length;
        updateViewer();
    };
    document.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-lightbox-src]");
        if (trigger) {
            event.preventDefault();
            viewerItems.splice(0, viewerItems.length, ...document.querySelectorAll("[data-lightbox-src]"));
            activeViewerIndex = viewerItems.indexOf(trigger);
            viewerReturnFocus = trigger;
            updateViewer();
            viewer.classList.add("is-open");
            viewer.setAttribute("aria-hidden", "false");
            document.body.classList.add("viewer-open");
            viewerClose.focus();
            return;
        }
        if (event.target === viewer) closeViewer();
    });
    viewerClose.addEventListener("click", closeViewer);
    viewer.querySelector(".image-viewer-previous").addEventListener("click", () => stepViewer(-1));
    viewer.querySelector(".image-viewer-next").addEventListener("click", () => stepViewer(1));
    viewer.addEventListener("click", (event) => { if (event.target === viewer) closeViewer(); });
    document.addEventListener("keydown", (event) => {
        if (!viewer.classList.contains("is-open")) return;
        if (event.key === "Escape") closeViewer();
        if (event.key === "ArrowLeft") stepViewer(-1);
        if (event.key === "ArrowRight") stepViewer(1);
    });
    document.querySelector(".language-toggle").addEventListener("click", () => {
        const nextLanguage = language === "nl" ? "en" : "nl";
        try {
            window.localStorage.setItem("portfolio-language", nextLanguage);
        } catch {}
        const nextUrl = new URL(window.location.href);
        nextUrl.searchParams.set("lang", nextLanguage);
        window.location.assign(nextUrl.href);
    });
    document.addEventListener("click", (event) => {
        const link = event.target.closest("a[href]");
        if (!link || link.target === "_blank" || link.href.startsWith("mailto:")) return;
        const destination = new URL(link.href, window.location.href);
        if (destination.origin !== window.location.origin || !["http:", "https:", "file:"].includes(destination.protocol)) return;
        destination.searchParams.set("lang", language);
        link.href = destination.href;
    }, true);
    const pdfButton = document.querySelector(".print-resume");
    if (pdfButton) {
        pdfButton.addEventListener("click", () => {
            try {
                window.downloadResumePdf(data, language, translations);
            } catch (error) {
                console.error(error);
                window.alert(translate("savePdfError"));
            }
        });
    }

    const drawer = document.querySelector(".side-drawer");
    const menuButton = document.querySelector(".menu-toggle");
    const closeButton = document.querySelector(".drawer-close");
    const backdrop = document.querySelector(".drawer-backdrop");
    function setDrawer(open) {
        document.body.classList.toggle("drawer-open", open);
        drawer.setAttribute("aria-hidden", String(!open));
        menuButton.setAttribute("aria-expanded", String(open));
        if (open) closeButton.focus();
        else menuButton.focus();
    }
    menuButton.addEventListener("click", () => setDrawer(true));
    closeButton.addEventListener("click", () => setDrawer(false));
    backdrop.addEventListener("click", () => setDrawer(false));
    drawer.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
        document.body.classList.remove("drawer-open");
        drawer.setAttribute("aria-hidden", "true");
        menuButton.setAttribute("aria-expanded", "false");
    }));
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && document.body.classList.contains("drawer-open")) setDrawer(false);
    });

    const search = document.querySelector("#project-search");
    if (search) {
        const filter = document.querySelector("#project-filter");
        const count = document.querySelector("#result-count");
        const empty = document.querySelector("#empty-state");
        const cards = [...document.querySelectorAll(".project-card")];
        const updateProjects = () => {
            const query = search.value.trim().toLowerCase();
            let shown = 0;
            cards.forEach((card, index) => {
                const project = orderedProjects[index];
                const matchesText = `${localized(project, "title")} ${localized(project, "summary")} ${project.tools.join(" ")} ${project.tags.map((id) => { const skill = skillById.get(id); return skill ? localizedSkill(skill, "name") : ""; }).join(" ")}`.toLowerCase().includes(query);
                const matchesType = filter.value === "all" || project.category === filter.value;
                const visible = matchesText && matchesType;
                card.hidden = !visible;
                if (visible) shown++;
            });
            count.textContent = language === "nl" ? `${shown} ${shown === 1 ? "project" : "projecten"}` : `${shown} ${shown === 1 ? "project" : "projects"}`;
            empty.hidden = shown > 0;
        };
        search.addEventListener("input", updateProjects);
        filter.addEventListener("change", updateProjects);
        updateProjects();
    }

    document.querySelectorAll(".copy-code").forEach((button) => button.addEventListener("click", async () => {
        const code = button.closest(".code-panel").querySelector("code").textContent;
        try {
            await navigator.clipboard.writeText(code);
            button.textContent = translate("copied");
            window.setTimeout(() => { button.textContent = translate("copyCode"); }, 1400);
        } catch {
            button.textContent = translate("selectCode");
        }
    }));

    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
})();
