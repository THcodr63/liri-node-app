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

          console.log("@PokeBearOVRKILL: " + tweets[i].text + "\nCreated At: " + date.substring(20) + 1);

          console.log("+++++++++++++++++++++++");
          
        }
      }else{
        console.log("Error Will Robinson!!");
      }
    });
  }

  //Spotify
  function spotifyData() {
    spotify.search({type: "track", query: song}, function(err, data){
      if(!err){
        for(var i = 0; i < data.tracks.items.length; i++){
          var trackData = data.tracks.items[i];
         
          console.log("Artist: " + songData.artists[0].name);
        
          console.log("Song: " + songData.name);
         
          console.log("Preview Link: " + songData.preview_link);
        
          console.log("Album: " + songData.album.name);

          console.log("+++++++++++++++++++");
          
        }
      } else{
        console.log("Error Will Robinson!!");
      }
    });
  }

  //Movies needs to be finished and logged 