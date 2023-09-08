$(function () {
  // event handling
  // $("p").click(function () {
  //   $(this).slideUp();
  // })
  // $("#content").append("<p>This is a dynamically added paragrahp. </p>")

  //Delegated Events
  $("#content").on("click", "p", function () {
    $(this).slideUp();

  });
  $("#content").append("<p>This is a dynamically added paragrahp. </p>")



  //////////////////////////////
  $("body").on("mouseenter", "li", function () {
    $(this).css("color", "orange");
  })
 
});


$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
