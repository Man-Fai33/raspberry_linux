const express = require('express');
const router = express.Router();
const CV = require('../models/cv');

class Link {
    constructor(src, name) {
        this.src = src || "";
        this.name = name || "";
    }
}

// GET请求，获取所有简历数据
router.get('/', async (req, res) => {
    try {
        const cvs = await CV.findOne() // 假设使用 Mongoose 的模型方法 find() 获取所有 CV 数据

        res.json(cvs); // 返回 JSON 格式的简历数据给客户端
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST请求，创建新的简历数据
router.post('/', async (req, res) => {

    const cv = req.body;

    try {
        // 检查是否已存在相同的 email
        const existingCV = await CV.findOne({ email: cv.email });

        if (existingCV) {
            // 如果已存在相同 email 的文档，则执行更新操作
            const updateResult = await CV.updateOne({ email: cv.email }, { $set: cv }, { new: true, useFindAndModify: false });
            console.log(updateResult);

            // 返回更新后的 CV 数据给客户端
            res.status(200).json(updateResult);
        } else {
            // 如果不存在相同 email 的文档，则创建新的 CV 文档
            const newCV = await new CV(cv).save();
            console.log(newCV);

            // 返回新创建的 CV 数据给客户端
            res.status(201).json(newCV);
        }

    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
