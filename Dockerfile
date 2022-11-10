#archivo que nos permite a partir de la creación de una imagen, la dockerizacion o el despliegue de nuestra aplicacion.
FROM node:16.15.1
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "node", "index.js" ]