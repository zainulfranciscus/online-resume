'use strict';

/**
 * @ngdoc function
 * @name resume.controller:ContentCtrl
 * @description
 * # MainCtrl
 * Controller of resume
 */
angular.module('resume')
  .controller('AboutCtrl',['$scope',function ($scope) {
  
    var DEFAULT_CONTENT = "views/resume.html"
	$scope.content = DEFAULT_CONTENT;
		
	$scope.displayContent = function(contentPageName){
		$scope.content=contentPageName;
	}

}]);
