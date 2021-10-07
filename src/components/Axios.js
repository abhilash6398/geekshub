import axios from "axios";
const instance = axios.create({
  baseURL: "http://3.109.247.241:6778/api/v2/customer",
});
export default instance;
