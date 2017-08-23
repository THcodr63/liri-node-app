var keys = require("keys.js");
var myTweets = require("my-tweets.js");
var spotifyThis = require("spotify-this-song.js");
var movieThis = require("movie-this.js");
var doWhatItSays = require("do-what-it-says.js");
var m = ("");


switch(command) {
    case "my-tweets":
      twitterData();
    break;
  
    case "spotify-this-song":
      if(m){
        spotifyData(m);
      } 
      else{
        spotify("The Sign");
      }
    break;
  
    case "movie-this":
      if(m){
        omdbData(m)
      } else{
        omdbData("Mr. Nobody")
      }
    break;
  
    case "do-what-it-says":
      doSays();
    break;
  };


  //Twitter
  function twitterData(){
    var screenName = {screen_name: "PokeBearOVRKILL"};
    client.get("statuses/user_timeline", screenName, function(err, tweets, response){
      if(!err){
        for(var i = 0; i < tweets.length; i++){
            var date = tweets[i].created_at;
          console.log("@PokeBearOVRKILL: " + tweets[i].text + " Created At: " + date.substring(0, 19));
          console.log("+++++++++++++++++++++++");
          
        }
      }else{
        console.log('Error occurred');
      }
    });
  }

  //Spotify


  //Movies