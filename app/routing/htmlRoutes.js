let path = require("path");

// routes to navigate between html pages
module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
// default to home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
        //updated
    });
};