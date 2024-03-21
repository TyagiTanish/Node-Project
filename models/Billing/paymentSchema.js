const mongoose = require('mongoose');
const paymentSchema = mongoose.Schema({
    bookingId: {
        type: mongoose.Types.ObjectId,
        ref: 'bookings'
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'userdetails'
    },
    amount: {
        type: String
    },
    transactionId: {
        type: String
    },
    type: {
        type: String,
    },
    currency: {
        type: String,
        default: 'INR'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const payments = mongoose.model('payments', paymentSchema);
module.exports = payments;
