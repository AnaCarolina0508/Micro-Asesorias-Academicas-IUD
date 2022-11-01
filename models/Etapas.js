const { Schema, model } = require('mongoose');

const EtapasSchema = Schema({
    nombre: {
        type: String,
        required: true,
        enum: ['Anteproyecto', 'EntregaParcial1', 'EntregaParcial2', 'EntregaFinal']
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

module.exports = model('Etapas', EtapasSchema);