const ClubHolder = require("./ClubHolderSchema");
exports.getClubHolder = (req, res) => {
  ClubHolder.find()
    .sort({ _id: -1 })
    .then((result) => {
      res.send(result);
    });
};

// specific club holder
exports.specificClubHolder = (req, res) => {
  const { user } = req.query;
  ClubHolder.find({ username: user }).then((result) => {
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
    balance,
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
    balance,
  });
  AddClubHolder.save().then(() => {
    ClubHolder.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  });
};

// club holder password change
exports.changePass = (req, res) => {
  const { id } = req.params;
  const { changePass } = req.body;
  ClubHolder.findByIdAndUpdate(
    { _id: id },
    { $set: { password: changePass, password2: changePass } },
    { new: true }
  ).then(() => {
    ClubHolder.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send(err.message);
      });
  });
};

// get all club
exports.allClub = async (req, res)=>{
  const clubs = await ClubHolder.find()
  const cls = clubs.map(data=>data.club)
  res.send(cls)
}

// Withdraw update
exports.clubWithdrawUpdate = (req, res) => {
  ClubHolder.findOneAndUpdate(
    { username: req.params.club },
    {
      $set: { balance: parseInt(req.body.balance) - parseInt(req.body.amount) },
    },
    { new: true }
  ).then(() => {
    ClubHolder.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err.message);
      });
  });
};
// club delete
exports.deleteClub = (req, res) => {
  const { id } = req.params;
  ClubHolder.findOneAndDelete({ _id: id }).then(() => {
    ClubHolder.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  });
};
// club banned
const BannedClubHolder = require("./BannedClubSchema");
exports.getBannedClub = (req, res) => {
  BannedClubHolder.find()
    .sort({ _id: -1 })
    .then((result) => {
      res.send(result);
    });
};
exports.bannedClubHolder = (req, res) => {
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
    balance,
  } = req.body;
  const BannedClub = new BannedClubHolder({
    name,
    country,
    club,
    number,
    sponsor,
    username,
    password,
    password2,
    profit,
    balance,
  });
  BannedClub.save().then(() => {
    BannedClubHolder.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  });
};
// delete banned club
exports.deleteBannedClub = (req, res) => {
  const { id } = req.params;
  BannedClubHolder.findByIdAndDelete({ _id: id }).then(() => {
    BannedClubHolder.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  });
};
// club holder balance update
exports.clubHolderbalanceUpdate = (req, res) => {
  ClubHolder.findOne({ username: req.params.username }).then((result) => {
    ClubHolder.findOneAndUpdate(
      { username: req.params.username },
      {
        $set: {
          balance: parseInt(result.balance) + parseInt(req.body.balance),
        },
      },
      { new: true }
    ).then((result) => {
      res.send(result);
    });
  });
};
