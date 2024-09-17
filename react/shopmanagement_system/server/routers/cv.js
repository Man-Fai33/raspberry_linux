const express = require('express');
const router = express.Router();
const CV = require('../models/cv');

class Link {
    constructor(src, name) {
        this.src = src || "";
        this.name = name || "";
    }
}


router.get('/', async (req, res) => {
    try {
        const cvs = await CV.findOne() 
            res.json(cvs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    const cv = req.body;
    try {
        const existingCV = await CV.findOne({ email: cv.email });
        if (existingCV) {
            const updateResult = await CV.updateOne({ email: cv.email }, { $set: cv }, { new: true, useFindAndModify: false });
            console.log(updateResult);
            res.status(200).json(updateResult);
        } else {
            const newCV = await new CV(cv).save();
            console.log(newCV);
            res.status(201).json(newCV);
        }

    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
