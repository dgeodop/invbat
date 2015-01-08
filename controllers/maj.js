var pg = require('pg');
var bd = require('../credentials/bd');
var connectString = 'tcp://' + bd.username + ':' + bd.password + '@localhost/postgres';

exports.bat = function(req, res) {
	var query = 'SELECT * FROM bat';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, null, function(err, result) {
			done();
			if(err) { return console.error('maj.bat', err); }
			var events=result.rows;
			res.header('Access-Control-Allow-Origin','*');
			res.send(events);
		});
	});
}

exports.bat_dgeo = function(req, res) {
	var query = 'SELECT * FROM bat_dgeo';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, null, function(err, result) {
			done();
			if(err) { return console.error('maj.bat_dgeo', err); }
			var events=result.rows;
			res.header('Access-Control-Allow-Origin','*');
			res.send(events);
		});
	});
}

exports.etabl = function(req, res) {
	var query = 'SELECT * FROM etabl';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, null, function(err, result) {
			done();
			if(err) { return console.error('maj.etabl', err); }
			var events=result.rows;
			res.header('Access-Control-Allow-Origin','*');
			res.send(events);
		});
	});
}

exports.event = function(req, res) {
	var query = 'SELECT * FROM event';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, null, function(err, result) {
			done();
			if(err) { return console.error('maj.event', err); }
			var events=result.rows;
			res.header('Access-Control-Allow-Origin','*');
			res.send(events);
		});
	});
}

exports.sal = function(req, res) {
	var query = 'SELECT * FROM sal';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, null, function(err, result) {
			done();
			if(err) { return console.error('maj.sal', err); }
			var events=result.rows;
			res.header('Access-Control-Allow-Origin','*');
			res.send(events);
		});
	});
}
