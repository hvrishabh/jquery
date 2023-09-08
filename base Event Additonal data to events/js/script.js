$(function () {
  $("#btn-click").click(
    {
      user: "peter",
      domain: "petersommerhoff.com",
    },
    function (event) {
      console.log(event);
      greetUser(event.data);
    }
  );

  function greetUser(userdata) {

    username = userdata.user || "Anonymous";
    domain = userdata.domain || "example.com";
    alert("Welcome back " + username + "!" + " And the domain is " + domain);
  }
});

$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
