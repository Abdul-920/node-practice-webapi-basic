const { body } = require("express-validator/check");
const { User } = require('../models');

const verifyEmail = [
  body("email").isEmail().withMessage("Please enter a valid email."),
];

const signUp = [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("E-Mail address already exists!");
          }
        });
      }),
    body("password").trim().isLength({ min: 8 }),
    body("name").trim().not().isEmpty(),
];

module.exports = {
  verifyEmail,
  signUp,
};
