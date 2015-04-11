'use strict';

describe('Unit test for MainCtrl ', function () {

  // load the controller's module
  beforeEach(module('resume'));

  var MainCtrl,scope;

   // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
	
	spyOn(scope, 'showRatingsStar');
	spyOn(scope, 'hideRatingStar');
  }));
  
  
	
  it('should return an array of size 1', function () {
    expect(scope.getNumber(1).length).toBe(1);	
  });
  
  it('should return an array of size 1 when a 0 or negative number is given', function(){
	 expect(scope.getNumber(-1).length).toBe(0);
  });
  
  it('should return "see detail" after hideSkillRating() is called',function(){
    scope.hideSkillRating();
	expect(scope.isRatingDisplayed).toBeFalsy();
	expect(scope.textForButtonInSkillPage).toBe("see detail");	
  });
  
  it("showRating() should be called when displaySkillRatings is called",function(){
	
	scope.displaySkillRatings();
	expect(scope.showRatingsStar).toHaveBeenCalled();
  });
  
   it("hideRatingsStar() should be called when hideSkillRating is called",function(){
	
	scope.hideSkillRating();
	expect(scope.hideRatingStar).toHaveBeenCalled();
  });
  
  
  it('should return "hide detail" after displaySkillRatings() is called',function(){
	scope.displaySkillRatings();
	expect(scope.isRatingDisplayed).toBeTruthy();
	expect(scope.textForButtonInSkillPage).toBe("hide detail");
  });
  
  it("should return display-block row after displaySkillRatings() is called", function(){
	scope.displaySkillRatings();
	expect(scope.classForSkillAndRatingContainer).toBe("display-block row");
  });
  
  it("should return an empty string after hideSkillRating() is called", function(){
	scope.hideSkillRating();
	expect(scope.classForSkillAndRatingContainer).toBe("");
  });
  
  it("should return small-6 medium-4 columns after displaySkillRatings() is called", function() {
	scope.displaySkillRatings();
	expect(scope.classForSkillName).toBe("small-6 medium-4 columns");
  });
  
   it("should return an empty string columns after hideSkillRating() is called", function() {
	scope.hideSkillRating();
	expect(scope.classForSkillName).toBe("skill-label");
  });
  
  it("should return small-6 medium-8 columns after displaySkillRatings() is called", function(){
    scope.displaySkillRatings();
	expect(scope.classForSkillRating).toBe("small-6 medium-8 columns");
  });
  
  it("should return en empty string after hideSkillRating() is called", function(){
    scope.hideSkillRating();
	expect(scope.classForSkillRating).toBe("");
  });
  
 
  it("should return true when displaySkillRatings() is called for the first time and false when it is called on the 2nd time",function(){
	scope.displaySkillRatings();
	expect(scope.isRatingDisplayed).toBeTruthy();
	scope.displaySkillRatings();
	expect(scope.isRatingDisplayed).toBeFalsy();
  });
});
