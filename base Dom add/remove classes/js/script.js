$(function () {
  $("a").addClass("fancy-link");
  $("p:first").addClass("large emphise");

  $("li li").addClass(function (index) {
    $(this).addClass("item-" + index);
  });

  $("div").addClass(function (index, currentClass) {
    if (currentClass === "dummy") {
      return "red-box";
    }
  });


  $(".red-box").removeClass("red-box").addClass("green-box");

  $(".blue-box, .dummy").removeClass("dummy blue-box").addClass("green-box")
});

$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
