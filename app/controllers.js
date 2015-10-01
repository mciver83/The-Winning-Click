var app = angular.module('theWinningClick')

app.controller('homeCtrl', function($scope){


$scope.infoBoxes = [
	{
		title: 'THE WINNING CLICK WHEEL',
	    text: 'Spin the wheel and whatever number it lands on will be the number of sweepstakes entries you receive for the day.  You can spin the wheel once every 24 hours.'
	},
	{
	    title: 'PLAY GAMES',
	    text: 'You can earn points by playing GAMES!!!  Once you earn enough points, you can trade them in for an extra spin on the wheel!'
	},
	{
	    title: 'ARCADE',
	    text: 'In The Winning Click ARCADE, you will find fun games that you can play to earn points.  In the Arcade, you can mever lose points, only gain them!'
	},
	{
	    title: 'CASINO',
	    text: 'In The Winning Click CASINO, you can use your points to play our casino games like: blackjack, roulette, slots and more!  Your odds of winning in our casino are better than most, but if you run out of points, you can always play games in the Arcade to earn more points.'
	},
	{
	    title: 'INSTANT WIN',
	    text: 'Keep an eye out for our INSTANT WIN games!  We will randomly have games where members can play and earn prizes on the spot!'
	}
]

$scope.navbarItems = [
	{
		name: 'sign in',
		url: '#/#sign_in'
	},
	{
		name: 'home',
		url: '#/#top'
	},
	{
		name: 'how it works',
		url: '#/#howItWorks'
	},
	{
		name: 'games',
		url: '#/#games'
	},
	{
		name: 'contact',
		url: '#/#contact'
	}
]

$scope.showReg = function(){
	$scope.show = !$scope.show;
};


})