const draftSchema = require("./DraftSchema");
exports.createDraftMatch = (req, res) => {
  const {
    match1,
    match2,
    m1Amount,
    m2Amount,
    event,
    title1,
    value1,
    v1Amount,
    value2,
    v2Amount,
    title2,
    value3,
    v3Amount,
    value4,
    v4Amount,
    title3,
    value5,
    v5Amount,
    value6,
    v6Amount,
    title4,
    value7,
    v7Amount,
    value8,
    v8Amount,
    title5,
    value9,
    v9Amount,
    value10,
    v10Amount,
    starttime,
    startdate,
    matchStatus,
  } = req.body;
  const draftMatch = new draftSchema({
    match1,
    match2,
    m1Amount,
    m2Amount,
    event,
    title1,
    value1,
    v1Amount,
    value2,
    v2Amount,
    title2,
    value3,
    v3Amount,
    value4,
    v4Amount,
    title3,
    value5,
    v5Amount,
    value6,
    v6Amount,
    title4,
    value7,
    v7Amount,
    value8,
    v8Amount,
    title5,
    value9,
    v9Amount,
    value10,
    v10Amount,
    starttime,
    startdate,
    matchStatus,
  });
  draftMatch.save().then(() => {
    draftSchema
      .find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  });
};

exports.getDraftMatch = (req, res) => {
  draftSchema
    .find()
    .sort({ _id: -1 })
    .then((result) => {
      res.send(result);
    });
};
exports.draftDelete = (req, res) => {
  const { id } = req.params;
  draftSchema.findByIdAndDelete({ _id: id }).then(() => {
    draftSchema
      .find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  });
};
