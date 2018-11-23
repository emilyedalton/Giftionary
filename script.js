$(document).ready(function () {
usertext = "";
var shortDef= "";
var etm= "";
var term ="";
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
var shortDef= response[0].shortdef[0];
var etm= response[0].et;
var term = response[0].hwi.hw; 


$("#wordPlace").append(`<div><p> ${term}</p><div><p>${shortDef}</p> <div> <p>${etm}</p>`);
    });
  });

}


function getGIF (){
  $("#word-form").submit(function(e) {
    event.preventDefault();
  alert("i am clicked");
var usertext =$("#word-input").val();
  console.log("hello");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  usertext + "&api_key=ZgSjtsjt3JvDb8oe215Oo2PRzvpJDXoG&limit=12";

 //create AJAX call 
 $.ajax({
  url: queryURL,
  method: "GET"
}) .then(function(response) {
    var results = response.data;
//iterating through each of the gifs returned from the API and creating a DIV for them
    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div>").addClass("gifStyle");

//storing the rating
      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      var cityImage = $("<img>");
      cityImage.attr("src", results[i].images.fixed_height_still.url);
      cityImage.attr('data-still', results[i].images.fixed_height_still.url);
      cityImage.attr('data-animate', results[i].images.fixed_height.url);
      cityImage.attr('data-state', "still",results[i].images.fixed_height_still.url);  
      cityImage.addClass("gif",results[i].images.fixed_height_still.url)
     
      gifDiv.prepend(p);
      gifDiv.prepend(cityImage);

      
    



      $("#GIFPlace").prepend(gifDiv);
    }
    });  
  }); 
  }



  
  getWord();
  
  getGIF();  
  console.log("hello");
});


// });
