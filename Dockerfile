# Dockerfile
FROM node:20

# Cria o diretório do app
WORKDIR /usr/src/app

# Instala as dependências do app
COPY package*.json ./
RUN npm install

# Copia os arquivos do app para o container
COPY . .

# Expõe a porta que o app usa
EXPOSE 3000

# Comando para iniciar o app
CMD [ "npm", "start" ]
