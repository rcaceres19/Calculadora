const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expoSchema = new Schema({
    numero1: Number,
    numero2: Number,
    resul: Number
});


module.exports = mongoose.model('expo', expoSchema);