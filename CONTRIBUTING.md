# Contributing to LLT

Thank you for your interest in contributing to LLT! We value the contributions from the community, whether they are bug fixes, improvements, or new features. The following guidelines help to communicate how best to contribute to this project.

## Code of Conduct

LLT has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](/code_of_conduct.md) so that you can understand what actions will and will not be tolerated.

## How Can I Contribute?

### Reporting Bugs

Before reporting a bug, please check the [issue tracker](https://github.com/JonTDean/LetsLearnTogether/issues) to see if it has already been reported. If it is a new bug, click the **New Issue** button and follow the instructions provided.

**How to Submit a Good Bug Report:**

- Use a clear and descriptive title.
- Describe the exact steps which reproduce the problem in as much detail as possible.
- Provide specific examples to demonstrate the steps. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples.
- Describe the behavior you observed after following the steps and point out what exactly is the problem with that behavior.
- Explain which behavior you expected to see instead and why.
- Include screenshots and animated GIFs which show you following the described steps and clearly demonstrate the problem.


#### Example Bug Report

```
**Title:** Error thrown when attempting to save changes in the configuration panel

**Environment:**
- **Operating System:** Windows 11 Pro, Version 21H2
- **Software Version:** 2.1.5
- **Browser:** Google Chrome Version 103.0.5060.134

**Description:**
When I try to save changes in the configuration panel, the application throws a "Network Request Failed" error and does not save the changes. This issue occurs every time the change involves network settings.

**Steps to Reproduce:**
1. Log in to the application using administrator credentials.
2. Navigate to the "Settings" tab in the main menu.
3. Click on "Network Configuration".
4. Make any change to the existing network settings (e.g., change the IP address or network gateway).
5. Click the "Save" button.

**Expected Result:**
Changes to the network settings should be saved without errors, and a confirmation message should appear.

**Actual Result:**
Upon clicking the "Save" button, the application displays an error message at the top of the screen that reads, "Network Request Failed." No changes are saved, and the confirmation message does not appear.

**Frequency:**
Occurs 100% of the time with the above steps on the current version.

**Additional Information:**
- The error does not occur when changes are made to other settings (like user permissions or software preferences).
- Network connectivity is stable, and other network-dependent features work as expected.
- Attached are the console logs and a screenshot of the error message. (Note: Attach relevant files or images here.)

**Console Output:**
\```
POST /api/settings/network 500 (Internal Server Error)
{message: "Network request failed", code: 500}
\```

**Screenshot:**
![Error Screenshot](url_to_screenshot_here)
```
---

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for LLT, including completely new features and minor improvements to existing functionality.

**How to Submit a Good Enhancement Suggestion:**

- Use a clear and descriptive title.
- Provide a step-by-step description of the suggested enhancement in as many details as possible.
- Provide specific examples to demonstrate the steps. Include copy/pasteable snippets which you use in those examples, as necessary.
- Describe the current behavior and explain which behavior you expected to see instead and why.
- Explain why this enhancement would be useful to most LLT users and isn't something that can or should be implemented as a community plugin.

### Your First Code Contribution

Unsure where to begin contributing to LLT? You can start by looking through "beginner" and "help-wanted" issues:

- [Beginner issues](https://github.com/JonTDean/LetsLearnTogether/labels/beginner) - issues which should only require a few lines of code, and a test or two.
- [Help wanted issues](https://github.com/JonTDean/LetsLearnTogether/labels/help%20wanted) - issues which should be a bit more involved than beginner issues.

### Pull Requests

The process described here has several goals:

- Maintain LLT's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible LLT
- Enable a sustainable system for LLT's maintainers to review contributions

**What does it mean if a maintainer changes my pull request?**

- Maintainers may add commits to your pull request to help move the process along. These can be things like fixing tests, adding documentation, and fixing style issues.
- A maintainer may ask you to squash your commits, especially if you have made a large number of small commits to your pull request.

Thank you for reading, and good luck with your contribution!
