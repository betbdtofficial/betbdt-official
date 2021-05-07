const depoHistory = require("./DepositHistorySchema");
exports.getDepoHistory = (req, res) => {
  depoHistory
    .find()
    .sort({ _id: -1 })
    .then((result) => {
      res.json(result);
    });
};
exports.createDepoHistory = (req, res) => {
  const { username, from, method, amount, date, button } = req.body;
  const Deposit = new depoHistory({
    username,
    from,
    method,
    amount,
    date,
    button,
  });
  Deposit.save().then(() => {
    depoHistory
      .find()
      .sort({ _id: -1 })
      .then((result) => {
        res.json(result);
      });
  });
};

// deposit amount add
const UserInfo = require("../Schema");
exports.addDeposit = (req, res) => {
  UserInfo.findOne({ username: req.params.username }).then((result) => {
    UserInfo.findOneAndUpdate(
      { username: req.params.username },
      { $set: { balance: result.balance + req.body.amount } },
      { new: true }
    ).then((result) => {
      res.send(result);
    });
  });
};
