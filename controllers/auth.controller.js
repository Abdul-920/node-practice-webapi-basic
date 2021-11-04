const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const { User } = require("../models");
const {
  emailService,
  authService,
  userService,
  tokenService,
} = require("../services");
const httpStatus = require("http-status");
// Max
// exports.signup = (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     const error = new Error("Validation failed.");
//     error.statusCode = 422;
//     error.data = errors.array();
//     throw error;
//   }
//   const email = req.body.email;
//   const name = req.body.name;
//   const password = req.body.password;
//   bcrypt
//     .hash(password, 12)
//     .then((hashedPw) => {
//       const user = new User({
//         email: email,
//         password: hashedPw,
//         name: name,
//       });
//       return user.save();
//     })
//     .then((result) => {
//       console.log(process.env.JWT_SECRET, process.env.JWT_ACCESS_EXPIRATION_MINUTES)
//       const token = jwt.sign(
//         {
//           email: email,
//           userId: result._id,
//         },
//         process.env.JWT_SECRET,
//         { expiresIn: "1h" }
//       );
//       res.status(201).json({
//         message: "User created!",
//         data: result,
//         token: token,
//       });
//     })
//     .catch((err) => {
//       if (!err.statusCode) {
//         err.statusCode = 500;
//       }
//       next(err);
//     });
// };

const signUp = catchAsync(async (req, res, next) => {
  console.log("exports.signup in auth controller");
  const user = await userService.createUser(req.body);
  console.log("generated User in auth controller", user);
  const tokens = await tokenService.generateAuthTokens(user);
  console.log("generated Token in auth controller", tokens);
  res.status(httpStatus.CREATED).send({ message: 'User Registered Successfully', user, tokens });
});

const login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const error = new Error("A user with this email could not be found.");
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Wrong password!");
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString(),
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        message: "Login Successful",
        data: loadedUser,
        token: token,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

const forgotPassword = async (req, res, next) => {
  const email = req.body.email;
  console.log(req.body.email);
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const error = new Error("Validation Error.");
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("A user with this email could not be found.");
      error.statusCode = 404;
      throw error;
    }

    //const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.email);
    await emailService.sendResetPasswordEmail(
      req.body.email,
      "resetPasswordToken"
    );
    // res.status(httpStatus.NO_CONTENT).send();
    res.status(200).json({
      message: "Email has been sent!",
    });
  } catch (error) {
    next(error);
    console.log("next", e);
  }
};

const sendVerificationEmail = catchAsync(async (req, res) => {
  const verifyEmailToken = await tokenService.generateVerifyEmailToken(req.user);
  await emailService.sendVerificationEmail(req.user.email, verifyEmailToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const verifyEmail = catchAsync(async (req, res) => {
  await authService.verifyEmail(req.query.token);
  res.status(httpStatus.NO_CONTENT).send();
});


module.exports = {
  signUp,
  login,
  
  
  forgotPassword,
  
  sendVerificationEmail,
  verifyEmail,
};
