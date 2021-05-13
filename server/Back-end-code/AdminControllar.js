const adminLogin = require("./AdminSchema");
exports.addAdminLogin = (req, res) => {
  const { username, password } = req.body;
  const adminLoginAdd = new adminLogin({
    username,
    password,
  });
  adminLoginAdd.save().then((result) => {
    res.send(result);
  });
};
exports.getAdminLogin = (req, res) => {
  adminLogin
    .find()
    .sort({ _id: -1 })
    .then((result) => {
      res.send(result);
    });
};
