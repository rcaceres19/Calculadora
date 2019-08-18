const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect( config.dbConnPath );

const db  = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (db) => {
  console.log('Connected to Database');
});

module.exports =  mongoose;