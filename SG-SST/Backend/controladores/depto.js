Depto= require('../models/depto');

exports.index = function (req,res){
	
Depto.get(function(err,deptos){
	
	if(err){
		
		res.json({
			status:"error",
			message:err
		});
	}
	res.json({
		status:"success",
		message:"deptos listados correctamente",
		data: deptos	
		
	});
	
	
});
	
};


exports.new = function (req, res) {
	
    var depto = new Depto();
    depto.idDepto= req.body.idDepto;
    depto.nombreDepto = req.body.nombreDepto;
    depto.supervisor= req.body.supervisor;
    depto.estadoDepto = req.body.estadoDepto;
   

   // depto.phone = req.body.phone;
// save the depto and check for errors
    depto.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'nuevo depto creado!',
                data: depto
            });
    });
};


exports.view = function (req, res) {
    Depto.findById(req.params.depto_id, function (err, depto) {
        if (err)
            res.send(err);
        res.json({
            message: 'cargando detalles del depto..',
            data: depto
        });
    });
};
// Handle update depto info
exports.update = function (req, res) {
    Depto.findById(req.params.depto_id, function (err, depto) {
        if (err)
            res.send(err);
            depto.idDepto= req.body.idDepto;
    		depto.nombreDepto = req.body.nombreDepto;
    		depto.supervisor= req.body.supervisor;
    		depto.estadoDepto = req.body.estadoDepto;
// save the depto and check for errors
        depto.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'creado nuevo depto!',
                data: depto
            });
    });
    });
};
// Handle delete depto
exports.delete = function (req, res) {
    Depto.remove({
        _id: req.params.depto_id
    }, function (err, depto) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'depto borrado'
        });
    });
};
