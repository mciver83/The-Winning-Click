var app = angular.module('theWinningClick')

app.directive('winners', function(){
	return {
		templateUrl: 'app/directives/dirWinners.html'
	}
})

app.directive('siteInfo', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/directives/siteInfo.html'
	}
})

app.directive('howWorks', function(){
	return {
		templateUrl: 'app/directives/howWorks.html'
	}
})

app.directive('winningClick', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/directives/winningClick.html'
	}
})

app.directive('navbar', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/directives/navbar.html'
	}
})

app.directive('regForm', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/directives/registration.html'
	}
})