var ctrlComment = angular.module('ctrlComment', []);

ctrlComment.controller("ctrlComment", function($http, $scope, $routeParams){
	var idBat = $routeParams.idBat;
	$scope.idBat = idBat;
	var app = this;
	$http.get('/ctip/unbatdgeo/' + idBat)
	.success(function(data) {
		$scope.bat = data;	
		app.modifComment = function(bat) {
			if(bat.nouvComment == undefined) {
				alert('Case nulle');
			} else if(bat.nouvComment == '') {
				alert('Case nulle');
			} else {
				$http.post('/ctip/comment', bat)
				.success(function(data) {
					$scope.bat = data;
				})
			}
		} 
	});
});
