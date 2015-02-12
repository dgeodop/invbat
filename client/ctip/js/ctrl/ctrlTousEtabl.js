var ctrlTousEtabl = angular.module('ctrlTousEtabl', []);

ctrlTousEtabl.controller("ctrlTousEtabl", function($http, $scope, $routeParams) {
	var idEtabl = $routeParams.idEtabl;
	var app = this;
	$http.get('/ctip/tousbatetabl/' + idEtabl)
	.success(function(data) {
		$scope.bats = data;
	})
});
