#archivo que nos permite apartir de la creación de una imagen, la dockerizacion o el despliegue de nuestra aplicacion.
FROM node:16.15.1
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
<<<<<<< HEAD
EXPOSE 6000
=======
EXPOSE 4000
>>>>>>> f188f4cd91464a74572614495dc8dec3a164241e
CMD [ "node", "index.js" ]