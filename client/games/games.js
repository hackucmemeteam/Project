Template.games.events({
	'click #create':function(){
		console.log("it got to here");
		var id = Games.insert({type:$("#type").val(),size:$("#players").val(),user1:Meteor.userId()})
		Router.go("/games/"+id);
	},
})