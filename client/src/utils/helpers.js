import axios from "axios";
var APIKey = "e90e5f67cde643a6af6ae8938e31ee1e";

const helpers = {

  // run query
  runQuery: function(term, start, end) {

    // search terms in proper format
    var formattedTerm = term.trim();
    var formattedStart = start.trim() + "0101";
    var formattedEnd = end.trim() + "1231";

    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": APIKey,
        "q": formattedTerm,
        "begin_date": formattedStart,
        "end_date": formattedEnd
      }
    })
    .then(function(results) {
      return results.data.response;
    });
  },
  // return saved articles from db
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        return results;
      });
  },
  // save new articles to db
  postSaved: function(title, date, url) {
    var newArticle = { title: title, date: date, url: url };
    return axios.post("/api/saved", newArticle)
      .then(function(response) {
        return response.data._id;
      });
  },
  // remove article from db
  deleteSaved: function(title, data, url) {
    return axios.delete("/api/saved", {
      params: {
        "title": title,
        "data": data,
        "url": url
      }
    })
    .then(function(results) {
      return results;
    });
  }
};

export default helpers;