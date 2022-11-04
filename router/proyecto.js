const { Router } = require('express');
const Proyecto = require('../models/Proyecto');
const Cliente = require('../models/Cliente');
const Etapa = require('../models/Etapa');
const TipoProyecto = require('../models/TipoProyecto');
const Universidad = require('../models/Universidad');
const {validarProyecto } = require('../helpers/validar-proyecto');
const router = Router();

router.get('/', async function (req, res) {
    try {
        const proyectos = await Proyecto.find().populate([
            {
                path: 'etapas', select: 'nombre'
            },
            {
                path: 'cliente', select: 'nombre email'
            },
            {
                path: 'universidad', select: 'nombre direccion telefono'
            },
            {
                path: 'tipoProyecto', select: 'nombre'
            }
        ]);
        res.send(proyectos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar proyectos');
    }
});

module.exports = router;