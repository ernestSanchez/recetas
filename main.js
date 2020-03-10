const express = require('express');
const bodyParser = require('body-parser');
const recetasController = require('./controllers/recetas.controller')

const server = express();

//middleware
server.use(bodyParser.json());

//endpoint
server.get('/all', recetasController.allReceipes)

server.post('/nuevaReceta', recetasController.crearReceta)



//listen
server.listen(3000, () => {
    console.log("Servidor escuchando en puerto 3000")
})