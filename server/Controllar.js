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
