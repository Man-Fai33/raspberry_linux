const mongoose = require('mongoose')
const { UserSchema } = require('./user')
const contentSchema = new mongoose.Schema({
    type: { type: String, enum: ['text', 'image'], required: true },
    value: { type: String, required: true }
});
const commentsSchema = new mongoose.Schema({
    user: { type: String, required: true },
    username: { type: String, required: true },
    message: { type: String, required: true },
    postedAt: { type: Date, default: Date.now }
});



const Blog = module.exports = new mongoose.Schema({
    owner: { type: UserSchema, required: true },
    title: { type: String, required: true },
    content: [contentSchema],
    tags: [{ type: String }],
    imgUrl: { type: String, required: true },
    like: { type: Number, default: 0 },
    visitor: { type: Number, default: 0 },
    createdAt: { type: Date, required: true },
    comments: [commentsSchema],
    status: { type: String, enum: ['active', 'draft', 'archived'], default: 'active' }
})
module.exports = mongoose.model('blog', Blog)