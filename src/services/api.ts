import axios from "axios";

export const api = axios.create({
  baseURL: "https://mypet-project-fake-api.onrender.com",
  timeout: 5000,
});