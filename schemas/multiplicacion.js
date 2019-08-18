const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const multiplicacionSchema = new Schema({
    numero1: Number,
    numero2: Number,
    resul: Number
});


module.exports = mongoose.model('multiplicacion', multiplicacionSchema);