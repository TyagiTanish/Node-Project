const bookings = require("../../../models/Billing/bookingSchema")

module.exports = async (req, res) => {
    const reminders = await bookings.find({ reminder: 'true' }).populate('hotelId').populate('userId');
    res.send(reminders)
}