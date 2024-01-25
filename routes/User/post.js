const userSchema = require("../../models/UserLogin/userSchema");
const nodemailer = require("nodemailer");
const template =
  "/home/prologic/Desktop/project/Node-Project/templates/successRegister.html";

 /**
 * @method POST
 * @api 
 * @description
 *  - Specify billing split criteria for sessions involving given users
 */




const post = async (req, res) => {
  try {
    const role = "customer";
    const result = await new userSchema({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      role: role,
    });

    const data = await userSchema.findOne({ email: result.email });

    if (data) {
      res.send(false);
    } else {
      await result.save();
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
        // to: req.body.email,
        to: "tushar@prologictechnologies.in",
        // html: `  <!DOCTYPE html>
        //           <html lang="en">
        //           <head>
        //           <meta charset="UTF-8">
        //           <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //           <title>Document</title>
        //           </head>
        //           <body style="text-align: center;">
        //           <h1 style="text-align: center;">Thankyou ${
        //             req.body.fname + " " + req.body.lname
        //           } for your Submission</h1>`,
        html: require("fs").readFileSync(template, "utf-8"),
        subject: "thank you",
        // attachments: [
        //   {
        //     // file on disk as an attachment
        //     filename: "template.html",
        //     path: template, // stream this file
        //   },
        // ],
      };
      transporter.sendMail(message, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("sent");
        }
      });
      res.send(true);
    }
  } catch (err) {
    res.send(err);
  }
};
module.exports = post;
