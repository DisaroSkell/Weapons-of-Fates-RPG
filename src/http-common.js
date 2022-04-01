import axios from "axios";
export default axios.create({
  baseURL: "https://weaponsoffates-api.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});