import axios from "axios";
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    // baseURL: process.env.REACT_APP_API || "http://localhost:4000",
    baseURL: process.env.REACT_APP_API || "https://better-professor-web-app-prod.herokuapp.com/api",
    headers: {
      Authorization: token,
    },
  });
};
