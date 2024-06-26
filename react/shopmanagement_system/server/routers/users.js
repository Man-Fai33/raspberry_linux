const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { Helper } = require('../helper/helper');
const { getToken, verifyToken } = require('../protect');
const { token } = require('morgan');
router.get('/', (req, res) => {

    User.findOne().exec().then(result => {
        res.json({ status: "success2", users: result })
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
        // 註冊或者其他條件下做的事情 type是空的 和 類型不是登入的
        if (type !== null && type !== 'signin') {
            let message = await Helper.SignUpCheck(user.email, user.username)
            if (message === "") {
                user.role = 'user';
                userCreate = new User(user); // 将 user 对象传递给构造函数
                const createdUser = await userCreate.save(); // 创建并保存文档实例
                response.message = "用戶創建成功";
                response.status = "success"
                response.data = createdUser;
                response.error = false;
                return res.json(response);
            } else {
                response.message = message + "已經存在"
                response.status = "failed"
                response.error = true
                return res.json(response)
            }
        } else {
            let loginUser = await User.findOne({ email: user.email, password: user.password }).exec()
            if (loginUser !== null) {
                response = {
                    status: "success",
                    user: {
                        ...loginUser.toObject(),
                        token: getToken(user.email)
                    }
                }


                console.log(response.user)
            } else {
                response.message = "密碼名字錯誤/n 註冊新的賬號"
                response.status = "failed"
            }
        }
        return res.json(response)
    } catch (error) {
        console.log(error)
    }
})

router.put('/', async (req, res) => {

})
router.delete('/', async (req, res) => {

});

module.exports = router;