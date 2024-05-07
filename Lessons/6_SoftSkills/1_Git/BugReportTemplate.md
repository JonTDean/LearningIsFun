# Bug Report Template

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