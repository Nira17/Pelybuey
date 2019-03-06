require('dotenv').config();
const mongoose = require("mongoose");
const User = require("./models/User-model");
const bcrypt     = require('bcryptjs');


mongoose
  .connect(process.env.DBURL, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  }); 


const salt     = bcrypt.genSaltSync(10);
const hashPass = bcrypt.hashSync("1234", salt);

const veterinario = {
    username: "Oscar",
    password: hashPass,
    veterinario: true
}
    User.create(veterinario)
        .then(() => mongoose.disconnect())
        .catch(err=>(console.log('error')))
        