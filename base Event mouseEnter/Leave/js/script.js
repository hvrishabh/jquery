$(function () {
  // event handling
  $("#btn-hover").hover(function () {
    alert("the button was hovered");
  });

  $(".green-box").hover(function () {
    $(this).text("the green box was hovered");
  });

  var blueBox = $(".blue-box");
  blueBox.mouseenter(function () {
    // $(this).text("the blue box was hovered");
    // $(this).stop().fadeTo(1000, 0.7);
  });
  blueBox.mouseleave(function () {
    // $(this).stop().fadeTo(1000, 1);
  });


  // hover(handlerIn , handlerOut)

  blueBox.hover(
    function () {
      $(this).stop().fadeTo(1000, 0.7);
    },
    function () {
      $(this).stop().fadeTo(1000, 1);
    }
  );
});

$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
