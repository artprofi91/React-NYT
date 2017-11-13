var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Article = require("./server/model");

var app = express();
var PORT = process.env.PORT || 8080; 

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function(error) {
  if (error) {
    console.log(error);
  }
  else {
    console.log("We are connected!");
  }
});


app.get("/api/saved", function(req, res) {

  Article.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

app.post("/api/saved", function(req, res) {
  var newArticle = new Article(req.body);
  console.log(req.body);
  newArticle.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.delete("/api/saved/", function(req, res) {
  var url = req.param("url");
  Article.find({ url: url }).remove().exec(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});
