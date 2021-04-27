const Deposit = require("./DepositReqSchema");
exports.getDeposit = (req, res) => {
  Deposit.find()
    .sort({ _id: -1 })
    .then((result) => {
      res.json(result);
    });
};
exports.createDeposit = (req, res) => {
  const { method, amount, from, user } = req.body;
  const deposit = new Deposit({
    method,
    amount,
    from,
    user,
  });
  deposit.save().then(() => {
    Deposit.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.json(result);
      });
  });
};
exports.depoDelete = (req, res) => {
  const { id } = req.params;
  Deposit.deleteOne({ _id: id }).then(() => {
    Deposit.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.json(result);
      });
  });
};