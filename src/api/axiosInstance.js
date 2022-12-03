import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://alpha-tools-server-side-production.up.railway.app/",
});

export default fetcher;
