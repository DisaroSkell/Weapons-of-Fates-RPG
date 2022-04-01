import axios from "axios";
export default axios.create({
  baseURL: "https://weaponsoffates-api",
  headers: {
    "Content-type": "application/json"
  }
});