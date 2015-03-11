var ctrlPasNomBat = angular.module('ctrlPasNomBat', []);

ctrlPasNomBat.controller("ctrlPasNomBat", function($scope, $http) {
	var app = this;
	$http.get("/ctip/nonombat")
	.success(function(data) {
		$scope.bats = data;
		app.ajoutNomCtip = function(bat) {
			if(bat.nouvNomCtip == undefined) {
				alert('Case nulle');
			} else if(bat.nouvNomCtip == '') {
				alert('Case nulle');
			} else {
				idBat = bat.id_bat;
				nouvNomCtip = bat.nouvNomCtip;
				$http.post('/ctip/nomcourt/' + idBat, bat)
				.success(function(data) {
					$scope.bats = data;
				});
			}
		}
	});
});

