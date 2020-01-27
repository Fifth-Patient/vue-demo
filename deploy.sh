# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# git commit
git init
git add -A
git commit -m 'deploy'

# 部署到github的gh-pages分支
git push -f git@github.com:Fifth-Patient/stardust.git master:gh-pages
