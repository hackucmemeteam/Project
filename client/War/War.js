Template.war.rendered = function(){
	if(Games.findOne({user1:Meteor.userId()})!= undefined){
		console.log(Games.findOne({user1:Meteor.userId()}));
		var deck = Cards.find().fetch();
		Meteor.call("shuffle",deck,Games.findOne({user1:Meteor.userId()._id}));
		deck = Temp.findOne({gameId:Games.findOne({user1:Meteor.userId()._id})}).value
		var deck1 = [];
		var deck2 = [];
		var deck3 = [];
		var deck4 = [];
		for(var i = 0; i < 52; i++){
			if(i%(Games.findOne({user1:Meteor.userId()}).size) == 0){
				deck1[Math.floor(i/Games.findOne({user1:Meteor.userId()}).size)] = deck[i];
			}
			if(i%(Games.findOne({user1:Meteor.userId()}).size) == 1){
				deck2[Math.floor(i/Games.findOne({user1:Meteor.userId()}).size)] = deck[i];
			}
			if(i%(Games.findOne({user1:Meteor.userId()}).size) == 2){
				deck3[Math.floor(i/Games.findOne({user1:Meteor.userId()}).size)] = deck[i];
			}
			if(i%(Games.findOne({user1:Meteor.userId()}).size) == 3){
				deck4[Math.floor(i/Games.findOne({user1:Meteor.userId()}).size)] = deck[i];
			}
		}

		Games.update(Games.findOne({user1:Meteor.userId()})._id,{$set:{deck1:deck1,deck2:deck2,deck3:deck3,deck4:deck4}})
	}
	//Meteor.call("shuffle",deck1,function(error, result){if(error){console.log(error);} else {deck1 = result;}});
	//Meteor.call("shuffle",deck2,function(error, result){if(error){console.log(error);} else {deck2 = result;}});
	//Meteor.call("shuffle",deck3,function(error, result){if(error){console.log(error);} else {deck3 = result;}});
	//Meteor.call("shuffle",deck4,function(error, result){if(error){console.log(error);} else {deck4 = result;}});
	//Meteor.call("shuffle",)
}
Template.war.destroyed= function(){
	if(Games.findOne({user1:Meteor.userId()})!= undefined){
		Games.remove(Games.findOne({user1:Meteor.userId()})._id);
		Temp.remove(Temp.findOne({gameId:Games.findOne({user1:Meteor.userId()})._id})._id)
	}
}