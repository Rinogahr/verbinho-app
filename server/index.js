const express = require("express");


const app = express();
const port = 8080;


app.get("/", function( req, res ){
    res.send('Servidor em node');
});



app.listen( port, ( ) => {
    console.log(' Servidor rodando com sucesso na porta  :>> ', `http://localhost:${port}` );
});