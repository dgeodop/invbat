var pg = require('pg');
var bd = require('../credentials/bd');
var connectString = 'tcp://' + bd.username + ':' + bd.password + '@localhost/postgres';

exports.loginView = function (req, res) {
	var query = 'SELECT id_etabl, nom_court FROM etabl WHERE util_dgeo=1 ORDER BY nom_court';
	pg.connect(connectString, function(err, client, done) {
		if(err) { return console.error('Problème de connection à la base de données', err); }
		client.query(query, false, function(err, result) {
		  done();
		  if(err) { return console.error('Problème avec la requête', err); }
			var etabls=result.rows;
			res.render('login', {etabls: etabls});
		});
	});
}

exports.loginCtipView = function (req, res) {
	res.render('loginCtip');
}

exports.loginPost = function(req,res){
	var idEtabl = req.user.id;
	res.redirect('/etb/' + idEtabl + '/');
}

exports.loginCtipPost = function (req, res) {
	res.redirect('/ctip/');
}

exports.logout = function(req, res){
	req.logout();
	res.redirect('/');
}


