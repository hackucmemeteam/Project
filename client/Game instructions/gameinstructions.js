Template.gameinstructions.rendered = function() {
  $('html, body').css({
    "background-image": "url('http://i.imgur.com/hjYbQmK.png')",
  })
};

Template.gameinstructions.destroyed = function() {
  $('html, body').css({
    "background-image": "none"
  })
};