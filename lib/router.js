Router.configure({
	
	layoutTemplate: 'layout',
});

Router.route('/', {name: 'home'});


Router.route('games');
Router.route('war');
Router.route('/games/_id:',{name:"currentgame",data:function(){
	if (Games.findOne({user1:Meteor.userId()})){
		return (Games.findOne({user1:Meteor.userId()}))
	}
	if (Games.findOne({user1:Meteor.userId()})){
		return (Games.findOne({user2:Meteor.userId()}))
	}
	if (Games.findOne({user1:Meteor.userId()})){
		return (Games.findOne({user3:Meteor.userId()}))
	}
	if (Games.findOne({user1:Meteor.userId()})){
		return (Games.findOne({user4:Meteor.userId()}))
	}

}},)
