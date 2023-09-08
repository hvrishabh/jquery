$(function () {
  // JSON
  // .getJSON

  // {
  //   key: value; key2 : value
  // }

  var flickrApiUrl =
    "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON(flickrApiUrl, {
    // options ..
    tags: "sun,moon",
    tagmode: "any",
    format: "json",
  })
    .done(function (data) {
      // success
      // console.log(data)
      $.each(data.items, function (index, item) {
        console.log(item);
        $("<img>").attr("src", item.media.m).appendTo("#flicker");
        if (index == 4) {
          return false;
        }
      });
    })
    .fail(function () {
      // failure
      alert("ajax called failed");
    });
});
