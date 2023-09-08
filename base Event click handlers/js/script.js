$(function () {
 // event handling

  $("#btn-click").click(function (event) {
    console.log(event);
    alert("Button Was Clicked")
  });

  $(".red-box").click(function () {
    $(this).fadeTo(1000,.5);
  })

  // we can also trigger the click function
  $(".red-box").click();



});

$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
