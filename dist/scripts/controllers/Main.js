"use strict";angular.module("resume").controller("MainCtrl",["$scope",function(l){l.scrollTo=function(l){$("html, body").animate({scrollTop:$(l).offset().top-207},1e3)},l.showRatingsStar=function(){var i=".fi-star";$($(i+":hidden")[0]).fadeIn(50,function(){$(i).length>0&&l.showRatingsStar()})},l.hideRatingStar=function(){$(".fi-star").stop(),$(".fi-star").hide()},l.getNumber=function(l){return new Array(0>l?0:l)},l.displaySkillRatings=function(){l.isRatingDisplayed=!l.isRatingDisplayed,l.textForButtonInSkillPage="hide detail",l.classForSkillAndRatingContainer="display-block row",l.classForSkillName="small-6 medium-4 columns",l.classForSkillRating="small-6 medium-8 columns",l.classForSkillAndRatingColumns="small-12 medium-4 columns",l.showRatingsStar()},l.hideSkillRating=function(){l.isRatingDisplayed=!1,l.textForButtonInSkillPage="see detail",l.classForSkillAndRatingContainer="",l.classForSkillName=l.label,l.classForSkillRating="",l.classForSkillAndRatingColumns=l.paddingLeft,l.hideRatingStar()},l.displaySkillRating=function(){l.isRatingDisplayed=!0},l.paddingLeft="padding-left",l.label="skill-label",l.isRatingDisplayed=!1,l.textForButtonInSkillPage="see detail",l.classForSkillAndRatingContainer="",l.classForSkillName=l.label,l.classForSkillRating="",l.classForSkillAndRatingColumns=l.paddingLeft}]);