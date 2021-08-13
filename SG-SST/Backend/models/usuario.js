mongoose = require('mongoose');

var esquemaUsuario = mongoose.Schema({

	codEmp: {
		type: String,
		required: true

	},

	nombre: {
		type: String,
		required: true

	},

	apellido: {
		type: String,
		required: true

	},

	email: {
		type: String,
		required: true

	},

	contrasena: {
		type: String,
		required: true

	},

	estado: {
		type: String,
    default: "Activo",
		required: true

	},

	idDepto: {
		type: String,
		required: true

	},

	genero:{
		type: String,
		required: true

	},

  perfil:{
		type: String,
		required: true

	},

  direccion:{
		type: String,
		required: true

	},

	fechaCumple:{
		type:Date,
		default: Date.now
	},

  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ]

});


var Usuario = module.exports = mongoose.model('usuario',esquemaUsuario);

module.exports.get = function (callback,limit){

	Usuario.find(callback).limit(limit);

}

// module.exports = User;
