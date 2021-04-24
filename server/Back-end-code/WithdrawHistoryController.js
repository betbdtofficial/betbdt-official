const WithdrawHistory = require("./WithdrawHistorySchema");

exports.getWithdrawHistory = (req, res) => {
  WithdrawHistory.find()
    .sort({ _id: -1 })
    .then((result) => {
      res.json(result);
    });
};
exports.createWithdrawHistory = (req, res) => {
  const { username, number, type, method, amount, date } = req.body;
  const withdraw = new WithdrawHistory({
    username,
    number,
    type,
    method,
    amount,
    date,
  });
  withdraw.save().then(() => {
    WithdrawHistory.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.json(result);
      });
  });
};
