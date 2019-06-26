require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require ("fs");

var Spotify = require('node-spotify-api');
var spotify = new spotify(keys.spotify);

var whatToDo = process.argv[2];
var userInput = process.argv[3];

function spotifyThis(){
    // go to npm spotify and copy paste the function and var info add limit if you want 1-10
    spotify
        .search({ type: 'track', query: userInput, limit: 5 })
        .then(function)

}

switch (whatToDo){
    case "spotify-this-song":
        spotifyThis()
        break;

    case "concert-this":
        concertThis()
        break;

    case "movie-this":
        movieThis()
        break;

    case "do-what-it-says":
        doWhatItSays()
        break;


}



// continue all packages here