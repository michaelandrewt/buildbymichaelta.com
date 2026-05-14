# One-time: copy your Cursor-attached portrait into the site (adjust source if your path differs).
$src = Join-Path $env:USERPROFILE ".cursor\projects\c-Users-micha-ecom-agent-buildbymichaelta-com-next\assets\c__Users_micha_AppData_Roaming_Cursor_User_workspaceStorage_a1de54c8195502fd9a84001bdf119baf_images_b8ee608a-7120-435c-b750-1ed7d98cb0d8-272ee907-23b8-43b8-aa68-dc217d805c3f.png"
$dst = Join-Path $PSScriptRoot "..\public\michael-profile.png"
if (Test-Path -LiteralPath $src) {
  Copy-Item -LiteralPath $src -Destination $dst -Force
  Write-Host "Copied to $dst"
} else {
  Write-Host "Source not found. Manually save your image as: $dst"
}
