const depositMethod = require("./DepositeMethodSchema");
exports.getDepoMethod = (req, res) => {
    depositMethod
    .find()
    .sort({ _id: -1 })
    .then((result) => {
      res.json(result);
    });
};
exports.createDepoMethod = (req, res) => {
  const { gatewayName, number } = req.body;
  const methodSave = new depositMethod({
    gatewayName: gatewayName,
    number: number,
  });
  methodSave.save().then(() => {
    depositMethod
      .find()
      .sort({ _id: -1 })
      .then((result) => {
        res.json(result);
      });
  });
};
exports.deleteDepoMethod = (req, res) => {
  const { id } = req.params;
  depositMethod.findByIdAndDelete({ _id: id }).then(() => {
    depositMethod
      .find()
      .sort({ _id: -1 })
      .then((result) => {
        res.json(result);
      });
  });
};