$(function () {

  $(".gallery").css("display", "none")   //.hide()

  var redBox = $(".red-box");
  console.log(redBox.css("width"));  // it will also return unit px, rem , em
  console.log(redBox.width()); //it will only return the numeric value
  console.log(redBox.height());

  redBox.css("background-color", "orange");
  $("p").css("font-size", "20px");

  redBox.css("width", "+=20px");
  redBox.css("width", "-=20px");

  var properties = $("p").css(["font-size", "line-height", "color"])
  console.log(properties);
  console.log(properties["color"]);


  redBox.css("user-select", "none");    //it makes the text selection to restricted mode.



  redBox.css("user-select", function () {
    return none;
  });


});



$(function () {


  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())


});