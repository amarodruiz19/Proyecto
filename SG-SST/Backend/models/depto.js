mongoose = require('mongoose');

var esquemaDepto = mongoose.Schema({

	idDepto: {
		type: String,
		required: true

	},

	nombreDepto: {
		type: String,
		required: true

	},

	supervisor: {
		type: String,
		required: true

	},

	estadoDepto: {
		type: String,
		required: true

	},

});

var Depto = module.exports = mongoose.model('departamento',esquemaDepto);

module.exports.get = function (callback,limit){

	Depto.find(callback).limit(limit);

}
