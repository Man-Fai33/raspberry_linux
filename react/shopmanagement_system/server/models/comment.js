const mongoose = require('mongoose')
const Comment = new mongoose.Schema({
    user: { type: String, required: true },
    username: { type: String, required: true },
    message: { type: String, required: true },
    postedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Comment', Comment)
