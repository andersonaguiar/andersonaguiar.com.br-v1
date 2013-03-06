$(window).load(function(){
    $("#page").css('height',($(window).height()-5)+"px");
    $("#overlay").remove();
});

$(window).resize(function(){
    $("#page").css('height',($(window).height()-5)+"px");
});

// Edit to suit your needs.
var ADAPT_CONFIG = {
  // Where is your CSS?
  path: 'css/960gs/',
  
  //callback: adjust,

  // false = Only run once, when page first loads.
  // true = Change on window resize and page tilt.
  dynamic: true,

  // First range entry is the minimum.
  // Last range entry is the maximum.
  // Separate ranges by "to" keyword.
  range: [
  '0px    to 720px  = mobile.min.css',
  '720px  to 980px  = 720.min.css',
  '980px  to 1280px = 960.min.css',
  '1280px to 1600px = 1200.min.css',
  '1600px to 1940px = 1560.min.css',
  '1940px to 2540px = 1920.min.css',
  '2540px           = 2520.min.css'
  ]
};
  

$(function() {
    $("#overlay").css('height',($(window).height()));
});
