require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require ("fs");

var Spotify = require('node-spotify-api');
var spotify = new spotify(keys.spotify);

var whatToDo = process.argv[2];
var userInput = process.argv[3];




// continue all packages here