var ctrlEtablNomCourt = angular.module('ctrlEtablNomCourt', []);

ctrlEtablNomCourt.controller("ctrlEtablNomCourt", function($http, $scope, $routeParams){
	var app = this;
	$http.get('/ctip/nometabl/')
	.success(function(data) {
		$scope.etabls = data;	
		app.modifNomCourt = function(event) {
			if(event.nomCourt == '') {
				alert('Case nulle');
			} else if (event.nomCourt == undefined) {
				alert('Case nulle');
			} else {
				var idEtabl = event.id_etabl;
				$http.post('/ctip/nometabl/' + idEtabl, event)
				.success(function(data) {
					$scope.etabls = data;
				});
			}
		}
	});
});
