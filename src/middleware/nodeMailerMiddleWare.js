import nodemailer from "nodemailer";

export function mailMiddleWare(req, res, next) {
  var transporter = nodemailer.createTransport({
    host: process.env.mailingHost,
    port: process.env.mailingPort,
    auth: {
      user: "process.env.mailingUsename",
      pass: process.env.mailingPassword,
    },
  });
  var mailOptions = {
    from: "noreply@gmail.com",
    to: req.body.email,
    subject: "Thanks for your Order",
    html: `<h2 >Hello ${req.body.name}!</h2>
          <br>Your information is recorded.Your order is placed.
          <br>
          <h4>Sincerely,</h4>
          <h3>Dumpling Store</h3>`,
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
