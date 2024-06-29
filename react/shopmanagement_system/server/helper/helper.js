const mongoose = require('mongoose')
const multer = require('multer')
const User = require("../models/user")

const Helper = {
    async SignUpCheck(email) {
        let message = ""

        if (await User.findOne({ email: email }).exec() !== null) {
            message += "用戶電郵"
        }
        // if (await User.findOne({ username: username }).exec() !== null) {
        //     message += "用戶名稱"
        // }

        return message
    },
}
module.exports = { Helper }