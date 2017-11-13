var router = require("express").Router();

// renders the homepage
router.get("/", function(req, res) {
  res.render("home");
});

// renders the saved handledbars page
router.get("/saved", function(req, res) {
  res.render("saved");
});

module.exports = router;
