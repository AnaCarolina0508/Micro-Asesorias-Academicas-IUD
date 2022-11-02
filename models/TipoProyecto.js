const { Schema, model } = require('mongoose');

const TipoProyectoSchema = Schema({
    nombre: {
        type: String,
        required: true,
        enum: ['Ensayo', 'Artículo', 'Monografía', 'TrabajoPregrado', 'TrabajoEspecialización']
    },
    fechaCreacion: {
        type: Date,
        required: true
    },
    fechaActualizacion: {
        type: Date,
        required: true
    }
});

module.exports = model('TipoProyecto', TipoProyectoSchema);