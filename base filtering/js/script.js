$(function () {
  // $("#list").find("li").filter(":even").css("background", "yellow");

  // $("#list").children("li").filter(":even").css("background", "yellow");

//   $("li")
//       .filter(function (index) {
//           return index % 3 === 1;
//     })
//     .css("background", "yellow");


//   $("li").filter(":first").css("background", "yellow");
//   $("li").first().css("background", "yellow");
//   $("li").last().css("background", "yellow");

//   $("li").eq(5).css("background", "yellow");    // The eq() is used to pass the equivalent index value to select a sepcific value
//   $("li").eq(-4).css("background", "yellow");

    // $("li").not(":even").css("background", "yellow");
    // $("li").not(":first").css("background", "yellow");
    $("li").not(function (index) {
        return index % 3 === 0;
    }).css("background", "yellow");


});

//////////////////////////////////////////////////

// $(function () {});

/////////////////////////////////////////////////////////////

// $(function () {});
// $(function () {});
// $(function () {});
