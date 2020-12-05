// import React, { useState, useEffect, useRef } from 'react'
// import '../csslogin/tailwind.css'
// import axios from 'axios'
// import { useForm } from "react-hook-form";
// import '../csslogin/menu-footer.css'
// import '../csslogin/login.css'

// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import AuthService from "../services/auth.service"
// import { isEmail } from "validator";
// const required = (value) => {
//     if (!value) {
//         return (
//             <div className="text-red-600" role="alert">
//                 this field have to be text
//             </div>
//         )
//     }
// }
// const validEmail = (value) => {
//     if (!isEmail(value)) {
//         <div className="text-red-600" role="alert">
//             this is not a valid email
//         </div>
//     }
// }

// const Vaddress = () => {
//     if (!value) {
//         return (
//             <div className="text-red-600" role="start" >
//                 again
//             </div>
//         )
//     }
// }

// const vusername = (value) => {
//     if (value.length < 3 || value.length > 20) {
//         return (
//             <div className="text-red-600" role="alert">
//                 username have to between 3 and 20 words
//             </div>
//         )
//     }       
// }
// const vpassword = (value) => {
//     if (value.length < 6 || value.length > 40) {
//         return (
//             <div className="alert alert-danger text-red-500" role="alert">
//                 The password must be between 6 and 40 characters.
//             </div>
//         );
//     }

// }
// const Register = (props) => {
//     const form = useRef();
//     const checkBtn = useRef();
//     const [username, setUsername] = useState("")
//     const [pass, setPass] = useState("")
//     const [Fullname, setFullname] = useState("")
//     const [UserAddress, setUserAddress] = useState("")
//     const [Birth, setBirth] = useState("")
//     const [Gmail, setGmail] = useState("")
//     const [successful, setSuccessful] = useState(false);
//     const [message, setMessage] = useState("");
//     const onChangeUsername = (e) => {
//         const username = e.target.value;
//         setUsername(username)
//     }
//     const onChangePass = (e) => {
//         const pass = e.target.value;
//         setPass(pass)
//     }
//     const onChangeFullname = (e) => {
//         const Fullname = e.target.value;
//         setFullname(Fullname)
//     }
//     const onchangeUseraddress = (e) => {
//         const UserAddress = e.target.value;
//         setUserAddress(UserAddress)
//     }
//     const onChangeBirth = (e) => {
//         const Birth = e.target.value;
//         setBirth(Birth)
//     }
//     const onChangeGmail = (e) => {
//         const Gmail = e.target.value;
//         setGmail(Gmail)
//     }
//     const handleRegister = (e) => {
//         e.prevenDefault();

//         setMessage("");
//         setSuccessful(false);



//         if (checkBtn.current.context._errors.length === 0) {
//             AuthService.register(username, pass, Fullname, UserAddress, Birth, Gmail).then(
//                 (response) => {
//                     setMessage(response.data.message);
//                     setSuccessful(true);
//                 },
//                 (error) => {
//                     const resMessage =
//                         (error.response &&
//                             error.response.data &&
//                             error.response.data.message) ||
//                         error.message ||
//                         error.toString();

//                     setMessage(resMessage);
//                     setSuccessful(false);
//                 }
//             );
//         }
//     };


//     return (
//         <div className="w-4/12 pt-10 pl-10 mx-auto container" >
//             <div action className="border-2 border-black bg-white">
//                 <nav className="border-black border-b-2 bg-green-600 border-opacity-50 h-16 ">
//                     <div className=" text-white uppercase text-center font-extrabold text-2xl ">Đăng kí</div>
//                 </nav>
//                 <div className=" py-6 px-5">
//                     {/* Khung input */}
//                     <Form onSubmit="handleRegister" useRef="form">
//                         {!successful && (
//                             <span className=" block">
//                                 <div className="flex items-center relative flex-col ">
//                                     <Input placeholder="nhập tên người dùng" name id className="border-2 border-blue-400 rounded-none block  bg-gray-100 focus:border-gray-500 text-gray-800 appearance-none w-full py-2 px-3 leading-tight " onChange={onChangeUsername} validations={[required, vusername]}  />

//                                     <Input placeholder="nhập pass" type="password" id className="border-2 border-blue-400 rounded-none block  bg-gray-100 focus:border-gray-500 text-gray-800 appearance-none w-full py-2 px-3 leading-tight focus:outline-none mt-5" onChange={onChangePass} validations={[required, vpassword]} />


//                                     <Input type="text" className="border-2 border-blue-400 rounded-none block  bg-gray-100 focus:border-gray-500 text-gray-800 appearance-none w-full py-2 px-3 leading-tight focus:outline-none mt-5" placeholder="nhập tên" onChange={onChangeFullname} validations={[required]} />

//                                     <Input type="text" className="border-2 border-blue-400 rounded-none block  bg-gray-100 focus:border-gray-500 text-gray-800 appearance-none w-full py-2 px-3 leading-tight focus:outline-none mt-5" placeholder="UserAddress" onChange={onchangeUseraddress} validations={[required]} />

//                                     <Input type="text" className="border-2 border-blue-400 rounded-none block  bg-gray-100 focus:border-gray-500 text-gray-800 appearance-none w-full py-2 px-3 leading-tight focus:outline-none  mt-5 " placeholder="nhập ngày sinh với YY-MM-DD" onChange={onChangeBirth} validations={[required]} />

