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
			res.header('Access-Control-Allow-Origin','*');
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
			res.header('Access-Control-Allow-Origin','*');
			res.send(results);
		});
	});
}

exports.etiq = function(req, res) {
	var idEtabl = req.params.idEtabl;
	var queryEtabl = 'SELECT sal.*, ref_typ_sal.typ_sal, ref_typ_sal.typ_sal_nom, bat.nom_bat, bat_dgeo.id_bat_dgeo FROM sal, bat, bat_dgeo, ref_typ_sal WHERE sal.id_bat=bat.id_bat AND bat.id_bat=bat_dgeo.id_bat AND ref_typ_sal.id_typ=sal.id_typ AND bat_dgeo.util=1 AND id_etabl=$1 ORDER BY sal.id_bat, sal.id_typ';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('erreur de connection au server', err); }
		client.query(queryEtabl, [idEtabl], function(err, result) {
			done();
			if(err) { return console.error('geo.etiq', err) }
			var results = JSON.stringify(result.rows);
			res.header('Access-Control-Allow-Origin','*');
			res.send(results);
		});
	});
}
