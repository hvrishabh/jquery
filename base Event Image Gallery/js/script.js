$(function () {

  var galleryItems = $(".gallery").find("img");
  galleryItems.css("width","33%").css("opacity",".7")

  galleryItems.mouseenter(function () {
    $(this).stop().fadeTo(500, 1);
  })
  galleryItems.mouseleave(function () {
    $(this).stop().fadeTo(500, .7);
  })

  galleryItems.click(function () {
    var source = $(this).attr("src");
    var image = $("<img>").attr("src", source).css("width", "100%")

    $(".lightbox").empty().append(image).fadeIn(2000)

    $(".lightbox").click(function () {
      $(this).stop().fadeOut(500);
    })
  })

});

$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
