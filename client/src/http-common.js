import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:6942",
  headers: {
    "Content-type": "application/json"
  }
});