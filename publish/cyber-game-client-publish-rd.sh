#!/bin/bash

# 1. 进入前端项目目录
cd /home/ubuntu/cyber.games.frontend
# 2. 拉取最新 master 分支代码
git pull origin master
# 3. 进入 docker compose 目录
cd /home/ubuntu/composes/game.rd
# 4. 停止 frontend 服务
docker compose stop frontend-rd
# 5. 进入 html 目录
cd html/
# 6. 删除旧的 web-mobile 以及 web-pc 目录
rm -rf web-mobile
rm -rf web-pc
# 7. 解压新的前端包
unzip /home/ubuntu/cyber.games.frontend/web-mobile.zip
unzip /home/ubuntu/cyber.games.frontend/web-pc.zip
# 8. 替换链接地址
sed -i "s#WS_URL: 'wss://bcg-demo.t9live.cc/ws'#WS_URL: \"wss://bcg-demo.t9live.cc/ws.rd\"#g" ./web-mobile/Config*.js
sed -i "s#PROTO_URL: 'https://bcg-demo.t9live.cc/conf/assets/cyber.games.bin'#PROTO_URL: \"https://bcg-demo.t9live.cc/conf.rd/assets/cyber.games.bin\"#g" ./web-mobile/Config*.js
sed -i "s#HTTP_URL: 'https://bcg-demo.t9live.cc/bridge.api/'#HTTP_URL: \"https://bcg-demo.t9live.cc/bridge.rd.api/\"#g" ./web-mobile/Config*.js

sed -i "s#WS_URL: 'wss://bcg-demo.t9live.cc/ws'#WS_URL: \"wss://bcg-demo.t9live.cc/ws.rd\"#g" ./web-pc/Config*.js
sed -i "s#PROTO_URL: 'https://bcg-demo.t9live.cc/conf/assets/cyber.games.bin'#PROTO_URL: \"https://bcg-demo.t9live.cc/conf.rd/assets/cyber.games.bin\"#g" ./web-pc/Config*.js
sed -i "s#HTTP_URL: 'https://bcg-demo.t9live.cc/bridge.api/'#HTTP_URL: \"https://bcg-demo.t9live.cc/bridge.rd.api/\"#g" ./web-pc/Config*.js
# 9. 替换版本号为当前的年月日时分
version=$(date +%Y%m%d%H%M)
sed -i "s#VERSION: \".*\"#VERSION: \"v$version\"#g" ./web-mobile/Config*.js
sed -i "s#VERSION: \".*\"#VERSION: \"v$version\"#g" ./web-pc/Config*.js
# 10. 返回上级目录
cd ../
# 11. 启动 frontend 服务
docker compose start frontend-rd
echo "发布流程完成！"