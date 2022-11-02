const { Router } = require('express');
const router = Router();
const Etapas = require('../models/Etapas');


router.get('/', async function (req, res) {
    try {
        const etapas = await Etapas.find();
        res.send(etapas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
});
router.post('/', async function (req, res) {
    try {

        let etapas = new Etapas();
        etapas.nombre = req.body.nombre;
        etapas.fechaCreacion = new Date();
        etapas.fechaActualizacion = new Date();
        etapas = await etapas.save();
        res.send(etapas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
    
});

router.put('/:etapasId', async function (req, res) {
    try {
        let etapas = await Etapas.findById(req.params.etapasId);
        if (!etapas) {
            return res.status(400).send('Etapas no existe');
        }
        etapas.nombre = req.body.nombre;
        etapas.fechaActualizacion = new Date();
        etapas = await etapas.save();
        res.send(etapas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
});

module.exports = router;