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
    startdate,
    starttime,
  } = req.body;
  const match = new UpcomingMatch({
    match1,
    match2,
    m1Amount,
    m2Amount,
    event,
    startdate,
    starttime,
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
