import axios from "axios";
const userAxios = axios.create()
const API_URL = "http://localhost:3000/User/";

const register = (username, pass, Fullname, UserAddress,Birth,Gmail) => {
  return axios.post(API_URL +  {
    username,
    pass,
    Fullname,
    UserAddress,
    Birth,
    Gmail
  });
};

const login = (username, pass) => {
  return axios
    .post(API_URL +"User"+ "login", {
      username,
      pass,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
    return response.data;
    console.log(response.data)
    });
    
};
      


const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
}