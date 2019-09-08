// htmlRoutes.js

// node path package needed to get the correct file path for our html
var path = require("path");

module.exports = function (app) {

    //if /survey is entered then survey.html is shown
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}
