var app = angular.module('theWinningClick')

app.controller('homeCtrl', function($scope){


$scope.infoBoxes = [
	{
		title: 'THE WINNING CLICK WHEEL',
	    text: 'Spin the wheel and whatever number it lands on will be the number of sweepstakes entries you receive for the day.  You can spin the wheel once every 24 hours.'
	},
	{
	    title: 'PLAY GAMES',
	    text: 'You can earn points by playing GAMES!!!  You can trade your points for entries into the current sweepstakes.'
	},
	{
	    title: 'ARCADE',
	    text: 'In The Winning Click ARCADE, you will find fun games that you can play to earn points.  Here is where you will find all of the non-casino type games.'
	},
	{
	    title: 'CASINO',
	    text: 'In The Winning Click CASINO, you can use your points to place bets on games like: blackjack, roulette, slots and more!  But beware!  You could end up losing all of your points if luck is not on your side (good thing you can go back to the arcade to earn more points for free).'
	},
	{
	    title: 'INSTANT WIN',
	    text: 'Aside from our sweepstakes, we will also be giving away instant cash prizes through games like MATCH, and PICK A DOOR.  Look out for the INSTANT WIN games, as they will appear on the site randomly.  You do not want to miss out on your chances to win!'
	}
]

$scope.navbarItems = [
	{
		name: 'sign in',
		url: '#/#sign_in'
	},
	{
		name: 'register',
		url: '#/#register'
	},
	{
		name: 'home',
		url: '/#top'
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


})