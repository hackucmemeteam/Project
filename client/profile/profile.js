//Session auto updates the html, sets all to false so you cannot edit the prifile
Session.set("caneditusername",false);
Template.profile.rendered= function() {
	if (Profile.find({userId:Meteor.userId()}).fetch().length==0 && Meteor.userId()!= undefined){
		Profile.insert({username:Meteor.users.find({_id:Meteor.userId()}).fetch()[0].emails[0].address.split("@")[0],userId:Meteor.userId()})
	}
	$('html, body').css({
    "background-image": "url('http://i.imgur.com/yz868m1.png')",
  })
}
Template.profile.events({
	//allows the user to edit username
	'click #editusername':function(){
		
		Session.set("caneditusername",true);
		
	},
	//makes the user to unable edit username and saves it to the server
	'click #doneusername':function(){
		//pulls current profile
		var toinsert = Profile.find({userId:Meteor.userId()}).fetch()[0]
		//changes the username to whatever you changed it to
		toinsert.username= $("#newusername").val()
		//puts the new profile onto the server
		Profile.update({_id:toinsert._id},toinsert)
		//makes the user unable to edit
		Session.set("caneditusername",false)
	}


})
Template.profile.helpers({
	username:function(){
		//sends user username to the html
		return Profile.find({userId:Meteor.userId()}).fetch()[0].username
	},
	caneditusername:function(){
		//tells the html if you can edit the username
		return Session.get("caneditusername");
	},
	//creates the friend code
})

Template.profile.destroyed = function() {
  $('html, body').css({
    "background-image": "none"
  })
};