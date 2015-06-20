var app = angular.module('theWinningClick', ['ngRoute', 'firebase'])

app.constant('fb', {
	url: 'https://the-winning-click.firebaseio.com/'
})

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeCtrl'
	})
	.when('/welcome', {
		templateUrl: 'views/welcome.html'
	})
	.otherwise('/')
})