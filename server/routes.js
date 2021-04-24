const {
  createWithdrawHistory,
  getWithdrawHistory,
} = require("./Back-end-code/WithdrawHistoryController");
const {
  getUser,
  registraionUser,
  specificUser,
  withdrawReq,
  withdrawGet,
  withdrawDelete,
} = require("./Controllar");
const router = require("express").Router();

router.get("/", getUser); //Get User Info
router.get("/specificUser", specificUser); // Get Specific User
router.post("/", registraionUser); //User Registration

// withdraw request
router.post("/withdrawReq", withdrawReq);
router.get("/withdrawGet", withdrawGet);
router.delete("/delete/:id", withdrawDelete);

// withdraw history
router.get("/getWithdrawHistory", getWithdrawHistory);
router.post("/createWithdrawHistory", createWithdrawHistory);

module.exports = router;
