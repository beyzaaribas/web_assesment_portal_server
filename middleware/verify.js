const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ isSuccess: false, message: "You must login." });
  }

  jwt.verify(token, "SECRET_KEY", (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ isSuccess: false, message: "You must login." });
    } else {
      req.user = user;
      next();
    }
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id == req.params.id || req.user.userType) {
      next();
    } else {
      return res
        .status(401)
        .json({ isSuccess: false, message: "You must login." });
    }
  });
};

const adminControl = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.userType == 1) {
      next();
    } else {
      return res
        .status(401)
        .json({ isSuccess: false, message: "You are not Admin." });
    }
  });
};



module.exports = { verifyToken, verifyUser, adminControl };
