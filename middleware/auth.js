const passport = require("passport");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { roleRights } = require("../config/roles");

const verifyCallback =
  (req, resolve, reject, requiredRights) => async (err, user, info) => {
    if (err || info || !user) {
      console.log("In Auth.js file err || info || !user", err, info, !user);
      return reject(
        new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate")
      );
    }
    req.user = user;

    if (requiredRights.length) {
      console.log("In Auth.js file and userRights are", user.userRole);
      const userRights = roleRights.get(user.userRole);
      console.log("In Auth.js file and userRights are", userRights);
      const hasRequiredRights = requiredRights.every((requiredRight) =>
        userRights.includes(requiredRight)
      );
      if (!hasRequiredRights && req.params.userId !== user.id) {
        console.log("In Auth.js file and userRights are Forbidden");
        return reject(new ApiError(httpStatus.FORBIDDEN, "Forbidden"));
      }
    }
    console.log("In Auth.js file resolved finally");
    resolve();
  };

const auth =
  (...requiredRights) =>
  async (req, res, next) => {
    console.log("In Auth.js file", requiredRights);
    return new Promise((resolve, reject) => {
      passport.authenticate(
        "jwt",
        { session: false },
        verifyCallback(req, resolve, reject, requiredRights)
      )(req, res, next);
    })
      .then(() => next())
      .catch((err) => next(err));
  };

module.exports = auth;
