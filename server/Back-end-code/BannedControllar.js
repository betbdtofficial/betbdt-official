const BannedUser = require("./BannedSchema");
exports.getBannedUser = (req, res) => {
  BannedUser.find()
    .sort()
    .then((result) => {
      res.send(result);
    });
};
exports.createBannedUser = (req, res) => {
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
  const banned = new BannedUser({
    name,
    country,
    club,
    number,
    sponsor,
    username,
    password,
    password2,
    balance,
  });
  banned.save().then(() => {
    BannedUser.find()
      .sort()
      .then((result) => {
        res.send(result);
      });
  });
};
exports.bannedUserDelete = (req, res) => {
  const { id } = req.params;
  BannedUser.findByIdAndDelete({ _id: id }).then(() => {
    BannedUser.find()
      .sort()
      .then((result) => {
        res.send(result);
      });
  });
};
