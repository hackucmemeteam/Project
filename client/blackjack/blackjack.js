Template.blackjack.rendered = function(){
	var currentgame = 0;
	if (Games.findOne({user1:Meteor.userId()})){

		currentgame = (Games.findOne({user1:Meteor.userId()}))
	}
	else if (Games.findOne({user2:Meteor.userId()})!= undefined){
		currentgame = (Games.findOne({user2:Meteor.userId()}))
	}
	else if (Games.findOne({user3:Meteor.userId()})!= undefined){
		currentgame = (Games.findOne({user3:Meteor.userId()}))
	}
	else {
		currentgame = (Games.findOne({user4:Meteor.userId()}))
	}
	Session.set("currentgame",currentgame)
}
Template.blackjack.helpers({
	twoplayer:function(){
		return Session.get("currentgame").size==2
	},
	threeplayer:function(){
		return Session.get("currentgame").size==3
	},
	fourplayer:function(){
		return Session.get("currentgame").size==4
	},
	player1:function(){
		return Profile.find({userId:Session.get("currentgame").user1}).fetch()[0].username
	},
	player2:function(){
		return Profile.find({userId:Session.get("currentgame").user2}).fetch()[0].username
	}
})