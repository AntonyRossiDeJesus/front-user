import axios from "axios";

const api = axios.create({
  baseURL: "https://user-api-ivory.vercel.app/api",
  withCredentials: true,
});

export default api;
