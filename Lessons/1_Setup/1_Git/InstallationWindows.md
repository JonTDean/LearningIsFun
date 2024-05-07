# Git - Windows

Git is a distributed version control system that is vital for modern software development workflows. Here are the step-by-step instructions to download and install Git on Windows 11.

## Step 1: Download Git

1. Open your web browser and go to the official Git website: [Git Downloads](https://git-scm.com/downloads)
2. Click on the "Windows" link to download the latest version of Git for Windows.
3. Once the download is complete, you will have the executable file (e.g., `Git-2.xx.x-64-bit.exe`), ready for installation.

## Step 2: Install Git

1. Double-click the downloaded executable file to start the installation.
2. Click 'Yes' in the User Account Control dialog that asks if you allow the app to make changes to your device.
3. In the setup wizard, click `Next` to proceed with the default installation settings, or change the components to be installed based on your preferences.
4. Continue clicking `Next`, choosing your preferred options for the following (default options are typically suitable for most users):
    - Editor selection
    - Branch name conventions
    - PATH environment
    - SSH executable
    - HTTPS transport backend
    - Line ending conversions
    - Terminal emulator for use with Git Bash
    - Performance tweaks and additional features
5. On the final screen, click `Install` to begin the installation.
6. Wait for the installation to complete and then click `Finish` to close the installer.

## Step 3: Verify Installation

1. To ensure that Git has been installed correctly, open the command prompt or Git Bash.
2. Type the following command and press `Enter`:

    ```bash
    git --version
    ```

3. If Git is installed correctly, you should see the installed version number displayed in the command prompt.