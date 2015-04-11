'use strict';

/**
 * @ngdoc function
 * @name resume.controller:SkillRatingCtrl
 * @description
 * # MainCtrl
 * Controller of resume
 */
angular.module('resume')
  .controller('SkillRatingCtrl',['$scope',function ($scope) {
  
	$scope.isRatingDisplayed = false;
	$scope.contentOfAboutPage = "";
	
	$scope.scrollTo = function(whereToScroll){
		$('html, body').animate({
            scrollTop: $(whereToScroll).offset().top - 207
        }, 1000);
	};	
	
	
	$scope.showRatingsStar = function() {
		var selectorForARatingStar = '.fi-star';
		
		$($(selectorForARatingStar + ':hidden')[0]).fadeIn(50,function(){
			if($(selectorForARatingStar).length > 0){
				$scope.showRatingsStar();
			}
		});
	}
	 
	$scope.hideRatingStar = function() {
		$('.fi-star').stop();
		$('.fi-star').hide();
	}
	
	$scope.getNumber = function(number){
		if(number < 0){
			return new Array(0);
		}
		return new Array(number);
	}
	
	$scope.displayAboutContent = function(aboutContentPageName){
		$scope.contentOfAboutPage=aboutContentPageName;
	}
	
	$scope.displaySkillRatings = function(){
		$scope.isRatingDisplayed = !$scope.isRatingDisplayed;
		
		$scope.showRatingsStar();
	}
	
	$scope.hideSkillRating = function() {
		$scope.isRatingDisplayed = false;
		
		$scope.hideRatingStar();
	}
	
	$scope.displaySkillRating = function() {
		$scope.isRatingDisplayed = true;
	}
	
	
}]);
