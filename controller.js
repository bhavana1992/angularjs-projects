var app=angular.module('HelloUserApp', [])

app.controller('HelloUserController', function($scope) {
	$scope.records=[{name:"bhavana"},{name:"red"}];
	$scope.temp = false;
	$scope.addEntry=function() {
		$scope.records.push({name:$scope.newData});
	};

		$scope.deleteRow=function(x){
		$scope.records.splice($scope.records.indexOf(x),1);

		
	};
});
