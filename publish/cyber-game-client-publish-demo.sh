#!/bin/bash

# 1. 进入前端项目目录
cd /home/ubuntu/cyber.games.frontend
# 2. 拉取最新 master 分支代码
git pull origin master
# 3. 进入 docker compose 目录
cd /home/ubuntu/composes/game
# 4. 停止 frontend 服务
docker compose stop frontend
# 5. 进入 html 目录
cd html/
# 6. 删除旧的 web-mobile 以及 web-pc 目录
rm -rf web-mobile
rm -rf web-pc
# 7. 解压新的前端包
unzip /home/ubuntu/cyber.games.frontend/web-mobile.zip
unzip /home/ubuntu/cyber.games.frontend/web-pc.zip
# 8. 替换链接地址，现在默认是demo地址,此处略过
# 9. 替换版本号为当前的年月日时分
version=$(date +%Y%m%d%H%M)
sed -i "s#VERSION: \".*\"#VERSION: \"v$version\"#g" ./web-mobile/Config.*.js
sed -i "s#VERSION: \".*\"#VERSION: \"v$version\"#g" ./web-pc/Config.*.js
# 10. 返回上级目录
cd ../
# 11. 启动 frontend 服务
docker compose start frontend
echo "发布流程完成！"