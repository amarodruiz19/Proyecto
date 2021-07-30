MatrizRep= require('../models/matrizRep');

exports.index = function (req,res){
	
MatrizRep.get(function(err,matrizReps){
	
	if(err){
		
		res.json({
			status:"error",
			message:err
		});
	}
	res.json({
		status:"success",
		message:"matrizReps listados correctamente",
		data: matrizReps	
		
	});
	
	
});
	
};


exports.new = function (req, res) {
	
    var matrizRep = new MatrizRep();
    matrizRep.idMatrizRep= req.body.idMatrizRep;
    matrizRep.idTipoRep = req.body.idTipoRep;
    matrizRep.nombreMatrizRep= req.body.nombreMatrizRep;
    matrizRep.prioridadMatrizRep = req.body.prioridadMatrizRep;
    

   // matrizRep.phone = req.body.phone;
// save the matrizRep and check for errors
    matrizRep.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'nuevo matrizRep creado!',
                data: matrizRep
            });
    });
};


exports.view = function (req, res) {
    MatrizRep.findById(req.params.matrizRep_id, function (err, matrizRep) {
        if (err)
            res.send(err);
        res.json({
            message: 'cargando detalles del matrizRep..',
            data: matrizRep
        });
    });
};
// Handle update matrizRep info
exports.update = function (req, res) {
    MatrizRep.findById(req.params.matrizRep_id, function (err, matrizRep) {
        if (err)
            res.send(err);
            matrizRep.idMatrizRep= req.body.idMatrizRep;
    		matrizRep.idTipoRep = req.body.idTipoRep;
    		matrizRep.nombreMatrizRep= req.body.nombreMatrizRep;
    		matrizRep.prioridadMatrizRep = req.body.prioridadMatrizRep;
// save the matrizRep and check for errors
        matrizRep.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'creado nuevo matrizRep!',
                data: matrizRep
            });
    });
    });
};
// Handle delete matrizRep
exports.delete = function (req, res) {
    MatrizRep.remove({
        _id: req.params.matrizRep_id
    }, function (err, matrizRep) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'matrizRep borrado'
        });
    });
};