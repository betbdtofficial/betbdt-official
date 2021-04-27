const UserInfo = require("./Schema");

exports.getUser = (req, res) => {
  UserInfo.find()
    .sort({ _id: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
};
exports.specificUser = (req, res) => {
  UserInfo.find({ username: req.query.u })
    .sort({ _id: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
};
exports.registraionUser = (req, res) => {
  const {
    name,
    country,
    club,
    number,
    sponsor,
    username,
    password,
    password2,
    balance,
  } = req.body;
  const createUser = new UserInfo({
    name: name,
    country: country,
    club: club,
    number: number,
    sponsor: sponsor,
    username: username,
    password: password,
    password2: password2,
    balance: balance,
  });
  createUser
    .save()
    .then(() => {
      UserInfo.find()
        .sort({ _id: -1 })
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err.message);
        });
    })
    .catch((err) => {
      res.send(err.message);
    });
};

// Withdraw update
exports.withdrawUpdate = (req, res) => {
  UserInfo.findOneAndUpdate(
    { username: req.params.user },
    { $set: { balance: req.body.balance - req.body.amount} },
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

// Withdraw Post request
const Widthraw = require("./WithdrawSchema");
exports.withdrawReq = (req, res) => {
  const { method, type, amount, to, user } = req.body;
  const WidthrawRequest = new Widthraw({
    method: method,
    type: type,
    amount: amount,
    to: to,
    user: user,
  });
  WidthrawRequest.save().then((result) => {
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
// Withdraw Get request
exports.withdrawGet = (req, res) => {
  Widthraw.find()
    .sort({ _id: -1 })
    .then((result) => res.json(result));
};
// Withdraw delete
exports.withdrawDelete = (req, res) => {
  const { id } = req.params;
  Widthraw.findByIdAndDelete({ _id: id }).then(() => {
    Widthraw.find()
      .sort({ _id: -1 })
      .then((result) => res.json(result));
  });
};
