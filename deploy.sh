rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:jiujiu407/Fly-UI.git &&
git push -f -u origin main &&
cd .. 
echo https://jiujiu407.github.io/Fly-UI/index.html