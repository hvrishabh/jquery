$(function () {
  var gallery = $(".gallery");
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];
  gallery.data("availableImage", images);
  console.log(gallery.data("availableImage"))

  gallery.data("name", "the awesome Gallery");
  console.log(gallery.data("name"));
  console.log(gallery.data());

  gallery.removeData("name")
  console.log(gallery.data())
  console.log(gallery.data("name"))

  var firstPara = $("p:first")
  console.log(firstPara.data())
  console.log(firstPara.data("mydata"))
});

$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
