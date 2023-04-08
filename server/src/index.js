const express = require("express");

const app = express();

app.use(express.json());

const userController = require("./controllers/user.controller");

app.use("/", userController);

module.exports = app;
