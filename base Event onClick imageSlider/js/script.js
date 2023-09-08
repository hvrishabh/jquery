$(function () {
  // event handling
  // .on("click",function(){ ... })
  $("html").on("click keydown", function () {
    console.log("mouse was clicked and key was pressed");
  });




  // var i = 0;
  // setInterval(function () {
  //   i = (i + 1) % images.length; // 0,1,2,0,1,2,0............
  //   galleryImage.fadeOut(2000,function () {
  //     $(this).attr("src", images[i]);
  //     $(this).fadeIn(3000);
  //   });
  //   console.log(galleryImage.attr("src"))
  // },2000)



var images = [
  "images/laptop-mobile_small.jpg",
  "images/laptop-on-table_small.jpg",
  "images/people-office-group-team_small.jpg",
  ];
  var index = 0;

  $(".gallery").find("img").on("click", function () {
    index = (index + 1) % images.length;
    $(this).fadeOut(function () {
      $(this).attr("src", images[index]).fadeIn()
    })
  })

});

$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
