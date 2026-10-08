(window.PORTFOLIO_PROJECTS ||= []).push({
    id: "factsheets-generator",
    title: "Factsheets Generator",
    category: "Software",
    year: "2026",
    image: "assets/images/projects/factsheets-generator/cover.png",
    imageAlt: "Factsheets Generator main menu",
    imageFit: "contain",
    icon: "assets/images/projects/factsheets-generator/icon.ico",
    summary: "A desktop tool that helps simulation-centre staff turn map symbols into clear factsheets for military training.",
    description: "During my internship at SimCen Land, I helped build an application for preparing visual reference sheets for simulation exercises. In the map view used by the training software, soldiers control units represented by symbols. The factsheets help them recognize those symbols as vehicles, obstacles, or infantry groups. Each exercise can use a different set of units, so staff can select the symbols soldiers need to recognize during that training. The application lets staff manage reusable image modules, organize friendly and enemy units, customize colors, and preview the result. It was a two-person project released on 1 June 2026.",
    contribution: "I built the application features outside of generating the finished sheet and editing its title and version, which were handled by my teammate. My work includes module creation and administration, selecting and organizing units for a sheet, color-palette and color-name settings, and the help content.",
    tools: ["C#", ".NET 8", "WPF", "XAML", "QuestPDF"],
    tags: ["software-development", "simulation-systems", "technical-design", "csharp", "wpf", "xaml", "teamwork"],
    duration: "4.5 weeks, 2-person team",
    date: "1 Jun 2026",
    github: "https://github.com/FaelinDingen/SimCenLandFactsheet",
    screenshots: [
        "assets/images/projects/factsheets-generator/create-sheet.png",
        "assets/images/projects/factsheets-generator/preview.png",
        "assets/images/projects/factsheets-generator/admin.png",
        "assets/images/projects/factsheets-generator/color-palette.png",
        "assets/images/projects/factsheets-generator/color-names.png",
        "assets/images/projects/factsheets-generator/help.png"
    ],
    screenshotAlts: [
        "Select simulation modules and add them as friendly or enemy units",
        "Preview a generated factsheet and adjust its layout",
        "Create and edit reusable unit modules in the admin panel",
        "Customize the factsheet color palette",
        "Set English and Dutch names for the color palette",
        "Read the built-in application help"
    ],
    showcase: [
        { type: "code", title: "Module types for vehicles, obstacles, and infantry", language: "csharp", source: "https://github.com/FaelinDingen/SimCenLandFactsheet/blob/main/Project/FactsheetGenerator/FactsheetGenerator/Classes/Module.cs", code: "public enum ModuleType { Vehicle, Obstacles, Infantry }\npublic enum AllegianceType { Ally, Enemy }\n\n[JsonIgnore]\npublic string TypeText\n{\n    get\n    {\n        return Type switch\n        {\n            ModuleType.Vehicle => LangRules.T(\"Vehicle\", \"Voertuig\"),\n            ModuleType.Obstacles => LangRules.T(\"Obstacles\", \"Obstakels\"),\n            ModuleType.Infantry => LangRules.T(\"Infantry\", \"Infanterie\"),\n            _ => Type.ToString()\n        };\n    }\n}" },
        { type: "image", src: "assets/images/projects/factsheets-generator/admin.png", alt: "Create and edit reusable unit modules in the admin panel", caption: "Modules are created and edited in the admin panel." },
        { type: "code", title: "Select a module as friendly or enemy", language: "csharp", source: "https://github.com/FaelinDingen/SimCenLandFactsheet/blob/main/Project/FactsheetGenerator/FactsheetGenerator/Classes/Module.cs", code: "[JsonIgnore]\npublic bool IsSelectedAlly\n{\n    get => _isSelectedAlly;\n    set\n    {\n        if (_isSelectedAlly != value)\n        {\n            _isSelectedAlly = value;\n            OnPropertyChanged(nameof(IsSelectedAlly));\n            OnPropertyChanged(nameof(IsSelected));\n        }\n    }\n}\n\n[JsonIgnore]\npublic bool IsSelected => IsSelectedAlly || IsSelectedEnemy;" },
        { type: "image", src: "assets/images/projects/factsheets-generator/create-sheet.png", alt: "Select simulation modules and add them as friendly or enemy units", caption: "Staff pick the units a training needs." }
    ]
});
