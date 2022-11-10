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
router.post('/', async function (req, res) {
    try {
        const validaciones = validarProyecto(req);

        if (validaciones.length > 0) {
            return res.status(400).send(validaciones);
        }
        const existeProyectoPorNumero = await Proyecto.findOne({ numero: req.body.numero });
        if (existeProyectoPorNumero) {
            return res.status(400).send('Ya existe el numero para otro proyecto');
        }
        
        let proyecto = new Proyecto();
        proyecto.numero = req.body.numero;
        proyecto.titulo = req.body.titulo;
        proyecto.fechaIniciacion = req.body.fechaIniciacion;
        proyecto.fechaEntrega = req.body.fechaEntrega;
        proyecto.fechaCreacion = new Date();
        proyecto.fechaActualizacion = new Date();
        proyecto.valor = req.body.valor;
        proyecto.cliente = req.body.cliente._id;
        proyecto.tipoProyecto = req.body.tipoProyecto._id;
        proyecto.universidad = req.body.universidad._id;
        proyecto.etapas = req.body.etapas._id;
              
        proyecto = await proyecto.save();
        res.send(proyecto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }

});
router.put('/:proyectoId', async function (req, res) {
    try {
        let proyecto = await Proyecto.findById(req.params.proyectoId);
        if (!proyecto) {
            return res.status(400).send('Proyecto no existe');
        }

        const existeProyectoPorNumero = await Proyecto
            .findOne({ numero: req.body.numero, _id:{$ne: proyecto._id } });
        if (existeProyectoPorNumero) {
            return res.status(400).send('Ya existe el numero para otro proyecto');
        }

        proyecto.numero = req.body.numero;
        proyecto.titulo = req.body.titulo;
        proyecto.fechaIniciacion = req.body.fechaIniciacion;
        proyecto.fechaEntrega = req.body.fechaEntrega;
        proyecto.fechaActualizacion = new Date();
        proyecto.valor = req.body.valor;
        proyecto.cliente = req.body.cliente._id;
        proyecto.tipoProyecto = req.body.tipoProyecto._id;
        proyecto.universidad = req.body.universidad._id;
        proyecto.etapas = req.body.etapas._id;

        proyecto = await proyecto.save();
        res.send(proyecto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al consultar proyectos');
    }
});

module.exports = router;