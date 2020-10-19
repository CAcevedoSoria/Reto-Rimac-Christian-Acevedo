const express = require('express')
const request = require('request')
const app = express()

const HOST = 'https://swapi.py4e.com/api/'

//Consumiento api StarWars sin lambda 



app.get('/:word/:number', (req,res) => {
var number = req.params.number;
var word = req.params.word;

  request.get(HOST + word +"/"+ number , {json:true} , function(err,r){
    
      if(err){
        console.log(err);
      }
      else{
        res.send(r.body)
  
      }
    })
  })

  app.listen(5000);
  