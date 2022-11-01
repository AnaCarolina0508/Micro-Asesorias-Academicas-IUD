const { Router } = require('express'); 

const router = Router();

router.get('/', function(req, res){
    res.send('Estoy desde universidad GET');
});

router.post('/', function(req, res){
    res.send('Estoy desde universidad POST');
});

router.put('/', function(req, res){
    res.send('Estoy desde universidad PUT');
});

module.exports = router;