const express = require('express');
const app = express();
const mongoose = require('./mongo');
const bodyParser = require('body-parser');

// Models
const sumaModel = require('./schemas/suma');
const restaModel = require('./schemas/resta');
const divisionModel = require('./schemas/division');
const multiplicacionModel = require('./schemas/multiplicacion');
const expoModel = require('./schemas/expo');
const raizcModel = require ('./schemas/raizc');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/suma/', (req, res) => {

  sumaModel.find({} , (err, docs) => {
    if (err) {
      throw err;
    }
    
    res.json(docs);
  })
});

app.get('/api/resta/', (req, res) => {

  restaModel.find({} , (err, docs) => {
    if (err) {
      throw err;
    }
    
    res.json(docs);
  })
});

app.get('/api/division/', (req, res) => {

  divisionModel.find({} , (err, docs) => {
    if (err) {
      throw err; //Tiro el error para que se mas facil encontrarlo
    }
    
    res.json(docs);
  })
});


app.get('/api/multiplicacion/', (req, res) => {

  multiplicacionModel.find({} , (err, docs) => {
    if (err) {
      throw err;
    }
    
    res.json(docs);
  })
});

app.get('/api/expo/', (req, res) => {

  expoModel.find({} , (err, docs) => {
    if (err) {
      throw err;
    }
    
    res.json(docs);
  })
});

app.get('/api/raizc/', (req, res) => {

  raizcModel.find({} , (err, docs) => {
    if (err) {
      throw err;
    }
    
    res.json(docs);
  })
});




//////////////////////
//////// POST ////////
//////////////////////

app.post('/api/suma', (req, res)=>{
  const { numero1, numero2, resul } = req.body
  console.log(numero1, numero2, resul)/*Esto tambien sirve como test se esta debuguiando el valor que
                                        nos retorna el request */
  const sum = new sumaModel({numero1, numero2, resul});
  sum.save((err, suma)=>{
    if(err){
      throw err;
    }
    
    res.json(suma);
  })
});

app.post('/api/resta', (req, res)=>{
  const { numero1, numero2, resul } = req.body
  console.log(numero1, numero2, resul)/*Se esta validando la resta */
  const rest = new restaModel({numero1, numero2, resul});
  rest.save((err, resta)=>{
    if(err){
      throw err;
    }
    
    res.json(resta);
  })
});

app.post('/api/division', (req, res)=>{
  const { numero1, numero2, resul } = req.body
  console.log(numero1, numero2, resul)/*Se realiza el test para confirmar la division */
  const divisio = new divisionModel({numero1, numero2, resul});
  divisio.save((err, division)=>{
    if(err){
      throw err;
    }
    
    res.json(division);
  })
});

app.post('/api/multiplicacion', (req, res)=>{
  const { numero1, numero2, resul } = req.body
  console.log(numero1, numero2, resul)/*Se valida multiplicacion */
  const multiplicacio = new multiplicacionModel({numero1, numero2, resul});
  multiplicacio.save((err, multiplicacion)=>{
    if(err){
      throw err;
    }
    
    res.json(multiplicacio);
  })
});

app.post('/api/expo', (req, res)=>{
  const { numero1, numero2, resul } = req.body
  console.log(numero1, numero2, resul)/*Test que valida exponencial */
  const exp = new expoModel({numero1, numero2, resul});
  exp.save((err, expo)=>{
    if(err){
      throw err;
    }
    
    res.json(expo);
  })
});

app.post('/api/raizc', (req, res)=>{
  const { numero1, numero2, resul } = req.body
  console.log(numero1, numero2, resul)/*Test que prueba raiz cuadrada */
  const raiz = new raizcModel({numero1, numero2, resul});
  raiz.save((err, raizc)=>{
    if(err){
      throw err;
    }
    
    res.json(raizc);
  })
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});