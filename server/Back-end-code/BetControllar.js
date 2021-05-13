const Bets = require("./BetSchema");
exports.getBet = (req, res) => {
  Bets.find()
    .sort({ _id: -1 })
    .then((result) => {
      res.send(result);
    });
};
exports.createBet = (req, res) => {
  const {
    username,
    date,
    match1,
    match2,
    betTitle,
    betAmount,
    betRate,
    winingAmount,
    status,
  } = req.body;
  const bets = new Bets({
    username,
    date,
    match1,
    match2,
    betTitle,
    betAmount,
    betRate,
    winingAmount,
    status,
  });
  bets.save().then(() => {
    Bets.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  });
};
// Withdraw update
const UserInfo = require('../Schema')
exports.betBalUpdate = (req, res) => {
  UserInfo.findOneAndUpdate(
    { username: req.params.user },
    {
      $set: { balance: parseInt(req.body.balance) - parseInt(req.body.amount) },
    },
    { new: true }
  ).then(() => {
    UserInfo.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err.message);
      });
  });
};