# Let's Learn Together Roadmap

## Overview
This roadmap outlines the development and refinement stages for the educational content structured in the `Lessons` directory.

### Lessons

#### Setup Lessons
- [ ] Complete all READMEs
- [ ] Review and finalize installation guides
- Tasks:
    - [ ] Update `ObsidianInstallation.md` for latest plugin compatibility
- Progress: [`Kanban Link`](/Kanban/Lessons/0_Setup.md)

#### Initial Setup Topics
- [ ] Complete installation guides for Git, VSCode, Obsidian, and Figma
- [ ] Ensure compatibility across different operating systems
- Tasks:
    - [ ] Revise `InstallationWindows.md` and `InstallationWindowsWSL.md` for clarity
- Progress: [`Kanban Link`](/Kanban/Lessons/1_InitialSetupKanban.md)

#### CommandLine Topics
- [ ] Develop comprehensive CLI basics guide
- [ ] Integrate cross-platform command line tools
- Tasks:
    - [ ] Create interactive examples for command line operations
- Progress: [`Kanban Link`](/Kanban/Lessons/3_CommandLineKanban.md)

#### General Programming Topics
- [ ] Outline key programming concepts applicable across languages
- [ ] Design content to foster a strong programming foundation
- Tasks:
    - [ ] Draft initial sections on algorithms and data structures
- Progress: [`Kanban Link`](/Kanban/Lessons/4_GeneralProgrammingKanban.md)

#### DevOps Topics
- [ ] Define key DevOps concepts to cover
- [ ] Draft initial README
- Calendar: `Due Date`
- Progress: [`Kanban Link`](/Kanban/Lessons/2_DevOpsKanban.md)

#### Specific Programming Topics
- [ ] Web Development: Complete frameworks overview
- [ ] Machine Learning & Data Science: Outline core algorithms and techniques
- Progress Tracker: `View in Tracker Plugin`

#### Soft Skills
- [ ] Expand Git templates
- [ ] Develop advanced prompt engineering lessons for GPT-4
- Progress: [`Kanban Link`](/Kanban/Lessons/6_SoftSkillsKanban.md)

## Resources
- [Reference Map](obsidian://open?vault=main&file=README.md) of core documents
- [Media Files Overview](obsidian://open?vault=main&file=Media%2FImages%2FLogos%2Fcc-nc-sa-logo.png)

## Task Management
- [ ] Complete `UserFolderGen.ps1` script enhancements
- [ ] Update roadmap bi-weekly
- [View Tasks](obsidian://tasks)

## Heatmap of Activity


```dataviewjs
dv.span("**Commit Activity**")
const calendarData = {
    year: 2024,  // Set the year you are interested in
    colors: {
        blue: ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"],
    },
    showCurrentDayBorder: true,
    defaultEntryIntensity: 1,
    intensityScaleStart: 1,
    intensityScaleEnd: 10,  // Adjust based on expected maximum daily commits
    entries: [],
}

// Parse the commit log from the markdown file
let commitText = dv.pages('./Data/commits')[0].file.content;
let commitLines = commitText.split('\n');
let commitCount = {};

// Count commits per date
commitLines.forEach(line => {
    let match = line.match(/\*\*(\d{4}-\d{2}-\d{2})\*\*/);
    if (match) {
        let date = match[1];
        if (commitCount[date]) {
            commitCount[date] += 1;
        } else {
            commitCount[date] = 1;
        }
    }
});

// Populate the calendar data
Object.keys(commitCount).forEach(date => {
    calendarData.entries.push({
        date: date,
        intensity: commitCount[date],
        content: "🔧",
        color: "blue",
    });
});

renderHeatmapCalendar(this.container, calendarData);
```


