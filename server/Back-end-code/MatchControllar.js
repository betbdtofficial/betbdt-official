const Match = require("./MatchSchema");
exports.getMatch = (req, res) => {
  Match.find()
    .sort({ _id: -1 })
    .then((result) => {
      res.send(result);
    });
};
exports.createMatch = (req, res) => {
  const {
    match1,
    match2,
    m1Amount,
    m2Amount,
    event,
    startdate,
    starttime,
  } = req.body;
  const match = new Match({
    match1,
    match2,
    m1Amount,
    m2Amount,
    event,
    startdate,
    starttime,
  });
  match.save().then(() => {
    Match.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  });
};
