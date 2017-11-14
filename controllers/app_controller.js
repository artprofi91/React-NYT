var express = require("express");

// require article schema
var Article = require("../models/Article");
var app = express();

// redirect the user to rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// route will send GET requests to retrieve most recent search data
app.get("/api", function(req, res) {

  // find all the records, sort it in descending order, then limit the records to 5
  Article.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// route will send POST requests to save each search
app.post("/api", function(req, res) {
  console.log("BODY: " + req.body._id);

  // save the article based on the JSON input
  Article.create({
    title: req.body.title,
    snippet: req.body.snippet,
    url: req.body.url,
    pub_date: req.body.date,
    art_id: req.body.art_id,
    date: Date.now()
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});


app.post("/api/delete", function(req, res) {
    console.log(req.body);
    Article.remove({ _id: req.body._id}, function(err) {
        if (!err) {
            res.send("Deleted!");
        } else {
            console.log(err);
        }
    });

});

module.exports = app;

