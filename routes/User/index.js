const express = require("express");
const Router = express.Router();

const get = require("./get");
const post = require("./post");

Router.post("/", post);
Router.get("/", get);
module.exports = Router;
