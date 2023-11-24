const express = require("express");
const Router = express.Router();
const post = require("./post");

Router.post("/", post);

module.exports = Router;
