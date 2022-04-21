import Contactdb from "../models/contactModel.js";

export const postContact = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).send({ message: "body can not be empty" });

    const contact = new Contactdb({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    await contact.save();
    res.status(200).send({ message: "message was sucessfully send" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
