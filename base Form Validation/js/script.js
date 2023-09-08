$(function () {
  var form = $("#form");
  enableFastFeedback(form);

  form.submit(function (event) {
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

function enableFastFeedback(formElement) {
  var nameInput = formElement.find("#name");
  var passwordInput = formElement.find("#password");
  var messageInput = formElement.find("#message");
  var checkboxInput = formElement.find("#checkbox");

  nameInput.blur(function () {
    var name = $(this).val();
    validateNameField(name, event);
    if (!isValidName(name)) {
      $(this).css({ "box-shadow": "0 0 8px #811", border: "1px solid #600" });
      // event.preventDefault();
    } else {
      $(this).css({ "box-shadow": "0 0 8px #181", border: "1px solid #060" });
    }
  });

  passwordInput.blur(function () {
    var password = $(this).val();
    validatePasswordField(password, event);
    if (!isValidPassword(password)) {
      $(this).css({ "box-shadow": "0 0 8px #811", border: "1px solid #600" });
    } else {
      $(this).css({ "box-shadow": "0 0 8px #181", border: "1px solid #060" });
    }
  });

  messageInput.blur(function () {
    var message = $(this).val();
    validateMessageField(message, event);
  });

  checkboxInput.blur(function () {
    var ischecked = $(this).is(":checked");
    validCheckboxField(ischecked, event);
  });
}

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
    $("#form #message").css({
      "box-shadow": "0 0 8px #811",
      border: "1px solid #600",
    });
    event.preventDefault();
  } else {
    $("#form #message").css({
      "box-shadow": "0 0 8px #181",
      border: "1px solid #060",
    });
    $("#message-feedback").text("");
  }
}

function isValidMesssage(message) {
  return message.trim() != "";
}

function validCheckboxField(ischecked, event) {
  if (!ischecked) {
    $("#checkbox-feedback").text("pls agree");
    $("#form #checkbox").css({
      "box-shadow": "0 0 8px #811",
      border: "1px solid #600",
    });
    event.preventDefault();
  } else {
    $("#checkbox-feedback").text("");
    $("#form #checkbox").css({
      "box-shadow": "0 0 8px #181",
      border: "1px solid #060",
    });
  }
}
$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
