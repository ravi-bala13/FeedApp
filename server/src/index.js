const express = require("express");

const app = express();

app.use(express.json());

const userController = require("./controllers/user.controller");
const postController = require("./controllers/post.controller");

app.use("/", userController);
app.use("/", postController);

module.exports = app;
