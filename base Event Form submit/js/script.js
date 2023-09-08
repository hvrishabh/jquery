$(function () {
  $("#form").submit(function (event) {
    var textarea = $("#message")
    if (textarea.val().trim() == "") {
      textarea.css("box-shadow", "0 0 4px #811");
      event.preventDefault();
    } else {
      // form will be submitted
    }
})
});

$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
