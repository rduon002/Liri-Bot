require("dotenv").config();

// code required to import the `keys.js` file 

//store it in a variable

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//Show your last 20 tweets
function twitter(inputs) {
	var params = {screen_name: inputs, count: 20};
	
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if (!error) {
				for (i = 0; i < tweets.length; i ++){
					console.log("Tweet: " + "'" + tweets[i].text + "'" + " Created At: " + tweets[i].created_at);
				}
			} else {
				console.log(error);
			}
		});

}
//Default input "Mr.Nobody" 

//Text in terminal: 
    //If you haven't watched "Mr. Nobody," then you should: 
    //<http://www.imdb.com/title/tt0485947/>
    //It's on Netflix!

//take the text inside of random.txt
//Call Liri commands