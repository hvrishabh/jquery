$(function () {

  $("#checkbox").change(function () {
    // .prop("checked")
    var isChecked = $(this).is(":checked");
    if (isChecked) {
      $(this).add("label[for='cb']").css("box-shadow", " 0 0 8px #181");
    } else {
      $(this).add("label[for='cb']").css("box-shadow", " 0 0 8px #811");
    }
  });


  $("#selection").change(function () {
    var isSelected = $(this).find(":selected").text()
    if (isSelected) {
      alert(isSelected)
    }
  })

});

$(function () {
  // var emailInput = $("input[type='email']");
  // var textInput = $("input:text");
  // emailInput.val(textInput.val()+'@gmail.com');
  // console.log(textInput.val())
});
