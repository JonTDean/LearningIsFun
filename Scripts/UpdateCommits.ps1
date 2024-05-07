# Get the current directory from which the script is run
$currentDir = Get-Location

# Define the output file path
$outputFile = Join-Path -Path $currentDir -ChildPath "Data\commits.md"

# Check if the Data directory exists, if not, create it
$dataDir = Join-Path -Path $currentDir -ChildPath "Data"
if (-Not (Test-Path -Path $dataDir)) {
	New-Item -Path $dataDir -ItemType Directory
}

# Change to the current directory
Set-Location -Path $currentDir

# Get commit logs and save to Markdown file
git log --format="**%ad** - %s" --date=short | Set-Content -Path $outputFile
