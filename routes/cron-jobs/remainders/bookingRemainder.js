const cron = require("node-cron");
const bookings = require("../../../models/Billing/bookingSchema");
const bookingRemainderMail = require('./bookingRemainderMail')


module.exports = () => {
  const remainder = (Bookings) => {
    Bookings.map((booking) => {
      const bookingDate = new Date(booking?.bookFrom).getDate();
      const curretDate = new Date(Date.now()).getDate();

      if (
        booking?.status != "Canceled" &&
        booking?.status != "pending" &&
        booking?.status != "rejected"
      ) {
          if (bookingDate - curretDate <= 1 && bookingDate - curretDate >= 0) {
            bookingRemainderMail()
          }
      }
    });
  };
  cron.schedule("0 * * * *", async () => {
    const Bookings = await bookings.find();
    remainder(Bookings);
  });
};
