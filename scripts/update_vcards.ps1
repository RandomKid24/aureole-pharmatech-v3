$vcardsDir = "public/vcards-2026"
$dirs = Get-ChildItem -Path $vcardsDir -Directory | Where-Object { $_.Name -ne "_shared" }

foreach ($dir in $dirs) {
    $indexPath = Join-Path $dir.FullName "index.html"
    if (Test-Path $indexPath) {
        $content = Get-Content -Path $indexPath -Raw
        
        # 1. Update asset paths
        $content = $content -replace 'href="assets/css/', 'href="../_shared/css/'
        $content = $content -replace 'src="assets/js/jquery.min.js"', 'src="../_shared/js/jquery.min.js"'
        $content = $content -replace 'src="assets/js/slick.min.js"', 'src="../_shared/js/slick.min.js"'
        $content = $content -replace 'src="assets/js/bootstrap.bundle.min.js"', 'src="../_shared/js/bootstrap.bundle.min.js"'
        $content = $content -replace 'src="assets/js/cursor.js"', 'src="../_shared/js/cursor.js"'
        $content = $content -replace 'src="assets/js/custom.js"', 'src="../_shared/js/custom.js"'
        
        # 2. Fix name in contact object
        if ($content -match '<h1>(.*?)</h1>') {
            $realName = $matches[1]
            $content = $content -replace 'name: "Ms. Aarti Avhad"', "name: `"$realName`""
        }

        # 3. Fix common typo in WhatsApp links
        $content = $content -replace 'Hello%2C%20Ms.%20Mr.', 'Hello%2C%20Mr.'
        $content = $content -replace 'Hello%2C%20Ms.%20Ms.', 'Hello%2C%20Ms.'
        
        Set-Content -Path $indexPath -Value $content -Encoding UTF8
        Write-Host "Updated: $($dir.Name)"
    }
}
