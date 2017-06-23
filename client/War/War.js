Template.war.rendered = function(){
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
	if(Games.findOne({user1:Meteor.userId()}).deck1==undefined){
	if(Games.findOne({user1:Meteor.userId()})!= undefined){
		
		var deck = Cards.find().fetch();
		Meteor.call("shuffle",deck,Games.findOne({user1:Meteor.userId()._id}),-1);
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

Template.war.helpers({
	twoplayer:function(){
		return Session.get("currentgame").size==2
	},
	threeplayer:function(){
		return Session.get("currentgame").size==3
	},
	fourplayer:function(){
		return Session.get("currentgame").size==4
	},
	deck1card:function(){
		var currentgame;
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

		return currentgame.deck1[currentgame.deck1.length-1].imagename;
	},
	deck2card:function(){
		var currentgame;
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

		return currentgame.deck2[currentgame.deck2.length-1].imagename;
	},
	deck3card:function(){
		var currentgame;
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

		return currentgame.deck3[currentgame.deck3.length-1].imagename;
	},
	deck4card:function(){
		var currentgame;
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

		return currentgame.deck4[currentgame.deck4.length-1].imagename;
	},
	player1:function(){
		var currentgame;
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
		
		return Profile.find({userId:currentgame.user1}).fetch()[0].username;
	},
	player2:function(){
		var currentgame;
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
		
		return Profile.find({userId:currentgame.user2}).fetch()[0].username;
	},
	player3:function(){
		var currentgame;
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
		
		return Profile.find({userId:currentgame.user3}).fetch()[0].username;
	},
	player4:function(){
		var currentgame;
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
		
		return Profile.find({userId:currentgame.user4}).fetch()[0].username;
	},


})
Template.war.events({
	'click #ready':function(){
		var currentgame;
		if (Games.findOne({user1:Meteor.userId()})){
			currentgame = Games.findOne({user1:Meteor.userId()});
			Games.update(currentgame._id,{$set:{player1:true}})

			
		}
		else if (Games.findOne({user2:Meteor.userId()}) != undefined){
			currentgame = Games.findOne({user2:Meteor.userId()});
			Games.update(currentgame._id,{$set:{player2:true}})
			}
			
		else if (Games.findOne({user3:Meteor.userId()})!= undefined){
			currentgame = Games.findOne({user3:Meteor.userId()});
			Games.update(currentgame._id,{$set:{player3:true}})
			
		}
		else {
			currentgame = Games.findOne({user4:Meteor.userId()});
			Games.update(currentgame._id,{$set:{player4:true}})
		}

		if (currentgame.size<4){
			Games.update(currentgame._id,{$set:{player4:true}})
		}
		if(currentgame.size<3){
			Games.update(currentgame._id,{$set:{player3:true}})
		}
		
		currentgame = Games.find(currentgame._id).fetch()[0]
		
		
		if (currentgame.player1 && currentgame.player2 && currentgame.player3 && currentgame.player4){
		
			if (!(currentgame.deck1.length == 0|| currentgame.deck2.length == 0)){
			Games.update(currentgame._id,{$set:{player1:false}})
			Games.update(currentgame._id,{$set:{player2:false}})
			Games.update(currentgame._id,{$set:{player3:false}})
			Games.update(currentgame._id,{$set:{player4:false}})


			
				
					var value1 = currentgame.deck1[currentgame.deck1.length-1].value;
					var value2 = currentgame.deck2[currentgame.deck2.length-1].value;
					
					if (value1 > value2 ){
					
						$("textarea").val(""+Profile.find({userId:currentgame.user1}).fetch()[0].username+" won the round!");
						var discard1 = [];
						discard1 =Games.find(currentgame._id).fetch()[0].discard1;
						discard1[discard1.length] = currentgame.deck1[currentgame.deck1.length-1]
						discard1[discard1.length] = currentgame.deck2[currentgame.deck2.length-1]
						Games.update(currentgame._id,{$set:{discard1:discard1}})
						var deck1 = [];
						var deck2 = [];
						for (var k = 0; k < currentgame.deck1.length-1;k++){
							deck1[k] = currentgame.deck1[k]
						}
						for (var j = 0; j < currentgame.deck2.length-1;j++){
							deck2[j] = currentgame.deck2[j]
						}
						Games.update(currentgame._id,{$set:{deck1:deck1}})
						Games.update(currentgame._id,{$set:{deck2:deck2}})
					}

					
					else{
				
						$("textarea").val(""+Profile.find({userId:currentgame.user2}).fetch()[0].username+" won the round!");
						var discard2;
						discard2 =Games.find(currentgame._id).fetch()[0].discard2;
						discard2[discard2.length] = currentgame.deck1[currentgame.deck1.length-1]
						discard2[discard2.length] = currentgame.deck2[currentgame.deck2.length-1]
						Games.update(currentgame._id,{$set:{discard2:discard2}})
						var deck1 = [];
						var deck2 = [];
						for (var l = 0; l < currentgame.deck1.length-1;l++){
							deck1[l] = currentgame.deck1[l]
						}
						for (var m = 0; m < currentgame.deck2.length-1;m++){
							deck2[m] = currentgame.deck2[m]
						}
						Games.update(currentgame._id,{$set:{deck1:deck1}})
						Games.update(currentgame._id,{$set:{deck2:deck2}})
					}
					if (Games.find(currentgame._id).fetch()[0].deck1.length==0){
						Meteor.call("shuffle",Games.find(currentgame._id).fetch()[0].discard1, Games.find(currentgame._id).fetch()[0]._id,1)
						var newdeck1 = Temp.find({gameId:currentgame._id}).fetch()[0].value
						
						if (Temp.find({gameId:currentgame._id}).fetch()[0].num==2){
						Games.update(currentgame._id,{$set:{deck1:newdeck1}})
						Games.update(currentgame._id,{$set:{discard1:[]}})	
						}
					}
					if (Games.find(currentgame._id).fetch()[0].deck2.length==0){
						Meteor.call("shuffle",Games.find(currentgame._id).fetch()[0].discard2,Games.find(currentgame._id).fetch()[0]._id,2)
						var newdeck2 = Temp.find({gameId:currentgame._id}).fetch()[0].value
						
						if (Temp.find({gameId:currentgame._id}).fetch()[0].num==2){
						Games.update(currentgame._id,{$set:{deck2:newdeck2}})
						Games.update(currentgame._id,{$set:{discard2:[]}})
						}	
					}

				
			}
			if (Games.find(currentgame._id).fetch()[0].deck1.length==0){
					

						Meteor.call("shuffle",Games.find(currentgame._id).fetch()[0].discard1, Games.find(currentgame._id).fetch()[0]._id,1)
						var newdeck1 = Temp.find({gameId:currentgame._id}).fetch()[0].value
					
						if (Temp.find({gameId:currentgame._id}).fetch()[0].num==1){
						Games.update(currentgame._id,{$set:{deck1:newdeck1}})
						Games.update(currentgame._id,{$set:{discard1:[]}})	
						}
				}
			if (Games.find(currentgame._id).fetch()[0].deck2.length==0){
						Meteor.call("shuffle",Games.find(currentgame._id).fetch()[0].discard2, Games.find(currentgame._id).fetch()[0]._id,2)

						var newdeck2 = Temp.find({gameId:currentgame._id}).fetch()[0].value
					
						if (Temp.find({gameId:currentgame._id}).fetch()[0].num==2){
							Games.update(currentgame._id,{$set:{deck2:newdeck2}})
							Games.update(currentgame._id,{$set:{discard2:[]}})	
						}
					}
				}
				if (Games.find(currentgame._id).fetch()[0].deck1.length==0 && Games.find(currentgame._id).fetch()[0].discard1.length == 0){
					alert(Profile.find({userId:currentgame.user2}).fetch()[0].username+"won the game!")
					Game.remove(currentgame._id);
					Router.go('/games')
				}
				if (Games.find(currentgame._id).fetch()[0].deck2.length==0 && Games.find(currentgame._id).fetch()[0].discard2.length == 0){
					alert(Profile.find({userId:currentgame.user1}).fetch()[0].username+"won the game!")
					Game.remove(currentgame._id);
					Router.go('/games')
				}
		}
		

		
		
	
})