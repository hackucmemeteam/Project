Template.games.events({
	'click #create':function(){
		if (Profile.find({userId:Meteor.userId()}).fetch().length==0 && Meteor.userId()!= undefined){
			Profile.insert({username:Meteor.users.find({_id:Meteor.userId()}).fetch()[0].emails[0].address.split("@")[0],userId:Meteor.userId()})
		}
		var currentgame;
		if (Games.findOne({user1:Meteor.userId()})!=undefined){
			//console.log(Games.findOne({user1:Meteor.userId()}).type=="War")
			currentgame = (Games.find({user1:Meteor.userId()}).fetch())

		}
		else if (Games.findOne({user2:Meteor.userId()})!= undefined){
			currentgame = (Games.find({user2:Meteor.userId()}).fetch())
		}
		else if (Games.findOne({user3:Meteor.userId()})!= undefined){
			currentgame = (Games.find({user3:Meteor.userId()}).fetch())
		}
		else {
			currentgame = (Games.find({user4:Meteor.userId()}).fetch())
		}
		for (var i = 0; i < currentgame.length; i++){
			Games.remove({_id:currentgame[i]._id});
		}
		var id = Games.insert({type:$("#type").val(),size:$("#players").val(),user1:Meteor.userId(),discard1:[],discard2:[]})
		var gamecode = id.split("");
		gamecode[6] = "/";
		gamecode = gamecode.join("").split("/")[0]
		Games.update(id,{$set:{gamecode:gamecode}})

		Router.go("/games/"+id);
	},
	'click #join':function(){
	
  		if (Profile.find({userId:Meteor.userId()}).fetch().length==0 && Meteor.userId()!= undefined){
			Profile.insert({username:Meteor.users.find({_id:Meteor.userId()}).fetch()[0].emails[0].address.split("@")[0],userId:Meteor.userId()})
		}
  	
  
		var game = Games.findOne({gamecode:$(joincode).val()})
		if (game==undefined){
			alert("Invalid Code")
		}
		else{
			if (game.user2 == undefined){
				Games.update(game._id,{$set:{user2:Meteor.userId()}})
				Router.go("/games/"+game._id);
			}
			else if(game.user3 == undefined){
				
				if (game.size < 3){
					alert("Game is Full")
				}
				else{
					Games.update(game._id,{$set:{user3:Meteor.userId()}})
					Router.go("/games/"+game._id);
				}
			}
			else if(game.user4 == undefined){
				if (game.size < 4){
					alert("Game is Full")
				}
				else{
					Games.update(game._id,{$set:{user4:Meteor.userId()}})
					Router.go("/games/"+game._id);
				}
			}
		}
	}

})

Template.games.rendered = function() {
  $('html, body').css({
    "background-image": "url('http://i.imgur.com/1ya6DPX.png')",
  })

};

Template.games.destroyed = function() {
  $('html, body').css({
    "background-image": "none"
  })

};