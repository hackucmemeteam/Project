Meteor.methods({
	shuffle:function(deck,gameId,num){

		var shuffledeck = deck;
		var i = 0;
    	var j = 0;
     	var temp = null;

     	for (i = shuffledeck.length - 1; i > 0; i -= 1) {
    		j = Math.floor(Math.random() * (i + 1));
    		temp = shuffledeck[i];
    		shuffledeck[i] = shuffledeck[j];
    		shuffledeck[j] = temp;
  		}
  		Temp.remove({gameId:gameId})
  		Temp.insert({gameId:gameId,value:shuffledeck,num:num});
	},




})




