const express    = require('express');
const cardRoutes = express.Router();
const Card       = require('../models/Citas-model');
const isAuthenticated  = require('../middlware/isAuthenticated')




cardRoutes.post('/veterinario',isAuthVete, (req, res, next) => {

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

cardRoutes.post('/hours', (req, res, next) => {
    const {dia, month, year} = req.body;

    Card.find({dia, month, year})
    .then(cards => res.status(200).json({data:cards}))
    .catch(err => res.status(500).json(err));
    
   
    });
cardRoutes.get('/allCard',(req, res, next)=>{


    Card.find()
    .then((cards) =>{
        
        res.json(cards)
    })
})    


module.exports = cardRoutes;

