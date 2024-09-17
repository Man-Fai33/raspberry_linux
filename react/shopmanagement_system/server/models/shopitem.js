const mongoose = require('mongoose')


const ShopItems = new mongoose.Schema({
    photo: { type: Array, default: "" },
    title: { type: String, required: true },
    location: { type: String, required: true },
    shop: { type: String, required: true },
    introduction: { type: String, required: false },
    price: { type: Number, required:true },
    discount: { type: Number, required: false },
    saleOut: { type: Number, required: false },
    rank: { type: Number, default: 0 },
    product: { type: Array, default: [] },
    createdAt: { type: Date, required: false },
    status: { type: String, enum: ['active', 'draft', 'archived'], default: "" }
})
module.exports = mongoose.model('ShopItems', ShopItems)