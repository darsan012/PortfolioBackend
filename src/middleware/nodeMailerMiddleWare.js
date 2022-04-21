import nodemailer from "nodemailer";

export function mailMiddleWare(req, res, next) {
  var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d40f253140823c",
      pass: process.env.mailingPassword,
    },
  });
  var mailOptions = {
    from: "d40f253140823c",
    to: req.body.email,
    subject: "Sending Email using node.js",
    text: `Your response has been received and it was ..|.. \'${req.body.message}\'`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log({ error: error });
    } else {
      console.log("Email was sent successfully: " + info.response);
    }
  });
  next();
}
