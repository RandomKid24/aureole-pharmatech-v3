$sitemapPath = "public/sitemap.xml"
$vcardUrls = Get-Content -Path "vcard_urls.txt" -Raw
$sitemapContent = Get-Content -Path $sitemapPath -Raw

# Ensure we're not appending twice
if (-not ($sitemapContent -match "aarti-avhad")) {
    $sitemapContent = $sitemapContent -replace '</urlset>', "$vcardUrls`n</urlset>"
    Set-Content -Path $sitemapPath -Value $sitemapContent -Encoding UTF8
    Write-Host "Sitemap updated successfully."
} else {
    Write-Host "Sitemap already contains V-Card URLs."
}

$vcardsDir = "public/vcards-2026"
$dirs = Get-ChildItem -Path $vcardsDir -Directory | Where-Object { $_.Name -ne "_shared" }
$cleaned = 0
foreach ($dir in $dirs) {
    $jsPath = Join-Path $dir.FullName "assets/js"
    $cssPath = Join-Path $dir.FullName "assets/css"
    if (Test-Path $jsPath) { 
        Remove-Item -Path $jsPath -Recurse -Force 
        $cleaned++
    }
    if (Test-Path $cssPath) { 
        Remove-Item -Path $cssPath -Recurse -Force 
    }
}
Write-Host "Cleaned up js/css folders in $cleaned directories."
