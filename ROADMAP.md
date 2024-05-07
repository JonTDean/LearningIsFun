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
const fs = require('fs');
const path = require('path');

dv.span("**Commit Activity**");

// Get the current Obsidian vault directory
const vaultDir = window.app.vault.adapter.getBasePath();

// Async read file
fs.readFile(path.join(vaultDir, 'Data/commits.json'), 'utf8', async (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        // Remove BOM (Byte Order Mark) if present
        data = removeBOM(data);

        // Parse JSON data
        const commitData = JSON.parse(data);

        // Extracting unique dates and their commit counts from "dev" array
        let commitCount = {};
        commitData.dev.forEach(commit => {
            let date = commit.date.split('T')[0]; // Extracting date part
            commitCount[date] = (commitCount[date] || 0) + 1;
        });

        // Get current date
        const currentDate = new Date();

        // Prepare calendar data
        const calendarData = {
            mode: "month", // or "week"
            year: currentDate.getFullYear(),
            month: currentDate.getMonth(),
            week: getWeekNumber(currentDate),
            colors: {
                green: ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
            },
            showCurrentDayBorder: true,
            defaultEntryIntensity: 1,
            intensityScaleStart: 1,
            intensityScaleEnd: Math.max(...Object.values(commitCount)),
            entries: Object.entries(commitCount).map(([date, count]) => ({
                date,
                intensity: count,
                content: count.toString(),
            })),
        };

        // Render the heatmap calendar
        renderHeatmapCalendar(this.container, calendarData);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});

// Function to remove BOM from string
function removeBOM(str) {
    if (str.charCodeAt(0) === 0xFEFF) {
        return str.slice(1);
    }
    return str;
}

// Function to get the week number for a given date
function getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}
```
































