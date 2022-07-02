import nodemailer from "nodemailer";
import "dotenv/config";

let transporter = nodemailer.createTransport({
  pool: true,
  service: process.env.EMAIL_SERVICE_PROVIDER,
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

export async function mailer(mailTo, name) {
  try {
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: mailTo,
      subject: "Message Received",
      text: `I am happy to see your email at ${new Date().toDateString()}.
            Thank you ${name} for visiting my website. I will look through your message and contact you back as soon as possible.
            sincerely,
          Darshan Gautam`,
      html: `Received your message at <b>${new Date().toDateString()}.</b><br/><br />
    Thank you <b>${name}</b> for visiting my website. <br/><br/>I will look through your message and contact you back as soon as possible.<br/><br />
    <i>Sincerely</i>,<br/>
    <i>Darshan Gautam</i><br/>`,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
export async function mailerAdmin({ name, email, message }) {
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.ADMIN_EMAIL,
      subject: "New Message Received",
      text: `Received message at ${new Date().toDateString()}.
        Sender Name: ${name} , email Address: ${email},[ ${message} ]`,
      html: `Received message at <b>${new Date().toDateString()}.</b><br/><br />
      <b>Sender Name:</b> <i>${name},</i><br/><br/>
      <b>Email ID:</b> <i>${email},</i> <br/><br/>
       <b>Message:</b><br/>
       {<br/>
        ${message}
        <br/>
      }`,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
