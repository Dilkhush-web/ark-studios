const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    clientName: { type: String, required: true },
    clientEmail: { type: String, required: true },
    clientPhone: { type: String, required: true },
    eventType: { type: String, required: true }, // e.g., "Cinematic Shoot", "Pre-wedding"
    slotId: { type: mongoose.Schema.Types.ObjectId, ref: 'Slot', required: true },
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);