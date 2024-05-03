# Use uma imagem base
FROM --platform=$BUILDPLATFORM node:alpine AS base

# Configure o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e o arquivo package-lock.json (ou yarn.lock se você estiver usando Yarn)
COPY package*.json ./

# Instale as dependências
RUN yarn install

# Copie o restante dos arquivos da aplicação
COPY . .

# Compile a aplicação
RUN yarn run build

# Estágio de build final
FROM --platform=$TARGETPLATFORM base as final

# Exponha a porta em que sua aplicação será executada
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "start"]
