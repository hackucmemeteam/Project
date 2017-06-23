Router.configure({
	
	layoutTemplate: 'layout',
});

Router.route('/', {name: 'home'});


Router.route('games');
Router.route('war');
Router.route('/games/:_id',{name:"currentgame",data:function(){
	if (Games.findOne({user1:Meteor.userId()}) != undefined){
		return (Games.findOne({user1:Meteor.userId()}))
	}
	else if (Games.findOne({user2:Meteor.userId()})!= undefined){
		return (Games.findOne({user2:Meteor.userId()}))
	}
	else if (Games.findOne({user3:Meteor.userId()})!= undefined){
		return (Games.findOne({user3:Meteor.userId()}))
	}
	else {
		return (Games.findOne({user4:Meteor.userId()}))
	}
	}})


