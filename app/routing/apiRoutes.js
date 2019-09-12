// apiRoutes.js

// link route to data source friends.js
var friends = require("../data/friends")

module.exports = function (app) {

    // api GET requests code handles when the user visit a link they are shown a JSON of data in the table
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //api POST requests, when user submits a form with data to the server as a JSON object it is saved to friends array
    app.post("/api/friends", function (req, res) {

        // Function stuff here
        // create variable that will fill in with best match
        var topMatch = {
            name: "",
            photo: "",
            difference: 20
        };

        //create variables to link to server api
        var newFriends = req.body;
        var newName = req.body.newName;
        var newPhoto = req.body.newPhoto;
        var newScores = req.body.scores;
        var startDif = 0;


        //for loop needed to loop through all the friends
        for (var i = 0; i < friends.length; i++) {
            var totalFriends = friends[i];
            startDif = 0;

            // second loop needed to compare new friend score to the friend data
            for (var j = 0; j < totalFriends.scores.length; j++) {
                var totalFriends2 = totalFriends.scores[j];

                //math.abs is the absolute difference between friend and new friend and adds to startDif
                startDif += Math.abs(totalFriends2 - newScores[j]);

                if (startDif < topMatch.difference) {
                    topMatch.name = totalFriends.name;
                    topMatch.photo = totalFriends.photo;
                    topMatch.difference = startDif;
                }

            }
        }

        friends.push(newFriends);
        res.json(topMatch);
    });
}