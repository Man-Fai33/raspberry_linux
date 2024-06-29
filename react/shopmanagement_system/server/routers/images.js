const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const User = require('../models/user');
const fs = require('fs').promises; // for async file operations
// Multer 配置
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); // 设置文件存储目录

    },
    filename: function (req, file, cb) {

        const fileName = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, fileName); // 设置文件名
    }
});

const imgUpload = multer({
    limits: { fileSize: 10000000 },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            cb(new Error('Please upload an image'));
        } else {
            cb(null, true);
        }
    },
    storage: storage
});

const singleImgUpload = imgUpload.single('Image'); // 设置单文件上传

// 文件上传处理中间件
const imgUploadHandler = (req, res, next) => {
    singleImgUpload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // Multer 发生错误
            return next(err);
        } else if (err) {
            // 其他未知错误
            return next(err);
        }
        // 文件上传成功
        next();
    });
};

// 处理文件上传的路由
router.post('/', imgUploadHandler, asyncHandler(async function (req, res, next) {
    try {
        const { id, type } = req.body
        const { file } = req;
        const origin = req.headers.origin !== "https://cheungmanfai.ngrok.io/" ? `http://${req.get('host')}/images/${file.filename}` : req.headers.origin + '/images/' + file.filename

        console.log(origin)
        if (id !== undefined) {
            if (type === "user") {
                let iconUrl = await User.findOne({ _id: id })

                let user = await User.findOneAndUpdate({ _id: id }, { $set: { iconUrl: origin } }, { new: true, useFindAndModify: false })
                if (user !== null) {

                    res.json({
                        path: origin
                    });


                    if (iconUrl.iconUrl !== '') {
                        const url = iconUrl.iconUrl.split('/images/')[1];
                        await fs.unlink('public/images/' + url)
                    }
                    return res
                }
            }
        }


    } catch (err) {
        console.log(err)
    }
}));

module.exports = router;
