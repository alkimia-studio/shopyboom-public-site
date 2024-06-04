@echo off
cd /d ".\WebAPP" & npm run build & cd /d "..\WebAPI" & dotnet publish -o "../website" --self-contained false & echo Your website is ready in the website folder.