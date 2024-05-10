# Define the base directory
$baseDir = "E:\Programming"

# List of Super Directories including the new CLI Utilities
$superDirs = @("machine_learning", "embedded_systems", "web_development", "game_development", "data_science", "cloud_computing", "cyber_security", "cli_utilities")

# General Subdirectories (common to all Super Dirs except CLI Utilities)
$generalSubDirs = @{
	"documentation"  = @("guides", "references")
	"projects"       = @("personal", "work")
	"configurations" = @("dotfiles", "scripts")
	"resources"      = @("tools", "archives")
}

# CLI Utilities specific subdirectories for different operating systems
$cliSubDirs = @("mac_os", "linux", "windows", "cross_platform")

# Create the base directory if it doesn't exist
if (-not (Test-Path -Path $baseDir)) {
	New-Item -ItemType Directory -Path $baseDir
}

# Create Super Directories and their respective subdirectories
foreach ($superDir in $superDirs) {
	$superDirPath = Join-Path -Path $baseDir -ChildPath $superDir
	New-Item -ItemType Directory -Path $superDirPath -Force

	if ($superDir -eq "cli_utilities") {
		# Create subdirectories for CLI Utilities
		foreach ($os in $cliSubDirs) {
			$osPath = Join-Path -Path $superDirPath -ChildPath $os
			New-Item -ItemType Directory -Path $osPath -Force
		}
	}
	else {
		# Create General Subdirectories for other super directories
		foreach ($genSubDir in $generalSubDirs.Keys) {
			$genSubDirPath = Join-Path -Path $superDirPath -ChildPath $genSubDir
			New-Item -ItemType Directory -Path $genSubDirPath -Force
		}
	}
}

Write-Host "Directories created successfully."
