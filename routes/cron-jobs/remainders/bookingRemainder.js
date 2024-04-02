const cron = require("node-cron");
const bookings = require("../../../models/Billing/bookingSchema");
const bookingRemainderMail = require('./bookingRemainderMail')


module.exports = () => {
  const remainder = (Bookings) => {

    Bookings.map(async (booking) => {
      const bookingDate = booking?.bookFrom.split(" ");
      const bookingDay = parseInt(bookingDate[1]);
      const curretDate = new Date(Date.now()).getDate();
      if (
        booking?.status === 'accepted' && booking?.reminder === 'false'
      ) {
        if (bookingDay - curretDate <= 1 && bookingDay - curretDate >= 0) {
          bookingRemainderMail()
          await bookings?.findByIdAndUpdate({ _id: booking._id }, {
            $set: {
              reminder: 'true'
            }
          })

        }
      }
    });
  };
  cron.schedule("0 * * * *", async () => {                 //0 * * * *
    const Bookings = await bookings.find();
    remainder(Bookings);
  });
};
