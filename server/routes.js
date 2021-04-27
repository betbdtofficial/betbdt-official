const {
  getDepoHistory,
  createDepoHistory,
} = require("./Back-end-code/DepositControllar");
const {
  getDepoMethod,
  createDepoMethod,
  deleteDepoMethod,
} = require("./Back-end-code/DepositMethodController");
const {
  createWithdrawHistory,
  getWithdrawHistory,
} = require("./Back-end-code/WithdrawHistoryController");
const {
  getMethod,
  createMethod,
  deleteMethod,
} = require("./Back-end-code/WithdrawMethodControllar");
const {
  getUser,
  registraionUser,
  specificUser,
  withdrawReq,
  withdrawGet,
  withdrawDelete,
} = require("./Controllar");
const {
  getDeposit,
  createDeposit,
  depoDelete,
} = require("./Front-end-code/DepositReqControllar");
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

// withdraw method
router.get("/getMethod", getMethod);
router.post("/createMethod", createMethod);
router.delete("/:id", deleteMethod);

//deposit request
router.get("/getDeposit", getDeposit);
router.post("/createDeposit", createDeposit);
router.delete("/deposit/delete/:id", depoDelete);

//deposit history
router.get("/getDepositHistory", getDepoHistory);
router.post("/createDepositHistory", createDepoHistory);

// withdraw method
router.get("/getDepoMethod", getDepoMethod);
router.post("/createDepoMethod", createDepoMethod);
router.delete("/deposit/delete/:id", deleteDepoMethod);

module.exports = router;