const ejs = require("ejs");
const nodemailer = require("nodemailer");
const htmlPdfConvert = require("./html-pdf-convert");

module.exports = async (
  hotelName,
  addressLine1,
  addressLine2,
  transactionId,
  date,
  roomType,
  amount,
  totalRooms,
  days,
  email,
  phone,
  name,
  totalRoomPrice
) => {
  const template = await ejs.renderFile(`views/CompleteBill.ejs`, {
    hotelName,
    addressLine1,
    addressLine2,
    transactionId,
    amount,
    days,
    date,
    totalRooms,
    roomType,
    email,
    phone,
    name,
    totalRoomPrice,
  });
  key = `${transactionId}-${Date.now}.pdf`;
  const buffer = await htmlPdfConvert(template, key);
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
  console.log('hello');
  var message = {
    from: "umesh.atrii0712@gmail.com",
    to: "tanish@prologictechnologies.in",
    subject: "thank you",
    html: `<h5>Here is Your payment Reciept<h5>`,
    attachments: [
      {
        // file on d``isk as an attachment
        filename: "paymentReciept.pdf",
        content: buffer, // stream this file
      },
    ],
  };
  transporter.sendMail(message, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("sent");
    }
  });
};
