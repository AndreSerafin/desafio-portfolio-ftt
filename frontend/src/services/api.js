import axios from "axios";

const api = axios.create({
  baseURL: "http://172.17.1.235:3001",
});

export default api;
