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
dv.span("**Commit Activity**");


// Directly access the file from the root of the vault
let page = dv.page("Data/commits");
console.log(page);

let commitText = page.file.content;
dv.paragraph("File content preview: " + commitText.slice(0, 200));

let commitLines = commitText.split('\n');
let commitCount = {};

commitLines.forEach(line => {
	let match = line.match(/\*\*(\d{4}-\d{2}-\d{2})\*\*/);
	if (match) {
		let date = match[1];
		commitCount[date] = (commitCount[date] || 0) + 1;
	}
});

Object.keys(commitCount).forEach(date => {
	dv.calendarData.entries.push({
		date: date,
		intensity: commitCount[date],
		content: "🔧",
		color: "blue",
	});
});

dv.renderCalendar(this.container, calendarData);

```





















