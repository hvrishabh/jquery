$(function () {
  // form events
  // var inputFields = $("input:text, input:password, textarea");
  // inputFields.focus(function () {
  //   $(this).css("box-shadow", "0 0 4px red");
  // });

  // inputFields.blur(function () {
  //   $(this).css("box-shadow", "0 0 4px green");
  // });

  ////////////////////////////////////////////////

  var inputText = $("input:text, textarea");
  // var inputLength = inputText.val().length;
  // console.log(inputLength);

  // if (inputLength < 3) {
  //   inputText.focus(function () {
  //     $(this).css("box-shadow", "0 0 8px red");
  //   });

  // }
  // if (inputLength >= 3) {
  //   inputText.focus(function () {
  //     $(this).css("box-shadow", "0 0 8px green");
  //   });
  // }

  inputText.keyup(function () {
    var inputLength = inputText.val().length;
    console.log(inputLength);
    if (inputLength< 5) {
      $(this).css("box-shadow", "0 0 8px red");
    }else{
      $(this).css("box-shadow", "0 0 8px green");
    }
  });
});

$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
