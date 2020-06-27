#Instalando OS base do container
FROM nodejscn/node


#Informacões sobre o container
LABEL maintainer="Alfredo Neto"
LABEL version="1.0.0"
LABEL descriptio="Container para rodar APP com PM2"

#Comandos Pos instalacao do OS

RUN apt update
RUN apt upgrade
RUN apt install -y pm2

#Como iremos usar postgres em outro container, e o código não vai salvar nada localmente, não vejo utilidade para criação de volumes

#Copiando arquivos do APP para o docker
COPY . /SUFLEX

#Criando comando de inicialização
CMD ["pm2-runtime", "/SUFLEX/server.js"]