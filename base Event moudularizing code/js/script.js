$(function () {
  // event handling
  function logEvent() {
    console.log("mouse was clicked or key was pressed");
  }
  $("html").on("click keydown", logEvent);

  ////////////////////////////////////////////////////////

  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];
  var index = 0;

  function imageSlider() {
    index = (index + 1) % images.length;
    $(this).fadeOut(function () {
      $(this).attr("src", images[index]).fadeIn();
    });
  }
  $(".gallery").find("img").on("click", imageSlider);
});

$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
