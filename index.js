const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

// Desctruct Variables from .env
const {
    PORT,
    CONNECTION_STRING
} = process.env;

// MiddleWare
const app = express();
app.use(bodyParser.json());

// Database Connection (massive allows us to run SQL commands in a node env)
massive(CONNECTION_STRING).then( ( dbInstance ) => {
    app.set('db', dbInstance);
    console.log(app)
}).catch( () => {
    console.log( error );
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})