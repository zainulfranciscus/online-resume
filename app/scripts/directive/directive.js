angular.module('resume').directive('employer',function(){

	return {
		restrict:'E',
		replace:true,			
		scope : {
			name: "@name",
			period: "@period"
		},
		templateUrl: 'views/template/employer.html'
	}
});

angular.module('resume').directive('accomplishment',function(){

	return {
		restrict:'E',
		replace:true,			
		scope : {
			title: "@title",
			workPerformed: "@workPerformed",
			url: "@url"
		},
		templateUrl: 'views/template/accomplishment.html'
	}
});

angular.module('resume').directive('link',function(){

	return {
		restrict:'E',
		replace:true,			
		scope : {
			url: "@url"			
		},
		template: "<a  href='{{url}}' target='_blank'  class='bold'>See the website</a>"
	}
});