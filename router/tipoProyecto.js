const { Router } = require('express'); 

const router = Router();

router.get('/', function(req, res){
    res.send('Estoy desde tipoproyecto GET');
});

router.post('/', function(req, res){
    res.send('Estoy desde tipoproyecto POST');
});

router.put('/', function(req, res){
    res.send('Estoy desde tipoproyecto PUT');
});

module.exports = router;