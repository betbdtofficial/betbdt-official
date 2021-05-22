const { Authenticated } = require("./Authenticate")
const {
  getAdminLogin,
  addAdminLogin,
} = require("./Back-end-code/AdminControllar");
const {
  getBannedUser,
  createBannedUser,
  bannedUserDelete,
} = require("./Back-end-code/BannedControllar");
const {
  getBet,
  createBet,
  betBalUpdate,
  betUserBalUpdate,
  betDelete,
  specificUserBets,
} = require("./Back-end-code/BetControllar");
const {
  getBetHistory,
  createBetHistory,
  specificUserBetsHistory,
} = require("./Back-end-code/BetHistoryControllar");
const {
  getClubHolder,
  createClubHolder,
  clubWithdrawUpdate,
  deleteClub,
  bannedClubHolder,
  getBannedClub,
  deleteBannedClub,
  clubHolderbalanceUpdate,
  specificClubHolder,
  changePass,
  allClub
} = require("./Back-end-code/ClubHolderControllar");
const {
  getDepoHistory,
  createDepoHistory,
  addDeposit,
  specificDepoHistory,
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
  getNotice,
  createNotice,
  noticeUpdate,
} = require("./Back-end-code/NoticeControllar");
const {
  getUpcomingMatch,
  createUpcomingMatch,
  deleteUpcomingMatch,
  updateUpcomMatch,
} = require("./Back-end-code/UpcomingMatchControllar");
const {
  createWithdrawHistory,
  getWithdrawHistory,
  specificWithHistory,
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
  login,
  specificWithdrawGet,
  clubHolderMembers,
  changeClub,
} = require("./Controllar");
const {
  getDeposit,
  createDeposit,
  depoDelete,
  specificDepoGet,
} = require("./Front-end-code/DepositReqControllar");
const router = require("express").Router();

router.get("/", Authenticated, getUser); //Get User Info
router.post("/login", login);
router.get("/me", Authenticated, specificUser); // Get Specific User
router.post("/signup", registraionUser); //User Registration
router.put("/passChange/:id", changePassword); // user Password update
router.put("/userUpdate/:id", userUpdate); // user details update
router.put("/clubChange/:id", changeClub)// user club change
router.delete("/bannedActiveUser/:id", bannedActiveUser); // banned Active User

// admin login
router.get("/getAdmin", Authenticated, getAdminLogin);
router.post("/createAdmin", addAdminLogin);

// website setting
router.get("/getNotice", Authenticated, getNotice);
router.post("/createNotice", createNotice);
router.put("/noticeUpdate/:id", noticeUpdate);

// Bet system
router.get("/getBet", Authenticated, getBet);
router.get("/specificBets/me", Authenticated, specificUserBets);
router.post("/createBet", createBet);
router.put("/bet/:user", betBalUpdate);
router.put("/betUserBalUpdate/:username", betUserBalUpdate);
router.get("/getBetHistory", getBetHistory);
router.get("/specificBetHistory/me", Authenticated, specificUserBetsHistory);
router.post("/createBetHistory", createBetHistory);
router.delete("/betDelete/:id", betDelete);

// Banned user handle
router.get("/getBannedUser", Authenticated, getBannedUser);
router.post("/createBannedUser", createBannedUser);
router.delete("/deleteBannedUser/:id", bannedUserDelete);

// club holder
router.get("/getClubHolder", Authenticated, getClubHolder);
router.get("/specificClubHolder", specificClubHolder);
router.get("/clubHolderMembers", clubHolderMembers);
router.put("/club/passChange/:id", changePass); // club Password update
router.post("/createClubHolder", createClubHolder);
router.delete("/deleteClub/:id", deleteClub);
router.post("/bannedClub", bannedClubHolder);
router.get("/getBannedClub", Authenticated, getBannedClub);
router.get("/allClub", allClub) // get all club
router.delete("/deleteBannedClub/:id", deleteBannedClub);
router.put("/clubBalanceUpdate/:username", clubHolderbalanceUpdate);

// Draft box match
router.post("/createDraftMatch", createDraftMatch);
router.get("/getdraftMatch", Authenticated, getDraftMatch);
router.delete("/draftDelete/:id", draftDelete);

// withdraw request
router.post("/withdrawReq", withdrawReq);
router.get("/withdrawGet",Authenticated, withdrawGet);
router.get("/specificWithdraw",Authenticated, specificWithdrawGet);
router.delete("/delete/:id", withdrawDelete);

// withdraw update
router.put("/:user", withdrawUpdate);
router.put("/club/:club", clubWithdrawUpdate);

// withdraw history
router.get("/getWithdrawHistory",Authenticated, getWithdrawHistory);
router.get("/specificWithHistory",Authenticated, specificWithHistory);
router.post("/createWithdrawHistory", createWithdrawHistory);

// withdraw method
router.get("/getMethod", Authenticated, getMethod);
router.post("/createMethod", createMethod);
router.delete("/:id", deleteMethod);

//deposit request
router.get("/getDeposit", Authenticated, getDeposit);
router.get("/specificDepoGet", Authenticated, specificDepoGet);
router.post("/createDeposit", createDeposit);
router.delete("/deposit/delete/:id", depoDelete);

// deposit amount add user balance
router.patch("/:username", addDeposit);

//deposit history
router.get("/getDepositHistory", Authenticated, getDepoHistory);
router.get("/specificDepoHistory", Authenticated, specificDepoHistory);
router.post("/createDepositHistory", createDepoHistory);

// deposit method
router.get("/getDepoMethod", Authenticated, getDepoMethod);
router.post("/createDepoMethod", createDepoMethod);
router.delete("/deleteDepoMethod/:id", deleteDepoMethod);

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
