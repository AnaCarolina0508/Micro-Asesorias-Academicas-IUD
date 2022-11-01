const { Router } = require('express'); 

const router = Router();

router.get('/', function(req, res){
    res.send('Estoy desde proyecto GET');
});

router.post('/', function(req, res){
    res.send('Estoy desde proyecto POST');
});

router.put('/', function(req, res){
    res.send('Estoy desde proyecto PUT');
});

module.exports = router;