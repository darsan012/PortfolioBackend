import nodemailer from "nodemailer";

export function mailSender(req, res) {
  var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d40f253140823c",
      pass: process.env.mailingPassword,
    },
  });
  var mailOptions = {
    from: req.email,
    to: "dsrsangautam@gmail.com",
    subject: "Contact me message",
    html: `
          <p> Message: ${req.message} </p>
          <p> Sender name: ${req.name}</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return { error: error };
    } else {
      return "Email was sent successfully: " + info.response;
    }
  });
}
