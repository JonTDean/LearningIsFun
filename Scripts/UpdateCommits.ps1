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

# Save the current branch for later to switch back to
$currentBranch = git rev-parse --abbrev-ref HEAD

# Fetch all branches
$branches = git branch --list | ForEach-Object {
	$_.TrimStart('* ').Trim()
}

# Initialize a hashtable to store commits by branch
$branchCommits = @{}

foreach ($branch in $branches) {
	# Checkout each branch to get the correct commits
	git checkout $branch -q  # -q to suppress output

	# Initialize an array to hold each commit as a custom object
	$commitList = @()
	$counter = 0

	# Get commit logs for the current branch
	git log --format="%ad%n%s" --date=short | ForEach-Object -Process {
		if ($counter % 2 -eq 0) {
			$date = $_
		}
		else {
			$message = $_
			$commitList += [PSCustomObject]@{
				date    = $date
				message = $message
			}
		}
		$counter++
	}

	# Add the commit list to the hashtable with the branch name as the key
	$branchCommits[$branch] = $commitList
}

# Convert the hashtable of branch commits to JSON
$jsonContent = $branchCommits | ConvertTo-Json -Depth 100

# Save the JSON content to the specified file
Set-Content -Path $outputFile -Value $jsonContent -Encoding UTF8

# Switch back to the original branch
git checkout $currentBranch
