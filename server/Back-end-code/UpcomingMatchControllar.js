const UpcomingMatch = require("./UpcomingMatchScema");
exports.getUpcomingMatch = (req, res) => {
  UpcomingMatch.find()
    .sort({ _id: -1 })
    .then((result) => {
      res.send(result);
    });
};
exports.createUpcomingMatch = (req, res) => {
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
  } = req.body;
  const match = new UpcomingMatch({
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
  });
  match.save().then(() => {
    UpcomingMatch.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  });
};
exports.deleteUpcomingMatch = (req, res) => {
  const { id } = req.params;
  UpcomingMatch.findByIdAndDelete({ _id: id }).then(() => {
    UpcomingMatch.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  });
};
exports.updateUpcomMatch = (req, res) => {
  const { id } = req.params;
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
  } = req.body;
  UpcomingMatch.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
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
      },
    }
  ).then(() => {
    UpcomingMatch.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  });
};
