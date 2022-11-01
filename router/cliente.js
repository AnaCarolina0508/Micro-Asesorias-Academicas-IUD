const { Router } = require('express'); 

const router = Router();

router.get('/', function(req, res){
    res.send('Estoy desde cliente GET');
});

router.post('/', function(req, res){
    res.send('Estoy desde cliente POST');
});

router.put('/', function(req, res){
    res.send('Estoy desde cliente PUT');
});

module.exports = router;