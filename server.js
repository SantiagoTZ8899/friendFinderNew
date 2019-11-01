//  npm packages required
let express = require("express");

let path = require("path");

// set up express server and port

let app = express();
let PORT = process.env.port || 8080;

app.use(express.urlencoded({ extended: true }));
// app.use(express.static( "app/public" ));
app.use(express.json());

// routes for navigating the server directories or something
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener to start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
//changes