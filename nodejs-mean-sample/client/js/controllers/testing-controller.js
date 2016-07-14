//app.run(function(editableOptions) {
//  editableOptions.theme = 'bs3';
//});

app.controller('testingController', ['$scope',
	function($scope){
		$scope.user = {
			text: 'abc',
			email: 'email@example.com',
			tel: '123-45-67',
			number: 29,
			range: 10,
			url: 'http://example.com',
			search: 'blabla',
			color: '#6a4415',
			date: null,
			time: new Date(1970, 0, 1, 12, 30),
			datetime: null,
			month: null,
			week: null,
			password: 'password'
		};
	}
])