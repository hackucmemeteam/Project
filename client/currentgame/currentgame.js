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
	}
})
