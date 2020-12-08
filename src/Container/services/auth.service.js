import axios from "axios";

const API_URL = "/User";

const register = (username, pass, Fullname, UserAddress,Birth,Gmail) => {
  console.log(1112);
  let data = {
    Username:username,
    Pass:pass,
    Fullname:Fullname,
    UserAddress:UserAddress,
    Birth:Birth,
    Gmail:Gmail
  }
  axios.post(API_URL +  {
    data:data
  },(err,res)=>{
    if(err) console.log(err)
    if(res) console.log(res);
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username:username,
      password:password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  
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