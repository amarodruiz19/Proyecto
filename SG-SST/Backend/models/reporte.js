mongoose = require('mongoose');

var esquemaReporte = mongoose.Schema({

	codRep: {
		type: String,
		required: true
	},

	codEmp: {
		type: String,
		required: true
	},

  fechaRep:{
		type:String,
		required: true
	},

	horaRep: {
		type:String,
		required: true
	},

	asuntoRep: {
		type: String,
		required: true
	},

	descripcionRep: {
		type: String,
		required: true
	},

	depto: {
		type: String,
		required: true
	},

	ubicacionRep: {
		type: String,
		required: true
	},

/* 	idFoto: {
		type: String,
		required: true
	}, */

	tipoRep: {
		type: String,
		required: false
	},

	idMatrizRep:{
		type: String,
		required: true
	},

});


var Reporte = module.exports = mongoose.model('reporte',esquemaReporte);

module.exports.get = function (callback,limit){

	Reporte.find(callback).limit(limit);

}
