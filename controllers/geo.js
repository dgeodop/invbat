var pg = require('pg');
var bd = require('../credentials/bd');
var connectString = 'tcp://' + bd.username + ':' + bd.password + '@localhost/postgres';

exports.tous = function(req, res) {
	var queryTous = 'SELECT * FROM geo';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('erreur de connection au server', err); }
		client.query(queryTous, null, function(err, result) {
			done();
			if(err) { return console.error('geo.tous', err) }
			var results = JSON.stringify(result.rows);
			res.send(results);
		});
	});
}

exports.etabl = function(req, res) {
	var idEtabl = req.params.idEtabl;
	var queryEtabl = 'SELECT * FROM geo WHERE id_etabl=$1';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('erreur de connection au server', err); }
		client.query(queryEtabl, [idEtabl], function(err, result) {
			done();
			if(err) { return console.error('geo.etabl', err) }
			var results = JSON.stringify(result.rows);
			res.header('Access-Control-Allow-Origin','*');
			res.send(results);
		});
	});
}

exports.bat = function(req, res) {
	var idBat = req.params.idBat;
	var queryEtabl = 'SELECT * FROM geo WHERE id_bat=$1';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('erreur de connection au server', err); }
		client.query(queryEtabl, [idBat], function(err, result) {
			done();
			if(err) { return console.error('geo.bat', err) }
			var results = JSON.stringify(result.rows);
			res.send(results);
		});
	});
}
