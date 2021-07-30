mongoose = require('mongoose');

var esquemaTipoReporte = mongoose.Schema({

	idTipo: {
		type: String,
		required: true

	},

	nombreTipo: {
		type: String,
		required: true

	},

});

var TipoReporte = module.exports = mongoose.model('tipo reporte',esquemaTipoReporte);

module.exports.get = function (callback,limit){

	TipoReporte.find(callback).limit(limit);

}
