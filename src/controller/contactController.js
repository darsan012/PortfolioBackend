import Contactdb from "../models/contactModel.js";
// import { mailSender } from "../helper/mailHandler.js"
import {mailer,mailerAdmin} from '../helper/mailHandler.js'

export const postContact = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).send({ message: "body can not be empty" });

    const contact = new Contactdb({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    // mailSender(contact, res)
    await contact.save();
    let { name, email, message } = req.body;
    await mailer(email,name);
    await mailerAdmin({name,email,message})
    res.send({
      contact,
      message:"contact created successfully",
      statusCode:200,
    })
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
