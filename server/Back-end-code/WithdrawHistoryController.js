const WithdrawHistory = require("./WithdrawHistorySchema");

exports.getWithdrawHistory = (req, res) => {
  WithdrawHistory.find()
    .sort({ _id: -1 })
    .then((result) => {
      res.json(result);
    });
};

// specific withdraw history
exports.specificWithHistory = (req, res) => {
  const { user } = req.query;
  WithdrawHistory.find({ username: user })
    .sort({ _id: -1 })
    .then((result) => {
      res.send(result);
    });
};

exports.createWithdrawHistory = (req, res) => {
  const { username, club, number, type, method, amount, date, button } =
    req.body;
  const withdraw = new WithdrawHistory({
    username,
    club,
    number,
    type,
    method,
    amount,
    date,
    button,
  });
  withdraw.save().then(() => {
    WithdrawHistory.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.json(result);
      });
  });
};
