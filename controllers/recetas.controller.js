const recetas = require('../models/recetas.model');
const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/neorresetas",
    { useUnifiedTopology: true, useNewUrlParser: true }
)

//Crear receta
exports.crearReceta = (req, res) => {
    const data = {
        "_id": mongoose.Types.ObjectId(),
        "isAnonymous": req.body.isAnonymous,
        "authorName": req.body.authorName,
        "name": req.body.name,
        "type": req.body.type,
        "steps": req.body.steps,
        "ingredients": req.body.ingredients
    }
    const newReceta = new recetas(data);
    newReceta.save((error) => {
        if (error) throw error;
        res.send({
            "message": "Receta guardad",
            "_id": data._id
        })
    })
}

//Obtener lista de recetas
exports.allReceipes = (req, res) => {
    recetas.find((error, recetas) => {
        if (error) throw error;
        res.send(recetas)
    })
}

//Obtener una receta

//Editar una receta

//Eliminar una receta