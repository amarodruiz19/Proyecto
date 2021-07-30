Usuario= require('../models/usuario');

exports.index = function (req,res){
	
Usuario.get(function(err,usuarios){
	
	if(err){
		
		res.json({
			status:"error",
			message:err
		});
	}
	res.json({
		status:"success",
		message:"usuarios listados correctamente",
		data: usuarios	
		
	});
	
	
});
	
};


exports.new = function (req, res) {
	
    var usuario = new Usuario();
    usuario.codEmp= req.body.codEmp;
    usuario.nombre = req.body.nombre;
    usuario.apellido= req.body.apellido;
    usuario.email = req.body.email;
    usuario.contrasena= req.body.contrasena;
    usuario.estado= req.body.estado;
    usuario.idDepto = req.body.idDepto;
    usuario.genero = req.body.genero;
    usuario.perfil = req.body.perfil;
    usuario.direccion = req.body.direccion;
    usuario.fechaCumple = req.body.fechaCumple;

   // usuario.phone = req.body.phone;
// save the usuario and check for errors
    usuario.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'nuevo usuario creado!',
                data: usuario
            });
    });
};


exports.view = function (req, res) {
    Usuario.findById(req.params.usuario_id, function (err, usuario) {
        if (err)
            res.send(err);
        res.json({
            message: 'cargando detalles del usuario..',
            data: usuario
        });
    });
};
// Handle update usuario info
exports.update = function (req, res) {
    Usuario.findById(req.params.usuario_id, function (err, usuario) {
        if (err)
            res.send(err);
            usuario.codEmp= req.body.codEmp; //Agregar el parentesis
            usuario.nombre = req.body.nombre;
            usuario.apellido= req.body.apellido;
            usuario.email = req.body.email;
            usuario.contrasena= req.body.contrasena;
            usuario.estado= req.body.estado;
            usuario.idDepto = req.body.idDepto;
            usuario.genero = req.body.genero;
            usuario.perfil = req.body.perfil;
            usuario.direccion = req.body.direccion;
            usuario.fechaCumple = req.body.fechaCumple;
// save the usuario and check for errors
        usuario.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'creado nuevo usuario!',
                data: usuario
            });
    });
    });
};
// Handle delete usuario
exports.delete = function (req, res) {
    Usuario.remove({
        _id: req.params.usuario_id
    }, function (err, usuario) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'usuario borrado'
        });
    });
};