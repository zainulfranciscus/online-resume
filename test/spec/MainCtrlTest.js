'use strict';

describe('Unit test for SkillRatingCtrl ', function () {

  // load the controller's module
  beforeEach(module('resume'));

  var SkillRatingCtrl,scope;

   // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    SkillRatingCtrl = $controller('SkillRatingCtrl', {
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
  
 
});
