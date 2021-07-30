TipoReporte= require('../models/tipoReporte');

exports.index = function (req,res){
	
TipoReporte.get(function(err,tipoReportes){
	
	if(err){
		
		res.json({
			status:"error",
			message:err
		});
	}
	res.json({
		status:"success",
		message:"tipoReportes listados correctamente prueba",
		data: tipoReportes	
		
	});
	
	
});
	
};


exports.new = function (req, res) {
	
    var tipoReporte = new TipoReporte();
    tipoReporte.idTipo= req.body.idTipo;
    tipoReporte.nombreTipo = req.body.nombreTipo;
    

   // tipoReporte.phone = req.body.phone;
// save the tipoReporte and check for errors
    tipoReporte.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'nuevo tipoReporte creado!',
                data: tipoReporte
            });
    });
};


exports.view = function (req, res) {
    TipoReporte.findById(req.params.tipoReporte_id, function (err, tipoReporte) {
        if (err)
            res.send(err);
        res.json({
            message: 'cargando detalles del tipoReporte..',
            data: tipoReporte
        });
    });
};
// Handle update tipoReporte info
exports.update = function (req, res) {
    TipoReporte.findById(req.params.tipoReporte_id, function (err, tipoReporte) {
        if (err)
            res.send(err);
            tipoReporte.idTipo= req.body.idTipo;
    		tipoReporte.nombreTipo = req.body.nombreTipo;
// save the tipoReporte and check for errors
        tipoReporte.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'creado nuevo tipoReporte!',
                data: tipoReporte
            });
    });
    });
};
// Handle delete tipoReporte
exports.delete = function (req, res) {
    TipoReporte.remove({
        _id: req.params.tipoReporte_id
    }, function (err, tipoReporte) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'tipoReporte borrado'
        });
    });
};