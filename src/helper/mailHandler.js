import nodemailer from "nodemailer";

export function mailSender(req, res) {
  var transporter = nodemailer.createTransport({
    host: process.env.mailingHost,
    port: process.env.mailingPort,
    auth: {
      user: process.env.mailingUsername,
      pass: process.env.mailingPassword,
    },
  });
  var mailOptions = {
    from: req.email,
    to: "dsrsangautam@gmail.com",
    subject: "Contact me message",
    html: `
         <p> Sender name: ${req.name}</p>
          <p> Message: ${req.message} </p>
          `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return { error: error.message[0] };
    } else {
      return "Email was sent successfully: " + info.response;
    }
  });
}
