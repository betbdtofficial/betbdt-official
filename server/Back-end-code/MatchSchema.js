const { Schema, model } = require("mongoose");
const matchSchema = new Schema({
  match1: {
    type: String,
  },
  match2: {
    type: String,
  },
  m1Amount: {
    type: String,
  },
  m2Amount: {
    type: String,
  },
  title1:{
    type: String,
  },
  value1:{
    type: String,
  },
  v1Amount:{
    type: String,
  },
  value2:{
    type: String,
  },
  v2Amount:{
    type: String,
  },
  title2:{
    type: String,
  },
  value3:{
    type: String,
  },
  v3Amount:{
    type: String,
  },
  value4:{
    type: String,
  },
  v4Amount:{
    type: String,
  },
  title3:{
    type: String,
  },
  value5:{
    type: String,
  },
  v5Amount:{
    type: String,
  },
  value6:{
    type: String,
  },
  v6Amount:{
    type: String,
  },
  title4:{
    type: String,
  },
  value7:{
    type: String,
  },
  v7Amount:{
    type: String,
  },
  value8:{
    type: String,
  },
  v8Amount:{
    type: String,
  },
  title5:{
    type: String,
  },
  value9:{
    type: String,
  },
  v9Amount:{
    type: String,
  },
  value10:{
    type: String,
  },
  v10Amount:{
    type: String,
  },
  event: {
    type: String,
  },
  startdate: {
    type: String,
  },
  starttime: {
    type: String,
  },
});
const MatchSchema = model("match", matchSchema);
module.exports = MatchSchema;