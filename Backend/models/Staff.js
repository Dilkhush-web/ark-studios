const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }, // 👈 Ye rahi wo sabse zaroori nayi line!
    phone: { type: String, required: true }, 
    role: { type: String, required: true },  
    isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

// YE LINE SABSE ZAROORI HAI - Ye isko ek Model (Function) banati hai
module.exports = mongoose.model('Staff', staffSchema);