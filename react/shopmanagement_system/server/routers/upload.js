const express = require('express');
const router = express.Router();

const asyncHandler = require('express-async-handler')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        const fileName = `${uuidv4()}${path.extname(file.originalname)}`
        cb(null, fileName)
    }
})
const imgUpload = multer({
    fileSize: 10000000,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            cb(new Error('Please upload an image'))
        }
        cb(null, true)
    },
    storage: storage
})
const singleImgUpload = imgUpload.single('Image');

const imgUploadHandler = (req, res, next) => {
    singleImgUpload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            next(err)
        } else if (err) {
            // An unknown error occurred when uploading.
            next(err)
        }
        // Everything went fine.
        next()
    })
}
router.post('/', imgUploadHandler, asyncHandler(async function (req, res, next) {
    const { file } = req;
    console.log(file)
    console.log(req.hostname)
    res.json({ path: `http://${req.get('host')}/images/${file.filename}` });
    console.log(file)

}));
module.exports = router;