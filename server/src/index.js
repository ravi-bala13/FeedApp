const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

const userController = require("./controllers/user.controller");
const postController = require("./controllers/post.controller");

app.use("/", userController);
app.use("/", postController);

module.exports = app;
