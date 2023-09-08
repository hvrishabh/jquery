$(function () {


  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  var i = 0;
  setInterval(function () {
    i = (i + 1) % images.length; // 0,1,2,0,1,2,0............
    galleryImage.fadeOut(2000,function () {
      $(this).attr("src", images[i]);
      $(this).fadeIn(3000);
    });
    console.log(galleryImage.attr("src"))
  },2000)

});



$(function () {


  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())


});