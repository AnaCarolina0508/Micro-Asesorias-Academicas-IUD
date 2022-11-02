const { Router } = require('express');
const router = Router();
const TipoProyecto = require('../models/TipoProyecto');


router.get('/', async function (req, res) {
    try {
        const tipoProyectos = await TipoProyecto.find();
        res.send(tipoProyectos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
});
router.post('/', async function (req, res) {
    try {

        let tipoProyecto = new TipoProyecto();
        tipoProyecto.nombre = req.body.nombre;
        tipoProyecto.fechaCreacion = new Date();
        tipoProyecto.fechaActualizacion = new Date();
        tipoProyecto = await tipoProyecto.save();
        res.send(tipoProyecto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
    
});

router.put('/:tipoProyectoId', async function (req, res) {
    try {
        let tipoProyecto = await TipoProyecto.findById(req.params.tipoProyectoId);
        if (!tipoProyecto) {
            return res.status(400).send('Tipo proyecto no existe');
        }
        tipoProyecto.nombre = req.body.nombre;
        tipoProyecto.fechaActualizacion = new Date();
        tipoProyecto = await tipoProyecto.save();
        res.send(tipoProyecto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
});

module.exports = router;