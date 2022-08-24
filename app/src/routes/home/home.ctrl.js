"use strict"
const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {
        res.render("index")
    },
    login: (req, res) => {
        res.render("login");
    }
}

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const pw = req.body.pw;

        const response = {};
        // if (users.loginData.id.includes(id)) {
        //     const idx = users.loginData.id.indexOf(id);
        //     if (users.loginData.pw[idx] === pw) {
        //         response.성공 = true
        //         return res.json(response);
        //     }
        // }
        UserStorage.getUsers("id","aaa","bbb","ccc");
        response.성공 = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response)
    }
}

module.exports = { output, process }