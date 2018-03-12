var $buttonTarget = $("#button-target");
var $gifTarget = $("#gif-target");

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
$buttonTarget.append(buttonDiv);

$(document).on("click", ".gif-button", function(){
    //construct query URL
    var baseURL = "https://api.giphy.com/v1/gifs/search";//giphy search API endpoint
    var params = $.param({
        api_key: "fuu2Wu6FmADeffdF7V1cHgBhCBw2VBQA",
        q : $(this).text(),
        //limit : 10,
    });
    //alernately: baseURL+"?"+"api_key=fuu2wetcetc"+"&"+"q=searchterms"+"&".... etc etc
    var queryURL = `${baseURL}?${params}`;
    //hit the giphy search API
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        $gifTarget.empty();
        console.log(response);
        for(var i = 0; i < response.data.length; i++){
            var newGif = $("<img class='gif' data-state='still'>");
            newGif.attr("data-still", response.data[i].images["fixed_height_small_still"].url);
            newGif.attr("data-play", response.data[i].images["fixed_height_small"].url);
            newGif.attr("src", newGif.attr("data-still"));
            $gifTarget.append(newGif);
        }
    });

    //newGif.attr("src", response.data[i].images["fixed_height_small"].url);
});

$(document).on("click", ".gif", function(){
    $this = $(this);
    if($this.attr("data-state") === "still"){
        $this.attr("data-state", "play");
        $this.attr("src", $this.attr("data-play"));
    } else {
        $this.attr("data-state", "still");
        $this.attr("src", $this.attr("data-still"));
    }
});
