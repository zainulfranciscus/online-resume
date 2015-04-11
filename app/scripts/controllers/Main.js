'use strict';

/**
 * @ngdoc function
 * @name resume.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of resume
 */
angular.module('resume')
  .controller('MainCtrl',['$scope',function ($scope) {
  
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
	
	$scope.displaySkillRatings = function(){
		$scope.isRatingDisplayed = !$scope.isRatingDisplayed;
		$scope.textForButtonInSkillPage = "hide detail";
		$scope.classForSkillAndRatingContainer = "display-block row";
		$scope.classForSkillName ="small-6 medium-4 columns";
		$scope.classForSkillRating = "small-6 medium-8 columns";
		$scope.classForSkillAndRatingColumns="small-12 medium-4 columns";
		$scope.showRatingsStar();
	}
	
	$scope.hideSkillRating = function() {
		$scope.isRatingDisplayed = false;
		$scope.textForButtonInSkillPage = "see detail";
		$scope.classForSkillAndRatingContainer = "";
		$scope.classForSkillName = $scope.label;
		$scope.classForSkillRating = "";
		$scope.classForSkillAndRatingColumns = $scope.paddingLeft;
		$scope.hideRatingStar();
	}
	
	$scope.displaySkillRating = function() {
		$scope.isRatingDisplayed = true;
	}
	
	$scope.paddingLeft = "padding-left";
	$scope.label = "skill-label";
	
	$scope.isRatingDisplayed = false;
	$scope.textForButtonInSkillPage = "see detail";
	$scope.classForSkillAndRatingContainer = "";
	$scope.classForSkillName = $scope.label;
	$scope.classForSkillRating = "";
	$scope.classForSkillAndRatingColumns=$scope.paddingLeft;
}]);
