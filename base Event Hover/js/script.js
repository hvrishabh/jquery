$(function () {
  // event handling
  $("#btn-hover").hover(function () {
    alert("the button was hovered");
  });

  $(".green-box").hover(function () {
    $(this).text("the green box was hovered");
  });
});

$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
