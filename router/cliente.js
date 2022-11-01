const { Router } = require('express'); 
const router = Router();
const cliente = require('../models/Cliente');

router.get('/', function(req, res){
    res.send('Estoy desde cliente GET');
});

router.post('/', function(req, res){
   console.log('Objeto recibido', req.body);
   res.send(req.body);
});

router.put('/', function(req, res){
    res.send('Estoy desde cliente PUT');
});

module.exports = router;