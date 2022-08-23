"use strict"
const express = require("express");
const app = express();
const home = require("./src/routes/home");
const path = require("path");

app.set("views",__dirname+"/src/views/home");
app.set("view engine","ejs");
app.use("/",home); // 미들웨어 등록해주는 메소드
app.use("/js",express.static("./src/public/js"));

module.exports = app;;