//                                     <Input type="text" className="border-2 border-blue-400 rounded-none block  bg-gray-100 focus:border-gray-500 text-gray-800 appearance-none w-full py-2 px-3 leading-tight focus:outline-none mt-5" placeholder="gmail" onChange={onChangeGmail} validations={[required, validEmail]} />

//                                     {/* <CheckButton className="border-2 bg-blue-800 text-white w-full appearance-none hover:bg-purple-600 hover:text-white mt-2 h-12 " > /> */}
//                                     <button className="border-2 bg-blue-800 text-white w-full appearance-none hover:bg-purple-600 hover:text-white mt-2 h-12 " ref={checkBtn} value="send" >đăng kí ``````````</button>
//                                 </div>
//                             </span>
//                         )}
//                         {message && (
//                             <div className="form-group">
//                                 <div
//                                     className={successful ? "alert alert-success" : "alert alert-danger"}
//                                     role="alert"
//                                 >
//                                     {message}
//                                 </div>
//                             </div>
//                         )}
//                         <CheckButton style={{ display: "none" }} ref={checkBtn} />
//                     </Form>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Register; 
import React, { useState, useEffect, useRef, } from 'react'
import '../csslogin/tailwind.css'
import axios from 'axios'

const register = () => {
    // const [signUp, setSignUp] = useState({ username: '', pass: '', Fullname: '', UserAddress: '', Birth: '', Gmail: '' })
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const [Fullname, setFullname] = useState("")
    const [UserAddress, setUserAddress] = useState("")
    const [Birth, setBirth] = useState("")
    const [Gmail, setGmail] = useState("")
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username)
    }
    const onChangePass = (e) => {
        const pass = e.target.value;
        setPass(pass)
    }
    const onChangeFullname = (e) => {
        const Fullname = e.target.value;
        setFullname(Fullname)
    }
    const onchangeUseraddress = (e) => {
        const UserAddress = e.target.value;
        setUserAddress(UserAddress)
    }
    const onChangeBirth = (e) => {
        const Birth = e.target.value;
        setBirth(Birth)
    }
    const onChangeGmail = (e) => {
        const Gmail = e.target.value;
        setGmail(Gmail)
    }
    // const handleChange = (e) => {
    //     setSignUp({...signUp,[e.target.name] : e.target.value })
    //     // setSignUp({[e.target.name] : e.target.value })
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // API_URL = 'https://5fad334d2ec98b0016047fb8.mockapi.io/register'
        axios.post('https://5fad334d2ec98b0016047fb8.mockapi.io/register', {
            username,
            pass, 
            Fullname,
            UserAddress,
            Birth,
            Gmail
        })
            .then(function (reponse) {
                console.log(reponse)
            })
            .catch(function (error) {
                return error;
            })
    }
    // handleClick = () => { 
    //     textInput.current.focus();
    // }
    


    return (
        <div className="w-4/12 pt-10 pl-10 mx-auto container" >
            <div action className="border-2 border-black bg-white">
                <nav className="border-black border-b-2 bg-green-600 border-opacity-50 h-16 ">
                    <div className=" text-white uppercase text-center font-extrabold text-2xl ">Đăng kí</div>
                </nav>
                <div className=" py-6 px-5">
                    {/* Khung input */}
                    <form action="POST" onSubmit={handleSubmit} >

                        <span className=" block">
                            <div className="flex items-center relative flex-col ">
                                <input placeholder="nhập tên người dùng" name id className="border-2 border-blue-400 rounded-none block  bg-gray-100 focus:border-gray-500 text-gray-800 appearance-none w-full py-2 px-3 leading-tight " type="text"  onChange={onChangeUsername} />

                                <input placeholder="nhập pass" type="password" id className="border-2 border-blue-400 rounded-none block  bg-gray-100 focus:border-gray-500 text-gray-800 appearance-none w-full py-2 px-3 leading-tight focus:outline-none mt-5"  onChange={onChangePass} />


                                <input type="text" className="border-2 border-blue-400 rounded-none block  bg-gray-100 focus:border-gray-500 text-gray-800 appearance-none w-full py-2 px-3 leading-tight focus:outline-none mt-5" placeholder="nhập tên"  onChange={onChangeFullname} />

                                <input type="text" className="border-2 border-blue-400 rounded-none block  bg-gray-100 focus:border-gray-500 text-gray-800 appearance-none w-full py-2 px-3 leading-tight focus:outline-none mt-5" placeholder="UserAddress"  onChange={onchangeUseraddress} />

                                <input type="text" className="border-2 border-blue-400 rounded-none block  bg-gray-100 focus:border-gray-500 text-gray-800 appearance-none w-full py-2 px-3 leading-tight focus:outline-none  mt-5 " placeholder="nhập ngày sinh với YYYY-MM-DD"  onChange={onChangeBirth} />

                                <input type="text" className="border-2 border-blue-400 rounded-none block  bg-gray-100 focus:border-gray-500 text-gray-800 appearance-none w-full py-2 px-3 leading-tight focus:outline-none mt-5" placeholder="Gmail" onChange={onChangeGmail} />

                                {/* <CheckButton className="border-2 bg-blue-800 text-white w-full appearance-none hover:bg-purple-600 hover:text-white mt-2 h-12 " > /> */}
                                <button className="border-2 bg-blue-800 text-white w-full appearance-none hover:bg-purple-600 hover:text-white mt-2 h-12 " type="submit"  >đăng kí </button>
                            </div>
                        </span>



                    </form>
                </div>
            </div>
        </div>
    )


}
export default register;