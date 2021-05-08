const ClubHolder = require("./ClubHolderSchema");
exports.getClubHolder = (req, res) => {
  ClubHolder.find()
    .sort({_id: -1})
    .then((result) => {
      res.send(result);
    });
};
exports.createClubHolder = (req, res) => {
  const {
    name,
    country,
    club,
    number,
    sponsor,
    username,
    password,
    password2,
    profit,
  } = req.body;
  const AddClubHolder = new ClubHolder({
    name,
    country,
    club,
    number,
    sponsor,
    username,
    password,
    password2,
    profit,
  });
  AddClubHolder.save().then(() => {
    ClubHolder.find()
      .sort({_id: -1})
      .then((result) => {
        res.send(result);
      });
  });
};
