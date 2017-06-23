Template.war.rendered = function(){
	if(Games.findOne({user1:Meteor.userId()})!= undefined){
		var deck = Cards.find().fetch();
		deck = Meteor.call("shuffle",deck);
		var deck1 = [];
		var deck2 = [];
		var deck3 = [];
		var deck4 = [];
		for(var i = 0; i < 52; i++){
			if(52%(Games.findOne({user1:Meteor.userId()}).size) == 0){
				deck1[Math.floor(i/Games.findOne({user1:Meteor.userId()}).size)] = deck[i];
			}
			if(52%(Games.findOne({user1:Meteor.userId()}).size) == 1){
				deck2[Math.floor(i/Games.findOne({user1:Meteor.userId()}).size)] = deck[i];
			}
			if(52%(Games.findOne({user1:Meteor.userId()}).size) == 2){
				deck3[Math.floor(i/Games.findOne({user1:Meteor.userId()}).size)] = deck[i];
			}
			if(52%(Games.findOne({user1:Meteor.userId()}).size) == 3){
				deck4[Math.floor(i/Games.findOne({user1:Meteor.userId()}).size)] = deck[i];
			}
		}
		Games.update(Games.findOne({user1:Meteor.userId()})._id,{$set:{deck1:deck1,deck2:deck2,deck3:deck3,deck4:deck4}})
	}
	//Meteor.call("shuffle",)
}