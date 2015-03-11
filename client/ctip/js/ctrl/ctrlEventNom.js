var ctrlEventNom = angular.module('ctrlEventNom', []);

ctrlEventNom.controller("ctrlEventNom", function($scope, $http) {
	var app = this;
	$http.get("/ctip/event")
	.success(function(data) {
		$scope.events = data;
		app.setVu = function(event) {
			var idBat = event.id_bat;
			$http.post("/ctip/vu/" + idBat)
			.success(function(data) {
				$scope.events = data;
			})		
		}
		app.modifNomCtip = function(event) {
			console.log(event)
			if(event.nouvNomCtip == undefined) {
				alert('Case nulle');
			} else if(event.nouvNomCtip == '') {
				alert('Case nulle');
			} else {
				var idBat = event.id_bat;
				var nouvNom = event.nouvNomCtip;
				$http.post("/ctip/ajoutnomcourt/" + idBat, event)
				.success(function(data) {
					$scope.events = data;
				})		
			}
		}
	});
});

