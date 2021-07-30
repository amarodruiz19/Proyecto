let rutas = require('express').Router();;
rutas.get('/',function(req,res){
	res.json({
		status: 'api funcionando',
		message: 'bienvenido al tutorial'
	});
});

var controladorUsuario = require('../controladores/usuario');

rutas.route('/usuario')
.get(controladorUsuario.index)
.post(controladorUsuario.new);

rutas.route('/usuario/:usuario_id')
    .get(controladorUsuario.view)
    .patch(controladorUsuario.update)
    .put(controladorUsuario.update)
    .delete(controladorUsuario.delete);// Export API routes

var controladorDepto = require('../controladores/depto');

rutas.route('/depto')
.get(controladorDepto.index)
.post(controladorDepto.new);

rutas.route('/depto/:depto_id')
    .get(controladorDepto.view)
    .patch(controladorDepto.update)
    .put(controladorDepto.update)
    .delete(controladorDepto.delete);// Export API routes

var controladorFoto = require('../controladores/foto');

rutas.route('/foto')
    .get(controladorFoto.index)
    .post(controladorFoto.new);
    
rutas.route('/foto/:foto_id')
    .get(controladorFoto.view)
    .patch(controladorFoto.update)
    .put(controladorFoto.update)
    .delete(controladorFoto.delete);// Export API routes

var controladorMatrizRep = require('../controladores/matrizRep');

rutas.route('/matrizRep')
    .get(controladorMatrizRep.index)
    .post(controladorMatrizRep.new);
     
rutas.route('/matrizRep/:matrizRep_id')
    .get(controladorMatrizRep.view)
    .patch(controladorMatrizRep.update)
    .put(controladorMatrizRep.update)
    .delete(controladorMatrizRep.delete);// Export API routes

var controladorReporte = require('../controladores/reporte');

rutas.route('/reporte')
    .get(controladorReporte.index)
    .post(controladorReporte.new);
            
rutas.route('/reporte/:reporte_id')
    .get(controladorReporte.view)
    .patch(controladorReporte.update)
    .put(controladorReporte.update)
    .delete(controladorReporte.delete);// Export API routes

var controladorTipoReporte = require('../controladores/tipoReporte');

rutas.route('/tipoReporte')
    .get(controladorTipoReporte.index)
    .post(controladorTipoReporte.new);
                
rutas.route('/tipoReporte/:tipoReporte_id')
    .get(controladorTipoReporte.view)
    .patch(controladorTipoReporte.update)
    .put(controladorTipoReporte.update)
    .delete(controladorTipoReporte.delete);// Export API routes
module.exports = rutas;
