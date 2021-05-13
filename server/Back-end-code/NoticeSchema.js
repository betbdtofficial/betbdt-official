const { Schema, model } = require("mongoose");
const NoticeSchema = new Schema({
  notice: {
    type: String,
    required: true,
  },
});
const notice = model("notice", NoticeSchema);
module.exports = notice;
