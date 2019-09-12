// server.js

//NPM express package
var express = require("express");

var path = require("path");

// node is notified that an "express" server is created
var app = express();

// sets an initial port heroku will use its own port or localhost:8080 will be used
var PORT = process.env.PORT || 8080;

// express app will handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// server is pointed to these 2 rout files if the user visits or requests data from a URL
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// initiates server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});