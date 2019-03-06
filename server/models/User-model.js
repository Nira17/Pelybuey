const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type:String, unique:true},
  password: String,
  veterinario :{type:Boolean,default:false}
}, 
{
  timestamps: true
});

const User = mongoose.model('User-model', userSchema);
module.exports = User;