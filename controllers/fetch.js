var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    // scrape the NYT
    return scrape()
      .then(function(articles) {
        // then insert articles into the db
        return db.Headline.create(articles);
      })
      .then(function(dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: "No new articles."
          });
        }
        else {
          // how many new articles
          res.json({
            message: "Added " + dbHeadline.length + " new articles!"
          });
        }
      })
      .catch(function(err) {
        // error after inserting the others articles (not duplicate)
        res.json({
          message: "Scrape complete!"
        });
      });
  }
};
