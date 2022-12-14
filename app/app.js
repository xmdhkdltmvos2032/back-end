"use strict"
const express = require("express");
const app = express();
const router = require("./src/routes/home/router");
const bodyParser = require("body-parser");

app.set("views",__dirname+"/src/views/home/");
app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",router); // 미들웨어 등록해주는 메소드
app.use("/js",express.static("./src/public/js"));


module.exports = app;