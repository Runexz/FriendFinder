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

        //for loop needed to loop through all the friends
        for (var i = 0; i < friends.length; i++) {
            var totalFriends = friends[i];
            
        }

        friends.push(req.body);
    });
}