const mongoose = require('mongoose')


const ShopItems = new mongoose.Schema({
    photo: { type: Array, default: "" },
    name: { type: String, required: true },
    location: { type: String, required: true },
    shop: { type: String, required: true },
    introduction: { type: String, required: false },
    brand: { type: String, required: false },
    price: { type: Number, required: true },
    discount: { type: Number, required: false },
    saleOut: { type: Number, required: false },
    stock: { type: Number, required: true },
    rank: { type: Number, default: 0 },
    specification: { type: Array, required: false },
    createdAt: { type: Date, required: false },
    status: { type: String, enum: ['active', 'draft', 'archived'], default: "" }

})
module.exports = mongoose.model('ShopItems', ShopItems)