var ctrlTable = angular.module('ctrlTable', []);

ctrlTable.controller("ctrlTable", function($scope,$http,$routeParams) {
	var idEtabl = $routeParams.idEtabl;
	$scope.idEtabl = idEtabl;
	$http.get("/api/tables/etablSal/" + idEtabl)
		.success(function(data) {
			$scope.bats = data;
		})
});
