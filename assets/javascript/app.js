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
    alert("button clicked");
});
