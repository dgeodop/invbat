var ctrlSal = angular.module('ctrlSal', []);

ctrlSal.controller("ctrlSal", function($scope,$http,$routeParams){
	var idBat = $routeParams.idBat;
	$scope.idBat = idBat;
	var app = this;
	$http.get("api/sal/" + idBat)
	.success(function(data) {
		$scope.sals = data;
		app.editQteSal = function(sal) {
			var idSal = sal.id_sal;
			$http.post("api/sal/" + idBat + "/" + idSal + "/qte", sal)
				.success(function(data) {
				$scope.sals= data;
				})
		}
		app.delSal = function(sal) {
			var idSal = sal.id_sal;
			$http.post("api/sal/" + idBat + "/" + idSal + "/del")
				.success(function(data) {
				$scope.sals= data; 
				})
		}
		app.addTypSal = function(typsal) {
			$http.post("api/sal/" + idBat + "/new", typsal)
			.success(function(data) {
				$scope.typsal.newTypSal = '';
				$scope.typsal.qte = '';
				$scope.sals=data; 
				$http.get("api/sal/" + idBat + "/notinbat")
					.success(function(data) {
						$scope.typsals= data;
					});
			});
		}
	});
	$http.get("api/sal/" + idBat + "/notinbat")
		.success(function(data) {
			$scope.typsals= data;
		});
});
