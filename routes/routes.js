var headlinesController = require("../controllers/headlines");
var notesController = require("../controllers/notes");

module.exports = function(router) {
  router.get("/", function(req, res) {
    res.render("home");
  });

  router.get("/saved", function(req, res) {
    res.render("saved");
  });

  // scrap+save uniques articles in DB
  router.get("/api/fetch", function(req, res) {
    
    headlinesController.fetch(function(err, docs) {
      // if no unique articles
      if (!docs || docs.insertedCount === 0) {
        res.json({
          message: "No new articles today. Check back tomorrow!"
        });
      }
      else {
        // how many new articles
        res.json({
          message: "Added " + docs.insertedCount + " new articles!"
        });
      }
    });
  });

  // get all headlines from DB
  router.get("/api/headlines", function(req, res) {
    headlinesController.get(req.query, function(data) {
      res.json(data);
    });
  });

  // delete headline
  router.delete("/api/headlines/:id", function(req, res) {
    var query = { _id: req.params.id };
    headlinesController.delete(query, function(err, data) {
      res.json(data);
    });
  });

  // update headline
  router.put("/api/headlines", function(req, res) {
    headlinesController.update(req.body, function(err, data) {
      res.json(data);
    });
  });

  // get note
  router.get("/api/notes/", function(req, res) {
    notesController.get({}, function(err, data) {
      res.json(data);
    });
  });

  router.get("/api/notes/:headline_id", function(req, res) {
    var query = { _id: req.params.headline_id };
    notesController.get(query, function(err, data) {
      res.json(data);
    });
  });

  // delete note
  router.delete("/api/notes/:id", function(req, res) {
    var query = { _id: req.params.id };
    notesController.delete(query, function(err, data) {
      res.json(data);
    });
  });

  // save note
  router.post("/api/notes", function(req, res) {
    notesController.save(req.body, function(data) {
      res.json(data);
    });
  });
};
