@ECHO  OFF
CD %1
git pull
git add -A
git commit -m "Website updates."
git push origin main