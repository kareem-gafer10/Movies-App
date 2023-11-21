import axios from "axios";

const baseInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default baseInstance;
