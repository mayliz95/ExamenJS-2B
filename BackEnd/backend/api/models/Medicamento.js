/**
 * Medicamento.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    gramosAIngerir: {
      type: 'number',
      required: true
    },
    nombre: {
      type: 'string',
      required: true
    },
    composicion: {
      type: 'string',
      required: true
    },
    usadoPara: {
      type: 'string',
      required: true
    },
    fechaCaducidad: {
      type: 'string',
      required: true
    },
    numeroPastillas: {
      type: 'number',
      required: true
    },
    urlImg: {
      type: 'string',
      required: true
    },
    estado: {
      type: 'string',
      required: true
    },
    pacienteIdFK: {
      model: 'Paciente'
    }
  },
};

