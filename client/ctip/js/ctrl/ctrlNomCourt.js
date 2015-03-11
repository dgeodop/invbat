var ctrlNomCourt = angular.module('ctrlNomCourt', []);

ctrlNomCourt.controller("ctrlNomCourt", function($http, $scope, $routeParams){
	var idBat = $routeParams.idBat;
	$scope.idBat = idBat;
	var app = this;
	$http.get('/ctip/unBat/' + idBat)
	.success(function(data) {
		$scope.bat = data;	
		app.modifNomCourt = function(bat) {
			if(bat.nouvNomCourt == undefined) {
				alert('Case nulle')
			} else if(bat.nouvNomCourt == '') {
				alert('Case nulle')
			} else {
				$http.post('/ctip/nomcourt2', bat)
				.success(function(data) {
					$scope.bat = data;
				})
			}
		} 
	});
});
