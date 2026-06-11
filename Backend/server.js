// 1. Tools Import (Dotenv sabse upar hona chahiye)
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// 2. Waiter (App) Setup
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware Setup
app.use(cors({
    origin: ['http://localhost:5173'], // Frontend ko permission
    credentials: true
}));
app.use(express.json());

// 3. 📦 KITCHEN (DATABASE) CONNECTION
// Ye code .env file se tumhara MONGO_URI link uthayega
mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000, 
    family: 4 // Zabardasti IPv4 use karwayega
})
.then(() => {
    console.log("📦 Kitchen (MongoDB) Connected Successfully! 🔥");
})
.catch((error) => {
    console.log("❌ Database connection failed:", error.message);
});

// 4. Routes (Menu)

// Default Route
app.get('/', (req, res) => {
    res.send("<h1>ARK Studio is running! 🎥</h1>");
});

// Health Check API
app.get('/api/health', (req, res) => {
    res.json({ status: "Success", message: "Backend Zinda Hai! 🔥" });
});

// Dummy API for Frontend Development
app.get('/api/slots', (req, res) => {
    const dummySlots = [
        { _id: "101", date: "2026-06-15", time: "10:00 AM", isBooked: false },
        { _id: "102", date: "2026-06-15", time: "02:00 PM", isBooked: true },
        { _id: "103", date: "2026-06-16", time: "11:00 AM", isBooked: false },
        { _id: "104", date: "2026-06-16", time: "04:00 PM", isBooked: false }
    ];
    
    res.json({
        success: true,
        message: "Dummy slots fetched successfully!",
        data: dummySlots
    });
});

// 5. Shutter Kholna
app.listen(PORT, () => {
    console.log(`🚀 Server daud raha hai: http://localhost:${PORT}`);
});