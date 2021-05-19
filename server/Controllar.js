const UserInfo = require("./Schema");
const Bets = require("./Back-end-code/BetSchema");
exports.getUser = (req, res) => {
  UserInfo.find()
    .sort({ _id: -1 })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

exports.login = async (req, res) => {
  const { users } = req.body;
  const user = await UserInfo.findOne({
    username: users,
  });
  const bets = await Bets.find({
    username: users
  })
  if (user && bets) {
    return res.json({
      id: user._id,
      name: user.name,
      username: user.username,
      club: user.club,
      country: user.country,
      number: user.number,
      password: user.password,
      sponsor: user.sponsor,
      balance: user.balance,
      bets: bets
    });
  } else {
    res.status(401);
    throw new Error("Invalid username");
  }
};

exports.specificUser = (req, res) => {
  UserInfo.find({ username: req.query.u })
    .then((user) => {
      res.send(user);
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
        .then((user) => {
          res.send(user);
        })
        .catch((err) => {
          res.send(err.message);
        });
    })
    .catch((err) => {
      res.send(err.message);
    });
};

// user details update
exports.userUpdate = (req, res) => {
  const { id } = req.params;
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
  UserInfo.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        name,
        country,
        club,
        number,
        sponsor,
        username,
        password,
        password2,
        balance,
      },
    },
    { new: true }
  ).then(() => {
    UserInfo.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send(err.message);
      });
  });
};

// hey user you will go to banned user list
exports.bannedActiveUser = (req, res) => {
  const { id } = req.params;
  UserInfo.findByIdAndDelete({ _id: id }).then(() => {
    UserInfo.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send(err.message);
      });
  });
};

// user password update
exports.changePassword = (req, res) => {
  const { id } = req.params;
  const { changePass } = req.body;
  UserInfo.findByIdAndUpdate(
    { _id: id },
    { $set: { password: changePass, password2: changePass } },
    { new: true }
  ).then(() => {
    UserInfo.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send(err.message);
      });
  });
};

// Withdraw update
exports.withdrawUpdate = (req, res) => {
  UserInfo.findOneAndUpdate(
    { username: req.params.user },
    {
      $set: { balance: parseInt(req.body.balance) - parseInt(req.body.amount) },
    },
    { new: true }
  ).then(() => {
    UserInfo.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send(err.message);
      });
  });
};

// Withdraw Post request
const Widthraw = require("./WithdrawSchema");
exports.withdrawReq = (req, res) => {
  const { method, type, amount, number, username, club, date, button } = req.body;
  const WidthrawRequest = new Widthraw({
    method: method,
    type: type,
    amount: amount,
    number: number,
    username: username,
    club: club,
    date: date,
    button: button,
  });
  WidthrawRequest.save().then(() => {
    UserInfo.find()
      .then((user) => {
        res.send(user);
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
    .then((user) => {
      res.json(user);
    });
};
// Withdraw delete
exports.withdrawDelete = (req, res) => {
  const { id } = req.params;
  Widthraw.findByIdAndDelete({ _id: id }).then(() => {
    Widthraw.find()
      .then((user) => res.json(user));
  });
};
