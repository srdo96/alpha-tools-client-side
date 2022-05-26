import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://safe-retreat-20126.herokuapp.com/",
});

export default fetcher;
