$vcardsDir = "public/vcards-2026"
$dirs = Get-ChildItem -Path $vcardsDir -Directory | Where-Object { $_.Name -ne "_shared" }
$entries = @()
foreach ($dir in $dirs) {
    $entries += "  <url>"
    $entries += "    <loc>https://www.aureolepharmatech.com/vcards/$($dir.Name)/</loc>"
    $entries += "  </url>"
}
$entries | Set-Content -Path "vcard_urls.txt" -Encoding UTF8
