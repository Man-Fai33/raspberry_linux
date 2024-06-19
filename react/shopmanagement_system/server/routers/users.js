const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { Helper } = require('../helper/helper');
router.get('/', (req, res) => {

    User.findOne().exec().then(result => {
        res.json({ status: "success", users: result })
    }).catch(err => {
        res.json({ status: "fail", message: err })
    })
})

// Create a new user specified by a User object
router.post('/', async (req, res) => {
    let user = req.body
    let userCreate = null
    let type = user.type || null
    let response = {}
    try {
        if (!type && type !== "signin") {
            let message = await Helper.SignUpCheck(user.email, user.username)
            if (message === "") {
                user.role = 'user';
                console.log(user)
                userCreate = new User(user); // 将 user 对象传递给构造函数
                const createdUser = await userCreate.save(); // 创建并保存文档实例
                response.message = "用戶創建成功";
                response.data = createdUser;
                response.error = false;
                return res.json(response);
            } else {
                response.message = message + "已經存在"
                response.error = true
                return res.json(response)
            }
        } else {
            if (await User.findOne({ username: user.username, password: user.password }).exec() !== null || await User.findOne({ email: user.vainput, password: user.password }).exec() !== null) {

                if (await User.findOne({ username: user.username, password: user.password }).exec() !== null) {
                    response.message = "用戶名稱登入"
                } else {
                    response.message = "用戶電郵登入"
                }
            } else {
                response.message = "密碼名字錯誤/n 註冊新的賬號"
            }
        } return res.json(response)

    } catch (error) {
        console.log(error)
    }
})
module.exports = router;