var mongoose = require("mongoose");

// create a schema
var Schema = mongoose.Schema;

// create headlineSchema 
var headlineSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  summary: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// create Headline model using headlineSchema
var Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;
