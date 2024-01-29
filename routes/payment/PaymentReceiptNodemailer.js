const ejs = require('ejs')
const nodemailer = require('nodemailer');
const htmlPdfConvert = require('./html-pdf-convert');

module.exports = async (email,name,transactionId,amount,type,paymentStatus)=>{
    const template = await ejs.renderFile(`views/paymentReciept.ejs`,{
        name,
        transactionId,
        amount,
        type,
        paymentStatus
  });
 key =  `${transactionId}-${Date.now}.pdf`
const buffer = await htmlPdfConvert(template,key);
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
        to: 'pallavi@prologictechnologies.in',
        subject: "thank you",
        html:`<h5>Here is Your payment Reciept<h5>`,
        attachments: [
          {
            // file on d``isk as an attachment
            filename: 'paymentReciept.pdf',
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
}