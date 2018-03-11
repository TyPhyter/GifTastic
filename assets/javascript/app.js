var topics = [
    "adventure time",
    "spongebob squarepants",
    "rick and morty",
];
//generate div to hold butotns
var buttonDiv = $("<div></div>");
//for every topic, create a button with the index data attribute and the topic text, append to buttonDiv
for (var i = 0; i < topics.length; i++){
    var newButton = $(`<button class="gif-button" data-index=${i}>${topics[i]}</button>`);
    buttonDiv.append(newButton);
}
//append buttonDiv to target div
$("#buttons-target").append(buttonDiv);

$(document).on("click", ".gif-button", function(){
    var baseURL = "https://api.giphy.com/v1/gifs/search";//giphy search API endpoint
    var params = $.param({
        api_key: "fuu2Wu6FmADeffdF7V1cHgBhCBw2VBQA",
        q : $(this).text(),
        limit : 10,
    });
    var queryURL = `${baseURL}?${params}`;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);
    });
});
