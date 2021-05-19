const jwt = require("jsonwebtoken");
exports.Authenticated = (req, res, next) => {
  let token;
  try {
    token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded
    next();
  } catch (error) {
    res.json({message: 'Un-Authorized'});
  }
};
