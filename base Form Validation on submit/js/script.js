$(function () {


  // var form = $("#form");

  $("#form").submit(function (event) {
    var name = $("#name").val();
    var password = $("#password").val();
    var message = $("#message").val();
    var ischecked = $("#checkbox").is(":checked");

    validateNameField(name, event);
    validatePasswordField(password, event);
    validateMessageField(message, event);
    validCheckboxField(ischecked, event);
  });
});

function validateNameField(name, event) {
  if (!isValidName(name)) {
    $("#name-feedback").text("please enter atleast two characters");
    event.preventDefault();
  } else {
    $("#name-feedback").text("");
  }
}

function isValidName(name) {
  return name.length >= 2;
}

function validatePasswordField(password, event) {
  if (!isValidPassword(password)) {
    $("#password-feedback").text("please enter atleast 5 chars and a no");
    event.preventDefault();
  } else {
    $("#password-feedback").text("");
  }
}

function isValidPassword(password) {
  return password.length >= 5 && /.*[0-9].*/.test(password);
}

function validateMessageField(message, event) {
  if (!isValidMesssage(message)) {
    $("#message-feedback").text("message cant be left empty");
    event.preventDefault();
  } else {
    $("#message-feedback").text("");
  }
}

function isValidMesssage(message) {
  return message.trim() != "";
}

function validCheckboxField(ischecked, event) {
  if (!ischecked) {
    $("#checkbox-feedback").text("pls agree");
    event.preventDefault();
  } else {
    $("#checkbox-feedback").text("");
}
}
$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
