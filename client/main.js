import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return 11;
  }
});
Template.usernames.helpers({
	Users:function(){
  	return Users.find().fetch()
  }
})
Template.usernames.events({
	'click #usernametext'(event,instance){
		Users.remove({_id:this._id});
	}
})
Template.hello.events({
  'click #clickButton'(event, instance) {
    // increment the counter when button is clicked

    instance.counter.set(instance.counter.get() + 1);

    var input = $('#userInput').val();
    Users.insert({username:input});
    $('#userInput').val("");
  },
});
