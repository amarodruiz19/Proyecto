Reporte= require('../models/reporte');

exports.index = function (req,res){

Reporte.get(function(err,reportes){

	if(err){

		res.json({
			status:"error",
			message:err
		});
	}
	res.json({
		status:"success",
		message:"reportes listados correctamente",
		data: reportes

	});


});

};


exports.new = function (req, res) {

    var reporte = new Reporte();
    reporte.codRep= req.body.codRep;
    reporte.codEmp = req.body.codEmp;
    reporte.fechaRep= req.body.fechaRep;
    reporte.horaRep = req.body.horaRep;
    reporte.asuntoRep= req.body.asuntoRep;
    reporte.descripcionRep= req.body.descripcionRep;
    reporte.idDepto = req.body.idDepto;
    reporte.ubicacionRep = req.body.ubicacionRep;
/*     reporte.idFoto = req.body.idFoto; */
    reporte.tipoRep = req.body.tipoRep;
    reporte.idMatrizRep = req.body.idMatrizRep;

   // reporte.phone = req.body.phone;
// save the reporte and check for errors
    reporte.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'nuevo reporte creado!',
                data: reporte
            });
    });
};


exports.view = function (req, res) {
    Reporte.findById(req.params.reporte_id, function (err, reporte) {
        if (err)
            res.send(err);
        res.json({
            message: 'cargando detalles del reporte..',
            data: reporte
        });
    });
};
// Handle update reporte info
exports.update = function (req, res) {
    Reporte.findById(req.params.reporte_id, function (err, reporte) {
        if (err)
            res.send(err);
            reporte.codRep= req.body.codRep;
    		reporte.codEmp = req.body.codEmp;
    		reporte.fechaRep= req.body.fechaRep;
    		reporte.horaRep = req.body.horaRep;
    		reporte.asuntoRep= req.body.asuntoRep;
    		reporte.descripcionRep= req.body.descripcionRep;
    		reporte.idDepto = req.body.idDepto;
    		reporte.ubicacionRep = req.body.ubicacionRep;
/*     		reporte.idFoto = req.body.idFoto; */
    		reporte.tipoRep = req.body.tipoRep;
    		reporte.idMatrizRep = req.body.idMatrizRep;
// save the reporte and check for errors
        reporte.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'creado nuevo reporte!',
                data: reporte
            });
    });
    });
};
// Handle delete reporte
exports.delete = function (req, res) {
    Reporte.remove({
        _id: req.params.reporte_id
    }, function (err, reporte) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'reporte borrado'
        });
    });
};
