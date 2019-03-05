const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const cardSchema = new Schema({
    username:String,
    dia:String,
    month:String,
    year:String,
    pet:String,
    motivo:String,
    hora:String
    
  
}, 
{
  timestamps: true
});

const Card = mongoose.model('Citas-model', cardSchema);
module.exports = Card;