var ctrlClItin = angular.module('ctrlClItin', []);

ctrlClItin.controller("ctrlClItin", function($http, $scope, $routeParams){
	var idBat = $routeParams.idBat;
	var app = this;
	$scope.idBat = idBat;
	$http.get('/ctip/unbatdgeo/' + idBat)
		.success(function(data) {
			$scope.bat = data;
			app.modifClItin = function(bat) {
				if(bat.nouvClItin == undefined) {
					alert('Case nulle');
				} else if(bat.nouvClItin == '') {
					alert('Case nulle');
				} else {
					$http.post('/ctip/clitin', bat)
						.success(function(data) {
							$scope.bat = data;
						})
				}
			}
	});
});
