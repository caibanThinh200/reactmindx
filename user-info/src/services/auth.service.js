import axios from "axios";

const API_URL = "http://10.5.10.119:3010/User/";

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

const login = (username, password) => {
  return axios
    .post(API_URL +"User"+ "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
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