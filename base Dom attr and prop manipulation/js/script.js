$(function () {
  // attr(), prop(), val()

  var specialLink = $("#special-link");
  console.log(specialLink.attr("href"));
  // console.log(specialLink.attr("title"));

  specialLink.attr("href","https://google.com")
  console.log(specialLink.attr("href"));    // for changing the attribute href dynamically


  // checked , selected, disabled are the properties that dont require a value to work.

//
  var checkbox = $("input:checkbox");
  console.log(checkbox.prop("checked"));  // it will be return the current value
  console.log(checkbox.attr("checked"));  // it will always be checked


  var textInput = $("input:text");
  textInput.val(textInput.val())
  console.log(textInput.val())

  var rangeInput = $("input[type='range']");
  console.log(rangeInput.val())

  var emailInput = $("input[type='email']");
  console.log(emailInput.val())



  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())


});
