var express = require("express");
var routes = require("./routes");
var azure = require("azure");
var app = express();
var port = process.env.PORT || 8081;

app.use(express.static(__dirname + '/public'));

routes.registerRoutes(app);

app.listen(port, function() {
    console.log("app listening on port: " + port)
});