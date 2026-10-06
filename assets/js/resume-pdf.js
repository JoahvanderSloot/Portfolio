window.downloadResumePdf = function (portfolio, language, translations) {
    const width = 595;
    const height = 842;
    const left = 48;
    const right = 48;
    const contentWidth = width - left - right;
    const pages = [];
    let commands = [];
    let cursorY = 0;
    const isDutch = language === "nl";
    const projectTranslations = isDutch ? translations.projects : {};
    const profile = portfolio.profile;
    const resume = portfolio.resume;
    const localizedProject = (project, key) => projectTranslations[project.id]?.[key] || project[key] || "";
    const labels = isDutch ? {
        role: translations.resume.experienceRole,
        location: translations.resume.experienceLocation,
        highlights: translations.resume.highlights,
        headline: translations.resume.headline,
        summary: translations.resume.summary,
        focus: translations.resume.focus,
        education: "Opleiding",
        profile: "Profiel",
        experience: "Werkervaring",
        skills: "Vaardigheden",
        languages: "Talen",
        projects: "Geselecteerd werk",
        present: "heden"
    } : {
        role: resume.experience[0].role,
        location: resume.experience[0].location,
        highlights: resume.experience[0].highlights,
        headline: resume.headline,
        summary: resume.summary,
        focus: resume.focus,
        education: "Education",
        profile: "Profile",
        experience: "Experience",
        skills: "Skills",
        languages: "Languages",
        projects: "Selected work",
        present: "Present"
    };
    const rgb = (hex) => {
        const value = hex.replace("#", "");
        return [0, 2, 4].map((index) => (parseInt(value.slice(index, index + 2), 16) / 255).toFixed(3)).join(" ");
    };
    const textColor = rgb("F6F1FA");
    const mutedColor = rgb("C8BFCE");
    const pinkColor = rgb("FF78BA");
    const lilacColor = rgb("E5C6FF");
    const escapePdfString = (value) => {
        const substitutions = { "–": "-", "—": "-", "’": "'", "‘": "'", "“": '"', "”": '"', "…": "...", "•": "-", "↗": ">" };
        let output = "";
        for (const original of String(value ?? "")) {
            const character = substitutions[original] || original;
            const code = character.codePointAt(0);
            if (code > 255) {
                output += "?";
            } else if (code < 32 || code > 126 || character === "\\" || character === "(" || character === ")") {
                output += `\\${code.toString(8).padStart(3, "0")}`;
            } else {
                output += character;
            }
        }
        return `(${output})`;
    };
    const addText = (text, x, y, size = 10, font = "F1", color = textColor) => {
        commands.push(`BT /${font} ${size} Tf ${color} rg 1 0 0 1 ${x.toFixed(2)} ${(height - y).toFixed(2)} Tm ${escapePdfString(text)} Tj ET`);
    };
    const addRect = (x, y, rectWidth, rectHeight, color) => {
        commands.push(`${color} rg ${x} ${(height - y - rectHeight).toFixed(2)} ${rectWidth} ${rectHeight} re f`);
    };
    const addLine = (y, color = "0.32 0.25 0.34", thickness = 0.7) => {
        commands.push(`${color} RG ${thickness} w ${left} ${(height - y).toFixed(2)} m ${width - right} ${(height - y).toFixed(2)} l S`);
    };
    const wrapText = (text, maxWidth, fontSize) => {
        const maxChars = Math.max(18, Math.floor(maxWidth / (fontSize * 0.51)));
        const words = String(text || "").split(/\s+/);
        const lines = [];
        let line = "";
        words.forEach((word) => {
            const next = line ? `${line} ${word}` : word;
            if (next.length > maxChars && line) {
                lines.push(line);
                line = word;
            } else {
                line = next;
            }
        });
        if (line) lines.push(line);
        return lines;
    };
    const nextPage = () => {
        if (commands.length) pages.push(commands.join("\n"));
        commands = [];
        cursorY = 48;
        addRect(0, 0, width, height, rgb("100E13"));
        addRect(0, 0, width, 5, pinkColor);
        addText(profile.name, left, 35, 13, "F2", textColor);
        addText(`${isDutch ? "CURRICULUM VITAE" : "CURRICULUM VITAE"} / ${isDutch ? "VERVOLG" : "CONTINUED"}`, left, 50, 7.5, "F1", lilacColor);
        addLine(61, pinkColor, 0.8);
        cursorY = 83;
    };
    const ensureSpace = (needed) => {
        if (cursorY + needed > height - 55) nextPage();
    };
    const addParagraph = (text, options = {}) => {
        const fontSize = options.size || 9;
        const lineHeight = options.lineHeight || fontSize * 1.48;
        const x = options.x ?? left;
        const maxWidth = options.width || contentWidth;
        const lines = wrapText(text, maxWidth, fontSize);
        ensureSpace(lines.length * lineHeight + 1);
        lines.forEach((line) => {
            addText(line, x, cursorY, fontSize, options.font || "F1", options.color || mutedColor);
            cursorY += lineHeight;
        });
        cursorY += options.after ?? 2;
    };
    const addSection = (number, title) => {
        ensureSpace(35);
        cursorY += 8;
        addText(number, left, cursorY, 8, "F2", pinkColor);
        addText(title, left + 22, cursorY + 1, 14, "F2", textColor);
        cursorY += 12;
        addLine(cursorY, "0.31 0.24 0.34", 0.55);
        cursorY += 15;
    };
    const makeFirstPage = () => {
        addRect(0, 0, width, height, rgb("100E13"));
        addRect(0, 0, width, 5, pinkColor);
        addRect(width - 184, 5, 184, 4, rgb("B98BFF"));
        addText("SOFTWARE / SYSTEMS / DEVELOPMENT", left, 51, 8, "F1", pinkColor);
        addText(profile.name, left, 91, 29, "F2", textColor);
        addText(`${isDutch ? "Softwareontwikkelaar" : "Software developer"} / ${isDutch ? "Nederland" : "The Netherlands"}`, left, 111, 9, "F1", lilacColor);
        addText(profile.email, width - right - 181, 76, 8, "F1", mutedColor);
        addText("github.com/JoahvanderSloot", width - right - 181, 91, 8, "F1", mutedColor);
        addText("linkedin.com/in/joah-van-der-sloot-73bbab310", width - right - 181, 106, 7, "F1", mutedColor);
        addLine(131, pinkColor, 0.8);
        cursorY = 155;
    };

    makeFirstPage();
    addSection("00", labels.profile);
    addParagraph(labels.headline, { size: 11, font: "F2", color: lilacColor, after: 5 });
    addParagraph(labels.summary, { size: 8.5, lineHeight: 12.2, after: 3 });

    addSection("01", labels.experience);
    const job = resume.experience[0];
    addParagraph(isDutch ? "2 februari 2025 - heden" : job.dates, { size: 8, font: "F2", color: lilacColor, after: 4 });
    addParagraph(labels.role, { size: 10, font: "F2", color: textColor, after: 1 });
    addParagraph(job.organization, { size: 8.5, color: pinkColor, after: 4 });
    addParagraph(labels.location, { size: 8, after: 4 });
    labels.highlights.forEach((highlight) => addParagraph(`- ${highlight}`, { size: 8.2, lineHeight: 11.5, x: left + 10, width: contentWidth - 10, after: 1 }));

    addSection("02", labels.education);
    resume.education.forEach((item) => {
        addParagraph(item.qualification, { size: 9.5, font: "F2", color: textColor, after: 1 });
        addParagraph(`${item.institution} / ${isDutch ? "Utrecht, Nederland" : item.location} / ${item.dates}`, { size: 8.3, after: 2 });
    });

    addSection("03", labels.skills);
    addParagraph(labels.focus.join("  /  "), { size: 8.3, lineHeight: 12, color: lilacColor, after: 4 });

    addSection("04", labels.languages);
    const languages = isDutch ? ["Nederlands", "Engels"] : resume.languages;
    addParagraph(languages.join("  /  "), { size: 9, color: lilacColor, after: 3 });

    addSection("05", labels.projects);
    const projectIds = isDutch ? ["factsheets-generator", "materiaal-management", "boxing-data-game"] : resume.selectedProjects;
    projectIds.map((id) => portfolio.projects.find((project) => project.id === id)).filter(Boolean).forEach((project) => {
        addParagraph(localizedProject(project, "title"), { size: 9.5, font: "F2", color: lilacColor, after: 1 });
        addParagraph(localizedProject(project, "summary"), { size: 8, lineHeight: 11.2, after: 4 });
    });

    pages.push(commands.join("\n"));
    pages.forEach((pageCommands, index) => {
        pages[index] = `${pageCommands}\n${"0.31 0.24 0.34"} RG 0.55 w ${left} 33 m ${width - right} 33 l S\nBT /F1 7 Tf ${mutedColor} rg 1 0 0 1 ${left} 21 Tm ${escapePdfString(profile.name)} Tj ET\nBT /F1 7 Tf ${mutedColor} rg 1 0 0 1 ${width - right - 42} 21 Tm ${escapePdfString(`${index + 1} / ${pages.length}`)} Tj ET`;
    });

    const objects = [
        "<< /Type /Catalog /Pages 2 0 R >>",
        `<< /Type /Pages /Kids [${pages.map((_, index) => `${5 + index * 2} 0 R`).join(" ")}] /Count ${pages.length} >>`,
        "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
        "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>"
    ];
    pages.forEach((pageCommands, index) => {
        const pageId = 5 + index * 2;
        const streamId = pageId + 1;
        objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${streamId} 0 R >>`);
        objects.push(`<< /Length ${pageCommands.length} >>\nstream\n${pageCommands}\nendstream`);
    });
    let pdf = "%PDF-1.4\n%PortfolioResume\n";
    const offsets = [0];
    objects.forEach((object, index) => {
        offsets.push(pdf.length);
        pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
    });
    const xrefOffset = pdf.length;
    pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
    offsets.slice(1).forEach((offset) => { pdf += `${String(offset).padStart(10, "0")} 00000 n \n`; });
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

    const blob = new Blob([new TextEncoder().encode(pdf)], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Joah-van-der-Sloot-CV-${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 1500);
};
