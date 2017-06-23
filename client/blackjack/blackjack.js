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
	var cards= Cards.find().fetch();
	var dealcards = [cards[Math.floor(Math.random()*52)],cards[Math.floor(Math.random()*52)]]
	Games.update(currentgame._id,{$set:{dealcards:dealcards,user1cards:[cards[Math.floor(Math.random()*52)],cards[Math.floor(Math.random()*52)]],user2cards:[cards[Math.floor(Math.random()*52)],cards[Math.floor(Math.random()*52)]]}})

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
	},
	dealercard:function(){
		return Games.find(Session.get("currentgame")._id).fetch()[0].dealcards
	},
	user1card:function(){
		return Games.find(Session.get("currentgame")._id).fetch()[0].user1cards
	},
	user2card:function(){
		return Games.find(Session.get("currentgame")._id).fetch()[0].user2cards
	},
})