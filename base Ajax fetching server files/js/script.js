$(function () {
  // $.get() , $.post(), $.ajax(), $.getJSON()
// fetching a file using jQuery

  // $.load()
  // it is designed to retirve files from our own servers
  // eg script or html files


  $("#code").load("js/script.js");

  $("#code").load("js/script.js", function (response,status) {
    if (status == "error") {
      alert("could not findontexist.php")
    }
    console.log(response)
    console.log(status);
  })
})