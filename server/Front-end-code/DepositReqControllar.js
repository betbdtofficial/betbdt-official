const Deposit = require("./DepositReqSchema");
exports.getDeposit = (req, res) => {
  Deposit.find()
    .sort({ _id: -1 })
    .then((result) => {
      res.json(result);
    });
};

// specific deposit get
exports.specificDepoGet = (req, res) => {
  const { user } = req.query;
  Deposit.find({ username: user })
    .sort({ _id: -1 })
    .then((result) => {
      res.send(result);
    });
};

exports.createDeposit = (req, res) => {
  const { method, amount, from, username, button, date } = req.body;
  const deposit = new Deposit({
    method,
    amount,
    from,
    username,
    button,
    date,
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
