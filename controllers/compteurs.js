var pg = require('pg');
var bd = require('../credentials/bd');
var connectString = 'tcp://' + bd.username + ':' + bd.password + '@localhost/postgres';

exports.bat = function(req, res) {
	var queryTous = 'SELECT COUNT(id_bat) AS nb_bat FROM bat';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('erreur de connection au server', err); }
		client.query(queryTous, null, function(err, result) {
			done();
			if(err) { return console.error('compteurs.bat', err) }
			var results = JSON.stringify(result.rows);
			res.header('Access-Control-Allow-Origin','*');
			res.send(results);
		});
	});
}

exports.batDgeo = function(req, res) {
	var queryEtabl = 'SELECT COUNT(id_bat_dgeo) AS nb_bat_dgeo FROM bat_dgeo';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('erreur de connection au server', err); }
		client.query(queryEtabl, null, function(err, result) {
			done();
			if(err) { return console.error('compteurs.batDgeo', err) }
			var results = JSON.stringify(result.rows);
			res.header('Access-Control-Allow-Origin','*');
			res.send(results);
		});
	});
}

exports.util = function(req, res) {
	var queryEtabl = 'SELECT COUNT(id_bat_dgeo) AS nb_util FROM bat_dgeo WHERE util=0';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('erreur de connection au server', err); }
		client.query(queryEtabl, null, function(err, result) {
			done();
			if(err) { return console.error('compteurs.util', err) }
			var results = JSON.stringify(result.rows);
			res.header('Access-Control-Allow-Origin','*');
			res.send(results);
		});
	});
}

exports.parEtabl = function(req, res) {
	var queryEtabl = 'SELECT COUNT(id_bat_dgeo) AS nb_bat_dgeo, bat_dgeo.id_etabl, etabl.nom_court FROM bat_dgeo, etabl WHERE util=1 AND etabl.id_etabl=bat_dgeo.id_etabl GROUP BY bat_dgeo.id_etabl, etabl.nom_court';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('erreur de connection au server', err); }
		client.query(queryEtabl, null, function(err, result) {
			done();
			if(err) { return console.error('compteurs.parEtabl', err) }
			var results = JSON.stringify(result.rows);
			res.header('Access-Control-Allow-Origin','*');
			res.send(results);
		});
	});
}

