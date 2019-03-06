const express    = require('express');
const authVeteRoutes = express.Router();
const Card       = require('../models/Citas-model');
const isAuthVete  = require('../middlware/isAuthVete')




authVeteRoutes.post('/veterinario',isAuthVete, (req, res, next) => {

    username = req.user.username
    dia = req.body.dia
    month = req.body.month
    year = req.body.year
    pet= req.body.pet
    motivo = req.body.motivo
    hora = req.body.hora

    Card.create({
        username:username,
        dia:dia,
        month:month,
        year:year,
        pet:pet,
        motivo:motivo,
        hora:hora
    })
    .then(card=>res.status(200).json({message: card.username}))
    .catch(err=>{
        console.log(error)
    })

});

module.exports = authVeteRoutes;

