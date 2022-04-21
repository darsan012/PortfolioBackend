import axios from "axios";

async function getUser() {
  try {
    const response = await axios.get(
      "https://api.github.com/users/darsan012/repos"
    );
    const userData = response.data;
    console.log(response.data);
    userData.map((data, index) => {
      console.log(data.name, data.description, data.html_url);
    });
  } catch (error) {
    console.error(error);
  }
}
getUser();
