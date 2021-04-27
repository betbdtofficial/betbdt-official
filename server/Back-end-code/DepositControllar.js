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
  const { username, from, method, amount, date } = req.body;
  const Deposit = new depoHistory({
    username,
    from,
    method,
    amount,
    date,
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

  