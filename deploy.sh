# 定义变量
time=$(date "+%Y-%m-%d %H:%M:%S")
current_commit_id=`git rev-parse --short HEAD`

# 重置dist目录
rm -rf dist
echo remove dist

# 拉取github的gh-pages分支到指定目录
git clone -b gh-pages git@github.com:Fifth-Patient/stardust.git dist

# 构建（不清除dist目录）
npm run build_no_clean

# git commit
cd dist
git add -A
git commit -m "deploy size by commit id $current_commit_id at $time"
echo deploy size by commit id $current_commit_id at $time

# 以变基方式拉取github的gh-pages分支
git pull git@github.com:Fifth-Patient/stardust.git gh-pages --rebase

# 部署到github的gh-pages分支
git push git@github.com:Fifth-Patient/stardust.git gh-pages:gh-pages

