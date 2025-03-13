# CRUD Backend con Node.js, Express.js, and MongoDB

Este es una aplicación de backend para realizar operaciones CRUD en las colecciones `users` and `movies` de 
MongoDB Atlas que también contiene contadores para ver el número de registros y modificaciones en estas 
colecciones por el backend.

# Requisitos
Debe estar instalado las dependencias de Node.js (npm), Express.js, Mongoose y dotenv mediante comandos de npm.


Para instalar las dependencias:
- Primero instalar Node.js de la ruta: [nodejs.org](https://nodejs.org/)
- Verificar la instalación en la terminal con:
        $ node -v
        $ npm -v
- Iniciar el proyecto con node.js
        $ npm init -y
- Finalmente instalar las dependencias necesarias:
        $ npm install express mongoose dotenv

# Estructura
Una vez instaladas las dependencias, crear la siguiente estructura de carpetas y archivos

    APIEXPRESS
    |
    |__/middlewares
    |            |__counterMiddleware.js
    |
    |__/models
    |       |__Movie.js
    |       |__User.js
    |
    |__/routes
    |       |__movieRoutes.js
    |       |__userRoutes.js
    |
    |__ .env
    |
    |__ server.js
    |
    |__ README.md
    |
    |__ package-lock.json
    |
    |__ package.json
    |
    |__ /nodes_modules

# Correr el backend
Una vez que todo este levantado, correr la aplicación con el comando en la terminal:
        $ node server.js

