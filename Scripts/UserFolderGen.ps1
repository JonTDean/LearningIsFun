# Get the current directory where the script is being run
$currentDirectory = Get-Location

# Append the 'Lessons' subdirectory to the current directory
$rootDirectory = Join-Path -Path $currentDirectory -ChildPath "Lessons"

# Define the name of the new user folder to add
$userFolderName = "user_files"

# Get all directories under the root directory, recursively
$directories = Get-ChildItem -Path $rootDirectory -Directory -Recurse

foreach ($dir in $directories) {
	# Check if the directory name does not start with a number followed by an underscore
	if ($dir.Name -notmatch '^\d+_') {
		# Construct the full path for the new user folder
		$newFolderPath = Join-Path -Path $dir.FullName -ChildPath $userFolderName
        
		# Check if the folder already exists
		if (-Not (Test-Path -Path $newFolderPath)) {
			# Create the new folder
			New-Item -Path $newFolderPath -ItemType Directory
		}
	}
}

Write-Host "User folders have been added where needed."
