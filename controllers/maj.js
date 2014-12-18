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
			res.send(events);
		});
	});
}
