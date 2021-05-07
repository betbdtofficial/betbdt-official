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
  title1:{
    type: String,
    required: true
  },
  value1:{
    type: String,
    required: true
  },
  v1Amount:{
    type: String,
    required: true
  },
  value2:{
    type: String,
    required: true
  },
  v2Amount:{
    type: String,
    required: true
  },
  title2:{
    type: String,
    required: true
  },
  value3:{
    type: String,
    required: true
  },
  v3Amount:{
    type: String,
    required: true
  },
  value4:{
    type: String,
    required: true
  },
  v4Amount:{
    type: String,
    required: true
  },
  title3:{
    type: String,
    required: true
  },
  value5:{
    type: String,
    required: true
  },
  v5Amount:{
    type: String,
    required: true
  },
  value6:{
    type: String,
    required: true
  },
  v6Amount:{
    type: String,
    required: true
  },
  title4:{
    type: String,
    required: true
  },
  value7:{
    type: String,
    required: true
  },
  v7Amount:{
    type: String,
    required: true
  },
  value8:{
    type: String,
    required: true
  },
  v8Amount:{
    type: String,
    required: true
  },
  title5:{
    type: String,
    required: true
  },
  value9:{
    type: String,
    required: true
  },
  v9Amount:{
    type: String,
    required: true
  },
  value10:{
    type: String,
    required: true
  },
  v10Amount:{
    type: String,
    required: true
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