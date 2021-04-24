const withdrawMethod = require("./WithdrawMethodSchema");
exports.getMethod = (req, res) => {
  withdrawMethod
    .find()
    .sort({ _id: -1 })
    .then((result) => {
      res.json(result);
    });
};
exports.createMethod = (req, res) => {
  const { gatewayName, number } = req.body;
  const methodSave = new withdrawMethod({
    gatewayName: gatewayName,
    number: number,
  });
  methodSave.save().then(() => {
    withdrawMethod
      .find()
      .sort({ _id: -1 })
      .then((result) => {
        res.json(result);
      });
  });
};
exports.deleteMethod = (req, res) => {
  const { id } = req.params;
  withdrawMethod.findByIdAndDelete({ _id: id }).then(() => {
    withdrawMethod
      .find()
      .sort({ _id: -1 })
      .then((result) => {
        res.json(result);
      });
  });
};
