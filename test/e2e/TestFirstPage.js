describe('End to end test for the website', function() {

  describe('Open the first page of the website', function() {

    beforeEach(function() {
      browser.get('/');
    });


    it('should have the word Zainul Franciscus', function() {
	  var text_in_header = element(by.css('.header h1')).getText();
      expect(text_in_header).toBe('ZAINUL FRANCISCUS');
    });
	
	
	it('should have a button to display ratings of each skill that I have', function() {
	  var aButtonToDisplaySkillRating = element(by.css('#see-skill-ratings'));	
	  aButtonToDisplaySkillRating.click();
	  
	  var anyHiddenRatingStar = false;
	  
	  element.all(by.css('.fi-star')).then(function(ratingStars){
	  
		for(var i = 0; i < ratingStars.length; i++){
			if(!ratingStars[i].isDisplayed) {
				anyHiddenRatingStar = true;
				break;
			}
		}
	  });
	  
	  expect(anyHiddenRatingStar).toBe(false);
    });
	
  });
});