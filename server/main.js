import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
Cards.remove({});
Games.remove({});
Profile.remove({});
var cardnames = ["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];
var suits = ["diamonds","clubs","hearts","spades"];
  for (var i = 0; i < 4; i++){
  	for(var j = 0; j < 13; j++){
  		Cards.insert({value:j+2, suit:i, imagename:cardnames[j]+"_of_"+suits[i]})
  	}
  }

});
