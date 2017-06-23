Template.home.rendered = function() {
  $('html, body').css({
    "background-image": "url('http://i.imgur.com/u7AO4rY.png')",
  })
};

Template.home.destroyed = function() {
  $('html, body').css({
    "background-image": "none"
  })
};
