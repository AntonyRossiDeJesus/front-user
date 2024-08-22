import axios from "axios";

const api = axios.create({
  baseURL: "https://user-api-ivory.vercel.app/api",
  //baseURL: "http://localhost:3001/api",
  withCredentials: true,
});

export default api;
