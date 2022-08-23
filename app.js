"use strict"
const express = require("express");
const app = express();
const home = require("./routes/home");

app.set("views",__dirname+"/views/home");
app.set("view engine","ejs");
app.use("/",home); // 미들웨어 등록해주는 메소드

module.exports = app;