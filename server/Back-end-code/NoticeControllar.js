const NoticeSchema = require("./NoticeSchema");
exports.getNotice = (req, res) => {
  NoticeSchema.find()
    .sort({ _id: -1 })
    .then((result) => {
      res.send(result);
    });
};
exports.createNotice = (req, res) => {
  const { notice } = req.body;
  const NoticeAdd = new NoticeSchema({
    notice,
  });
  NoticeAdd.save().then(() => {
    NoticeSchema.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  });
};
exports.noticeUpdate = (req, res) => {
  const { id } = req.params;
  const { notice } = req.body;
  NoticeSchema.findByIdAndUpdate(
    { _id: id },
    { notice: notice },
    { new: true }
  ).then(() => {
    NoticeSchema.find()
      .sort({ _id: -1 })
      .then((result) => {
        res.send(result);
      });
  });
};
