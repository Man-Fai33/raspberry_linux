const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    /* 
    Possible values for role include the following:
    1. "Visitor"
    2. "User"
    3. "Manager"
    4. "Admin"
    */
    password: { type: String },
    role: { type: String, enum: ['user', 'employee', 'manager', 'admin'], default: 'user' },
    phone: { type: String, required: false },
    introduction: { type: String, default: "" },
    location: String,
    gender: Boolean,
    date: Date,
    blog: { type: Array, required: false, default: [] },
    shop: { type: Array, required: false, default: [] },
    iconUrl: { type: String, default: "" }
});
module.exports = mongoose.model('User', User);
module.exports.UserSchema = User;