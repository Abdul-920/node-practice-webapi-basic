require("dotenv").config({ path: __dirname + "/.env" });

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

const passport = require("passport");
const { jwtStrategy } = require("./config/passport");
const apiDocRoute = require("./routes/docs");
const authRoutes = require("./routes/auth.routes");
const feedRoutes = require("./routes/feed.routes");
const familyRoutes = require("./routes/family.routes");

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
app.use("/images", express.static(path.join(__dirname, "images")));

// enable corss
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// jwt authentication
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

app.use("/api-docs", apiDocRoute);
app.use("/auth", authRoutes);
app.use("/feed", feedRoutes);
app.use("/family", familyRoutes);

// its a special middleware that triggers when next(error) is called. It skips all the other middleware in between
// inside async code we use next(new error) while in sync code just throw new error
app.use((error, req, res, next) => {
  console.log("I am in error handling middleware");
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ code: status, message: message, data: data });
});

mongoose
  .connect(
    "mongodb+srv://AbdulSamad:FRKZCzesJNFYZ6rG@mobileappcluster.u7sel.mongodb.net/Usrati?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => {
    console.log("Connection Established With Mongoose");
    app.listen(3000);
  })
  .catch((err) =>
    console.log("Error Establishing Connection With Mongoose", err)
  );
