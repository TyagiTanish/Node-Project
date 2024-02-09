const nodemailer = require('nodemailer')
module.exports = ()=>{
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "umesh.atrii0712@gmail.com",
      pass: "zscojnmjdcbisfwo",
    },
  });
  var message = {
    from: "umesh.atrii0712@gmail.com",
    to: "tanish@prologictechnologies.in",
    subject: "thank you",
    html: `<h5>This is a Booking remainder<h5>`,
  };
  transporter.sendMail(message, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("sent");
    }
  });
};