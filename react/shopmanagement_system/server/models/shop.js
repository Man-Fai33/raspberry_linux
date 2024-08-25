const mongoose = require('mongoose')
const Shop = new mongoose.Schema({
    Icon: { type: String, default: "" },
    Name: { type: String, required: true },
    Type: { type: String, required: true },
    Location: { type: String, required: true },
    ManagerID: { type: String, required: true },
    Introduction: { type: String, required: false },
    operation: { type: Boolean, default: false },
    rank: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    product: { type: Array, default: [] },
    status: { type: String, enum: ['active', 'draft', 'archived'], default: "" }
})
module.exports = mongoose.model('Shop', Shop)