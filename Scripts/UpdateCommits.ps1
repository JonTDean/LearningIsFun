# Get the current directory from which the script is run
$currentDir = Get-Location

# Define the output file path
$outputFile = Join-Path -Path $currentDir -ChildPath "Data\commits.json"

# Check if the Data directory exists, if not, create it
$dataDir = Join-Path -Path $currentDir -ChildPath "Data"
if (-Not (Test-Path -Path $dataDir)) {
	New-Item -Path $dataDir -ItemType Directory
}

# Change to the repository directory
Set-Location -Path $currentDir

# Initialize an array to hold each commit as a custom object
$commitList = @()

# Get commit logs and convert each entry into a custom object
git log --format="%ad%n%s" --date=short | ForEach-Object -Process {
	# Utilize a counter to differentiate between date and message
	if ($counter % 2 -eq 0) {
		# Even index, store date
		$date = $_
		}
	else {
		# Odd index, store message and create object
		$message = $_
		$commitList += [PSCustomObject]@{
			date    = $date
			message = $message
		}
	}
	$counter++
}

# Convert the array of custom objects to JSON
$jsonContent = $commitList | ConvertTo-Json

# Save the JSON content to the specified file
Set-Content -Path $outputFile -Value $jsonContent -Encoding UTF8
