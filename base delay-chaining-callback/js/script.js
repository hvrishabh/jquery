// $(function test () {
//   $(".blue-box")
//     .animate(
//       {
//         "margin-left": "+=50px",
//       },
//       1000,
//       "swing"
//     )
//     .animate(
//       {
//         "margin-left": "-=50px",
//       },
//       1000
//     );
// });
//////////////////////////////////////////////////
$(function test2() {
  $(".blue-box").animate({
    "margin-left": "50px",
    "opacity": "0.4",
    "height": "50px",
    "width": "50px",
    marginTop: "25px",

  }, 1000)
});

//////////////////////////////////////////////////////////
// $(function () {
//   $("p").animate({
//     "font-size": "20px",
//     "opacity":"0.8"
//   },500)
// });
/////////////////////////////////////////////////////////////
// Animation delay... ................

// $(function () {
//   $(".red-box").delay(500).fadeTo(1000, 0.2);
//   $(".green-box").delay(1000).fadeTo(1000, 0.5);
//   $(".blue-box").delay(2000).fadeTo(1000, 0.8);

// });


/////////////////////////////////////////////////////////////
// Animation delay using the callback function


$(function () {
  $(".red-box").fadeTo(1000, 0, function () {
    alert("alert is called as callback");
  });
});

$(function () {
  $(".green-box").fadeOut(500, 0, function () {
    test2();
 })
});

$(function () {});
$(function () {});
$(function () {});
