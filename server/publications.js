//Meteor.publish("Numbers", function(){return Numbers.find();});
//Meteor.publish("Users", function(){return Users.find();});
Meteor.publish("Cards", function(){return Cards.find().fetch()})
Meteor.publish("Games", function(){return Games.find().fetch()})