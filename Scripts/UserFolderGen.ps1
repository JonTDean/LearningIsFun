# Get the current directory where the script is being run
$currentDirectory = Get-Location

# Append the 'Lessons' subdirectory to the current directory
$rootDirectory = Join-Path -Path $currentDirectory -ChildPath "Lessons"

# Define the name of the new user folder to add
$userFolderName = "user_files"

# Define a list of folder names to skip
$skipList = @("ExcludeFolder1", "ExcludeFolder2")

# Get all directories under the root directory, recursively
$directories = Get-ChildItem -Path $rootDirectory -Directory -Recurse

foreach ($dir in $directories) {
    # Check if the directory name does not start with a number followed by an underscore and is not in the skip list
    if ($dir.Name -notmatch '^\d+_' -and $skipList -notcontains $dir.Name) {
        # Construct the full path for the new user folder
        $newFolderPath = Join-Path -Path $dir.FullName -ChildPath $userFolderName
        
        # Check if the folder already exists
        if (-Not (Test-Path -Path $newFolderPath)) {
            # Create the new folder
            New-Item -Path $newFolderPath -ItemType Directory
            
            # Log to console where the folder was created
            Write-Host "Created folder at: $newFolderPath"
        }
    }
}

Write-Host "User folders have been added where needed."
