const express = require("express");


const app = express();
const port = 8084;


app.get("/", function( req, res ){
    
});



app.listen( port, ( ) => {
    console.log(' Servidor rodando com sucesso na porta  :>> ', `http://localhost:${port}` );
});