// $(function () {
//     $("ul ul:first").append("<li>I'm gonna be the last sub-item</li>");

//     $("<li>I'm gonna be the last item </li>").appendTo($("ul ul:first"));

//     $("ul ul:first").prepend("<li>I'm gonna be the first sub-item</li>");

//     $("<li>I'm gonna be the first item </li>").prependTo($("ul ul:first"));

//     $("ul ul").prepend("<li>I'm gonna be the first sub-item</li>");

//     $("<h1>I'm Hitesh . </h1>").prependTo($("#content"));
// });

///////////////////////////////////////////////////

// $(function () {

//     // $(".red-box").after("<div class='red-box'> Another Red </div>") // this is a sibling element not a child or parent element

//     $(".blue-box").before("<div class='blue-box'> Another Blue </div>")
// });

///////////////////////////////////////////////////////

// $(function () {
//     $(".blue-box").before(function () {
//         return "<div class='blue-box'> Another Blue 2</div>"
//         // return $("p");
//     })

// });
////////////////////////////////////////////////////////////

$(function () {
  // $(".blue-box").before($(".red-box"));   // the element has moved rather than adding a new element
  // $(".blue-box").after($("p"));

  $("p").after($("#list")); // the element has copied to each para tag

  //   $(".red-box").before($("<div class='red-box'> Another Blue </div>"));
  //   $(".blue-box").before($("<div class='blue-box'> Another Blue </div>"));
  //   $(".green-box").before($("<div class='green-box'> Another Blue </div>"));
});

$(function () {
  $(".red-box, .green-box, .blue-box").after(function () {
    return $(this).clone();
  });
});
