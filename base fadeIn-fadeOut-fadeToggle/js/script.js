$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $("div.red-box").fadeOut(2000);
  // // $(".green-box").fadeOut(2000);
  // $(".red-box").fadeIn(1000);


});

// $(function () {
//   $("div.test").fadeOut(5000);
// });


$(function () {
  $(".red-box").fadeTo(1000,0.2);
  $(".green-box").fadeTo(1000,0.4);
  $(".blue-box").fadeTo(1000, 0.6);
  // fadeToggle
  $(".blue-box").fadeToggle();
  $(".blue-box").fadeToggle();
});

