const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const config = require("./config");
const { tokenTypes } = require("./tokens");
const { User } = require("../models");

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== tokenTypes.ACCESS) {
      console.log("payload.sub", payload.sub);
      throw new Error("Invalid token type");
    }
    console.log("payload.sub", payload.sub);
    const user = await User.findById(payload.sub);
    if (!user) {
      console.log("payload.sub", payload.sub);
      return done(null, false);
    }
    console.log("payload.sub", payload.sub);
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};
