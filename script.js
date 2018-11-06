$(document).ready(function () {
usertext = "";
    
function getWord(){
  usertext = $("#word-form").submit(function(e) { // change # to .
    var usertext = $("#word-input").val(); // you should have #input_name
    console.log("this is the usertext " + usertext);

    $('#p').text(usertext); // text function takes value as parameter
    e.preventDefault();  var queryURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + usertext + "?key=afc7c827-8f7f-4a2e-9e2d-fe20474a337b";
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
console.log(response);
$("#wordPlace").html(response[0].shortdef[0]);
    });
  });
}
  getWord();
  // wordSubmit();
  
});
