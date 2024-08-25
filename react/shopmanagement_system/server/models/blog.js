const mongoose = require('mongoose')

const contentSchema = new mongoose.Schema({
    type: { type: String, enum: ['text', 'image'], required: true },
    value: { type: String, required: true }
});

const objectID = new mongoose.Schema({
    _id: { type: String, required: true }
})

const Blog = module.exports = new mongoose.Schema({
    ownerId: { type: String, required: true },
    title: { type: String, required: true },
    content: [contentSchema],
    tags: [{ type: String }],
    like: { type: [objectID], default: [] },
    keeper: { type: [objectID], required: [] },
    createdAt: { type: Date, default: Date.now },
    comments: { type: Array, default: [] },
    status: { type: String, enum: ['active', 'draft', 'archived'], default: 'active' }
});
module.exports = mongoose.model('Blog', Blog)