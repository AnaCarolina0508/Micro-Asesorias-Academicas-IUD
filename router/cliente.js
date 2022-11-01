const { Router } = require('express'); 
const router = Router();
const Cliente = require('../models/Cliente');

router.get('/',async function(req, res){
    try {
        const clientes = await Cliente.find();
        res.send(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
});


router.post('/', async function(req, res){
    try{
        
        console.log('Objeto recibido', req.body);

        const existeCliente = await Cliente.findOne({email: req.body.email});
        console.log(existeCliente);
        if (existeCliente){
            return res.status(400).send('Email ya existe');
        }

        let cliente = new Cliente();
        cliente.nombre = req.body.nombre;
        cliente.email = req.body.email;
        cliente.fechaCreacion = new Date();
        cliente.fechaActualizacion = new Date();

        cliente = await cliente.save();
        
        res.send(cliente);
    } catch (error){
        console.log(error);
        res.status(500).send('ocurrió un error');
    }
});

router.put('/:clienteId', async function(req, res){
    try {
        console.log(req.body, req.params);

        let cliente = await Cliente.findById(req.params.clienteId );
        
        if (!cliente) {
            return res.status(400).send('Cliente no existe');
        }

        const existeCliente = await Cliente
            .findOne({ email: req.body.email, _id:{$ne:cliente._id} });
        console.log(existeCliente);
        if (existeCliente) {
            return res.status(400).send('Email ya existe');
        }

        cliente.email = req.body.email;
        cliente.nombre = req.body.nombre;
        cliente.fechaActualizacion = new Date();
            

        cliente = await cliente.save();

        res.send(cliente);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }
});

module.exports = router;