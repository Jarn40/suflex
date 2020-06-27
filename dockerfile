#Instalando OS base do container
FROM ubuntu

WORKDIR /usr/src/app

#Informacões sobre o container
LABEL maintainer="Alfredo Neto"
LABEL version="1.0.0"
LABEL descriptio="Container para rodar APP com PM2"

#Comandos Pos instalacao do OS

RUN apt update
RUN DEBIAN_FRONTEND="noninteractive" apt install -y npm
RUN npm install pm2 -g

#Copiando arquivos do APP para o docker
COPY . .

#Install dependencias
RUN npm install

EXPOSE 3000

#Criando comando de inicialização
CMD ["pm2-runtime","start", "./server.js"]