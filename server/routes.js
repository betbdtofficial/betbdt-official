const {
  getBannedUser,
  createBannedUser,
  bannedUserDelete,
} = require("./Back-end-code/BannedControllar");
const { getClubHolder, createClubHolder } = require("./Back-end-code/ClubHolderControllar");
const {
  getDepoHistory,
  createDepoHistory,
  addDeposit,
} = require("./Back-end-code/DepositControllar");
const {
  getDepoMethod,
  createDepoMethod,
  deleteDepoMethod,
} = require("./Back-end-code/DepositMethodController");
const {
  createDraftMatch,
  getDraftMatch,
  draftDelete,
} = require("./Back-end-code/DraftControllar");
const {
  getMatch,
  createMatch,
  deleteMatch,
  updateMatch,
} = require("./Back-end-code/MatchControllar");
const {
  getUpcomingMatch,
  createUpcomingMatch,
  deleteUpcomingMatch,
  updateUpcomMatch,
} = require("./Back-end-code/UpcomingMatchControllar");
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
  withdrawUpdate,
  changePassword,
  userUpdate,
  bannedActiveUser,
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
router.put("/passChange/:id", changePassword); // user Password update
router.put("/userUpdate/:id", userUpdate); // user details update
router.delete("/bannedActiveUser/:id", bannedActiveUser); // banned Active User

// Banned user handle
router.get("/getBannedUser", getBannedUser);
router.post("/createBannedUser", createBannedUser);
router.delete("/deleteBannedUser/:id", bannedUserDelete);

// club holder
router.get("/getClubHolder", getClubHolder);
router.post("/createClubHolder", createClubHolder);

// Draft box match
router.post("/createDraftMatch", createDraftMatch);
router.get("/getdraftMatch", getDraftMatch);
router.delete("/draftDelete/:id", draftDelete);

// withdraw request
router.post("/withdrawReq", withdrawReq);
router.get("/withdrawGet", withdrawGet);
router.delete("/delete/:id", withdrawDelete);

// withdraw update
router.put("/:user", withdrawUpdate);

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

// deposit amount add user balance
router.patch("/:username", addDeposit);

//deposit history
router.get("/getDepositHistory", getDepoHistory);
router.post("/createDepositHistory", createDepoHistory);

// withdraw method
router.get("/getDepoMethod", getDepoMethod);
router.post("/createDepoMethod", createDepoMethod);
router.delete("/deposit/delete/:id", deleteDepoMethod);

// get Live match and create Live match and delete Live match
router.get("/getMatch", getMatch);
router.post("/createMatch", createMatch);
router.delete("/deleteMatch/:id", deleteMatch);
router.put("/updateMatch/:id", updateMatch);

// get upcoming match and create upcoming match and delete upcoming match
router.get("/getUpcomingMatch", getUpcomingMatch);
router.post("/createUpcomingMatch", createUpcomingMatch);
router.delete("/deleteUpcomingMatch/:id", deleteUpcomingMatch);
router.put("/updateUpcomMatch/:id", updateUpcomMatch);

module.exports = router;
