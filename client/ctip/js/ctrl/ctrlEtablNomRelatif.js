var ctrlEtablNomRelatif = angular.module('ctrlEtablNomRelatif', []);

ctrlEtablNomRelatif.controller("ctrlEtablNomRelatif", function($http, $scope, $routeParams){
	var app = this;
	$http.get('/ctip/nomreletabl/')
	.success(function(data) {
		$scope.etabls = data;	
		app.modifNomRelatif = function(event) {
			if(event.nomRelatif == undefined) {
				alert('Case nulle')
			} else if(event.nomRelatif == '') {
				alert('Case nulle')
			} else {
				var idEtabl = event.id_etabl;
				$http.post('/ctip/nomreletabl/' + idEtabl, event)
				.success(function(data) {
					$scope.etabls = data;
				})
			}
		}
	});
});
