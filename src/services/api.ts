import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://passeiociclistico.getranmossoro.com.br/api",
});

export default api;
