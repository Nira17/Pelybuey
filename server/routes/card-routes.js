const express    = require('express');
const cardRoutes = express.Router();
const Card       = require('../models/Citas-model');
const ensureLogin = require("connect-ensure-login");




cardRoutes.post('/form',ensureLogin.ensureLoggedIn("/login"), (req, res, next) => {
    username = req.user.username
    dia = req.body.dia
    motivo = req.body.motivo
    hora = req.body.hora

    
    console.log(req.body) 
})


module.exports = cardRoutes;




