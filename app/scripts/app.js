'use strict';

/**
 * @ngdoc overview
 * @name resume
 * @description
 * # resume
 *
 * Main module of the application.
 */
angular
  .module('resume', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).config(['$routeProvider', function($routeProvider) {
        $routeProvider
		.when('/', {
            templateUrl: 'views/resume.html',			
        })
		.when('/about', {
            templateUrl: 'views/about.html'
        });
}]);
 
