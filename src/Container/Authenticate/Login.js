import React, { useState, useEffect, useRef } from 'react'
import { useForm } from "react-hook-form";
import '../csslogin/menu-footer.css'
import '../csslogin/login.css'
import '../csslogin/tailwind.css'
import { BrowserRouter } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";
import Axios from 'axios';
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [check,setCheck] = useState(false);
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);
        const clientInsert = {
            username:username,
            pass:password
        }
        
        Axios.post("/User/login",clientInsert)
        .then(res => {
            console.log(res);
            if(res.data.token){
               
                localStorage.setItem("token",JSON.stringify(res.data));
                setCheck(true);
                alert("Đăng nhập thàng công");
                window.location = "/";
            }
            else{
                alert("Sai tên đăng nhập hoặc mật khẩu");
            }
        })
       };


    return (
        
        <div className="w-4/12 pt-10 pl-10 mx-auto container" >
            
            <div action className="border-4 border-gray-800 bg-white">
                <nav className="border-black bg-black border-opacity-50 h-16 ">
                    <div className=" text-white uppercase text-center font-extrabold text-2xl ">Đăng nhập</div>
                </nav>
                <div className=" py-6 px-5">
                    {/* Khung input */}
                    <Form onSubmit={handleLogin} useRef="form">
                        <span className=" block">
                            <div className="flex items-center relative flex-col ">
                                <Input placeholder="nhập tên người dùng" name id className="border-2 border-blue-400 rounded-none block  bg-gray-100 focus:border-gray-500 text-gray-800 appearance-none w-full py-2 px-3 leading-tight focus:outline-none" onChange={onChangeUsername}
                                    validations={[required]} />
                                <div className="pointer-events-auto absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" />
                                <Input type="password" className="border-2 border-blue-400 rounded-none block  bg-gray-100 focus:border-gray-500 text-gray-800 appearance-none w-full py-2 px-3 leading-tight focus:outline-none mt-5" placeholder="password" onChange={onChangePassword}
                                    validations={[required]} />
                                <button className="border-2 bg-blue-800 text-white w-full appearance-none hover:bg-purple-600 hover:text-white mt-2 h-12 " type="submit" >
                                    {loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    <span>Login</span>
                                </button>

                            </div>
                        </span>
                        {message && (
                            <div className="form-group">
                                <div className="text-red-500" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                    </Form>
                </div>
            </div>
        </div>
                        
    )
}
export default Login;           
           
       

 