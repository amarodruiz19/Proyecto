mongoose = require('mongoose');

var esquemaFoto = mongoose.Schema({

	idFoto: {
		type: String,
		required: true

	},

	urlFoto: {
		type: String,
		required: true

	},

});

var Foto = module.exports = mongoose.model('foto',esquemaFoto);

module.exports.get = function (callback,limit){

	Foto.find(callback).limit(limit);

}
