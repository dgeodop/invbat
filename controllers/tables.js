var pg = require('pg');
var bd = require('../credentials/bd');
var connectString = 'tcp://' + bd.username + ':' + bd.password + '@localhost/postgres';
exports.etablSal = function(req, res) {
	var idEtabl = req.params.idEtabl;
	var queryEtablSal = 'SELECT * FROM list_sal_etabl WHERE id_etabl=$1';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('erreur de connection au server', err); }
		client.query(queryEtablSal, [idEtabl], function(err, result) {
			done();
			if(err) { return console.error('tables.etablSal', err) }
			var results = JSON.stringify(result.rows);
			res.header('Access-Control-Allow-Origin','*');
			res.send(results);
		});
	});
}
exports.vueCtip = function(req, res) {
	var queryEtablSal = 'SELECT * FROM ctip_vue';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('erreur de connection au server', err); }
		client.query(queryEtablSal, null, function(err, result) {
			done();
			if(err) { return console.error('tables.vueCtip', err) }
			var results = JSON.stringify(result.rows);
			res.header('Access-Control-Allow-Origin','*');
			res.send(results);
		});
	});
}
