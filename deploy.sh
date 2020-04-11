# 定义变量
time=$(date "+%Y-%m-%d %H:%M:%S")
current_commit_id=`git rev-parse --short HEAD`

# 重置dist目录
rm -rf dist
mkdir dist

# cd 到构输出的目录下 
cd dist

# clone 指定远端分支
git  clone -b gh-pages https://github.com/Fifth-Patient/stardust.git

# 构建
npm run build

# git commit
git add -A
git commit -m "deploy size by commit id $current_commit_id at $time"

# 拉取github的gh-pages分支
git pull origin gh-pages

# 部署到github的gh-pages分支
git push git@github.com:Fifth-Patient/stardust.git master:gh-pages

