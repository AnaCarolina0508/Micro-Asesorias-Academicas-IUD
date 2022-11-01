const { Router } = require('express'); 

const router = Router();

router.get('/', function(req, res){
    res.send('Estoy desde etapas GET');
});

router.post('/', function(req, res){
    res.send('Estoy desde etapas POST');
});

router.put('/', function(req, res){
    res.send('Estoy desde etapas PUT');
});

module.exports = router;