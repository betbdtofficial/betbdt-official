const BetHistory = require("./BetHistorySchema");
exports.getBetHistory = (req, res) => {
    BetHistory.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  };
exports.createBetHistory = (req, res) => {
  const {
    username,
    date,
    match1,
    match2,
    betTitle,
    betAmount,
    betRate,
    winingAmount,
    question,
    status,
  } = req.body;
  const betHistory = new BetHistory({
    username,
    date,
    match1,
    match2,
    betTitle,
    betAmount,
    betRate,
    winingAmount,
    question,
    status,
  });
  betHistory.save().then(() => {
    BetHistory.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  });
};
