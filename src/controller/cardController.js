import axios from "axios";
// import Carddb from "../models/cardModel.js";

async function getUser(req, res) {
  try {
    const response = await axios.get(
      "https://api.github.com/users/darsan012/repos"
    );
    const userData = response.data;

    // console.log(response.data);
    let projectData = userData.map((data) => ({
      projectId: data.id,
      projectTitle: data.name,
      projectBody: data.description,
      projectLink: data.html_url,
    }));
    // console.log(projectData);
    // await cardData.save();
    res.status(200).send(projectData);
  } catch (error) {
    console.error(error.message);
  }
}
export default getUser;
