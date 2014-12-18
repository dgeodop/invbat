var ctrlMajBat = angular.module('ctrlMajBat', []);

ctrlMajBat.controller("ctrlMajBat", function($scope, $http) {
	$http.get("/api/maj/bat")
	.success(function(data) {
		$scope.bats = data;
		});
});

