const { body, query } = require("express-validator/check");
const { User } = require("../models");

const verifyEmail = [
  query("token").isEmpty(),
];

const signUp = [
  body("email").isEmail().withMessage("Please enter a valid email."),
  body("password").trim().isLength({ min: 8 }),
  body("name").trim().not().isEmpty(),
];

const forgotPassword = [
  [body("email").isEmail().withMessage("Please enter a valid email.")],
];

module.exports = {
  verifyEmail,
  signUp,
  forgotPassword,
};
