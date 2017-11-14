var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

var routes = require("./controllers/app_controller.js");
app.use("/", routes);

var databaseUri = 'mongodb://localhost/mernNewsDb';

if (process.env.MONGODB_URI) {
  // this executes if being executed in Heroku App
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}


// locally run
var db = mongoose.connection;
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Listen on port 8080
var PORT = process.env.PORT || 8080; 
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});

