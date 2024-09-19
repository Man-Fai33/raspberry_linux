const mongoose = require('mongoose')
const Shop = new mongoose.Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    icon: { type: String, default: "" },
    type: { type: String, required: true },
    location: { type: String, required: true },
    introduction: { type: String, required: false },
    rank: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    product: { type: Array, default: [] },
    status: { type: String, enum: ['active', 'draft', 'archived'], default: "" }
})
module.exports = mongoose.model('Shop', Shop)