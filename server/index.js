const express = require("express");
const mysql = require("mysql");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "rpm0811",
    database: ""
})

const app = express();
const port = 8080;


app.get("/", function( req, res ){
    res.send('Servidor em node');
});



app.listen( port, ( ) => {
    console.log('Servidor rodando com sucesso na porta  :>> ', `http://localhost:${port}` );
});