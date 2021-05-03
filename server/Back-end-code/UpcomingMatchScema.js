const { Schema, model } = require("mongoose");
const upcomingmatch = new Schema({
  match1: {
    type: String,
    required: true,
  },
  match2: {
    type: String,
    required: true,
  },
  m1Amount: {
    type: String,
    required: true,
  },
  m2Amount: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
  startdate: {
    type: String,
    required: true,
  },
  starttime: {
    type: String,
    required: true,
  },
});
const UpcomingMatchSchema = model("upcomingmatch", upcomingmatch);
module.exports = UpcomingMatchSchema;