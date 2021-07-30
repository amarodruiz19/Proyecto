Foto= require('../models/foto');

exports.index = function (req,res){
	
Foto.get(function(err,fotos){
	
	if(err){
		
		res.json({
			status:"error",
			message:err
		});
	}
	res.json({
		status:"success",
		message:"fotos listados correctamente",
		data: fotos	
		
	});
	
	
});
	
};


exports.new = function (req, res) {
	
    var foto = new Foto();
    foto.idFoto= req.body.idFoto;
    foto.urlFoto = req.body.urlFoto;
    

   // foto.phone = req.body.phone;
// save the foto and check for errors
    foto.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'nuevo foto creado!',
                data: foto
            });
    });
};


exports.view = function (req, res) {
    Foto.findById(req.params.foto_id, function (err, foto) {
        if (err)
            res.send(err);
        res.json({
            message: 'cargando detalles del foto..',
            data: foto
        });
    });
};
// Handle update foto info
exports.update = function (req, res) {
    Foto.findById(req.params.foto_id, function (err, foto) {
        if (err)
            res.send(err);
            foto.idFoto= req.body.idFoto;
    		foto.urlFoto = req.body.urlFoto;
// save the foto and check for errors
        foto.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'creado nuevo foto!',
                data: foto
            });
    });
    });
};
// Handle delete foto
exports.delete = function (req, res) {
    Foto.remove({
        _id: req.params.foto_id
    }, function (err, foto) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'foto borrado'
        });
    });
};