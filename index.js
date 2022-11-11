const express = require ('express');
const { getConnection } = require ('./db/db-connection-mongo');
require ('dotenv').config();


const app = express();
const port = process.env.PORT;

getConnection();

//Parseo JSON
app.use(express.json());
app.use( '/proyecto', require('./router/proyecto') );

app.listen (port, () => {
    console.log(`Example app listening on port ${port}`)
});

