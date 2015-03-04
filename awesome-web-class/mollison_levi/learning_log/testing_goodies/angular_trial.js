// This is apparently the basic set up of angularJS app
(function(){

	var app = angular.module('graphApp',[]);

	app.controller('graphController', function($scope){

	// Code goes here!
	// These are apparently variables that are within the scope of scope lol
	$scope.width = 600;
	$scope.height = 400;
	$scope.yAxis = "Sales";
	$scope.xAxis = "2014";

	/* I gave up. Have no idea wtf is going on, i seriously need to revisit JSON */

  });

})();