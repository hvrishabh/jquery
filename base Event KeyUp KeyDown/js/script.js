$(function () {
  // keypress() - EVIL !

  $("html").keydown(function (event) {
    console.log(event.which);
    var arrow = 39;
    var arrowLeft =37

    if (event.which == arrow) {
      $(".blue-box").stop().animate({ marginLeft: "+=10px" }, 50);
    } if (event.which == arrowLeft) {
      $(".blue-box").stop().animate({ marginLeft: "-=10px" }, 50);
    }
  });
});

$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
