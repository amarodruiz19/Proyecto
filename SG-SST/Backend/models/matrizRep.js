mongoose = require('mongoose');

var esquemaMatrizRep = mongoose.Schema({

	idMatrizRep: {
		type: String,
		required: true

	},

	idTipoRep: {
		type: String,
		required: true

	},

	nombreMatrizRep: {
		type: String,
		required: true

	},

	prioridadMatrizRep: {
		type: String,
		required: true

	},

});

var MatrizRep = module.exports = mongoose.model('matriz reporte',esquemaMatrizRep);

module.exports.get = function (callback,limit){

	Depto.find(callback).limit(limit);

}
