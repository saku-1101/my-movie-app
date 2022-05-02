# The first thing to do when you want to create your Dockerfile 
#is to ask yourself what you want to do. 
#Our goal here is to launch Nuxt.js code.

FROM node:16-alpine
# Build an image starting with the node:16-alpine image.
# 軽量なAlpine上でNodeJSのv16系を動かしたイメージ
WORKDIR /app
#Set the working directory to /app.

COPY . .
#(Format:) COPY filename(which is wanted to be copied) destination (/app/???)
# CAUTION! : local -> relative path from Dockerfile directory/ container -> absolute path from work directory↓
# In this case all the files equal-under the Dockerfile directory will be copied under the /app/

RUN npm install npm@8.1.2
# RUN rm /bin/sh && ln -s /bin/bash /bin/sh ->これもlinuxシェルコマンド(sh)
# shell form, the command is run in a shell, which by default is /bin/sh -c on Linux(->RUNコマンドはシェルコマンドでかく)
# docker image をインストールして，runでイメージのコンテナを立てた後
#普通なら，環境構築のために，npm installとかしないといけない
#毎回するめんどくさいインストール作業をdoeker runでまとめられる

# EXPOSE 8000/tcp
# I don’t think there’s any need to use the EXPOSE instruction in your own Dockerfile if the docker image is simply a web app.
# We can really take advantage of EXPOSE when we source inter-container application. (It is like the app, which works with multiple docker file like in the front directory, backend)
# https://we-are.bookmyshow.com/understanding-expose-in-dockerfile-266938b6a33d

ENV HOST 0.0.0.0
# ホストから接続するため．

CMD [ "npm", "run", "dev" ]
# ENTRYPOINT -> CMD

# ⭐️
# RUN == 環境構築．インストール
# CMD == 何か動作を実行　というイメージ
