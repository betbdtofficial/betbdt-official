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
    question,
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
    question,
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


// bet delete
exports.betDelete = (req, res) => {
  const { id } = req.params;
  Bets.findByIdAndDelete({ _id: id }).then((result) => {
    res.send(result);
  });
};

// Withdraw update
const UserInfo = require("../Schema");
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

// bet user amount add
exports.betUserBalUpdate = (req, res) => {
  UserInfo.findOne({ username: req.params.username }).then((result) => {
    UserInfo.findOneAndUpdate(
      { username: req.params.username },
      {
        $set: {
          balance: parseInt(result.balance) + parseInt(req.body.balance),
        },
      },
      { new: true }
    ).then((result) => {
      res.send(result);
    });
  });
};
