Template.currentgame.helpers({
	wargame:function(){
		if (Games.findOne({user1:Meteor.userId()})!=undefined){
			//console.log(Games.findOne({user1:Meteor.userId()}).type=="War")
			return (Games.findOne({user1:Meteor.userId()})).type=="War"

		}
		else if (Games.findOne({user2:Meteor.userId()})!= undefined){
			return (Games.findOne({user2:Meteor.userId()})).type=="War"
		}
		else if (Games.findOne({user3:Meteor.userId()})!= undefined){
			return (Games.findOne({user3:Meteor.userId()})).type=="War"
		}
		else {
			return (Games.findOne({user4:Meteor.userId()})).type=="War"
		}
	},
	gamefull:function(){
		var currentgame;
		if (Games.findOne({user1:Meteor.userId()})!=undefined){
			//console.log(Games.findOne({user1:Meteor.userId()}).type=="War")
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
		if (currentgame.size == 4){
			return currentgame.user4 !=undefined
		}
		if (currentgame.size == 3){
			return currentgame.user3 !=undefined
		}
		if (currentgame.size == 2){
			return currentgame.user2 !=undefined
		}
	},
	gamecode:function(){
		var currentgame;
		if (Games.findOne({user1:Meteor.userId()})!=undefined){
			//console.log(Games.findOne({user1:Meteor.userId()}).type=="War")
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
		console.log(currentgame);
		return currentgame.gamecode
	}
})

Template.currentgame.rendered = function() {
  $('html, body').css({
    "background-image": "url('http://i.imgur.com/G4CgYnu.png')",
  })
};

Template.currentgame.destroyed = function() {
  $('html, body').css({
    "background-image": "none"
  })
};

