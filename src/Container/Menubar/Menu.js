import React, { useState, useEffect } from 'react'
import Register from '../Authenticate/Register';
import Header from '../Authenticate/Header';
import Login from '../Authenticate/Login';
import ContentTop from '../Content-Top/ContentsTop';
import ContentBottom from '../Content-Bottom/ContentBottom';
import Footer from '../Footer/Footer'
import UserInfo from '../UserInfo/Information';
import Cart from '../Cart/Cart';
import FooterCart from '../Cart/Footer';
import HeaderCart from '../Cart/Header'
import '../csslogin/tailwind.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Menubar() {
    const [fullname, setFullname] = useState("");
    const user = (localStorage.getItem("token"));
   
    
           
         
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        window.location = "/SignIn";
    }
    const getUserInfo = () => {

        fetch("/User/s/userprofile")
            .then(res => res.json())
            .then(json => {
                if(user){
                    setFullname(json[0].Fullname);
                }
                else{
                    alert("Đăng nhập tại đây, nếu chưa có tài khoản thì ra kia đăng ký");
                    
                }
            })
            .catch(e => {
                alert("Session exprires");
              
                
            })
    }
    useEffect(() => {
        getUserInfo();
    }, []);
    return (
        
        <Router>
            {
                user ? (
                    <nav>
                    <div className="container mx-auto">
                        <div className="flex flex-row justify-between py-3">
                            <div className="flex flex-rowg gap-5">
                                <a><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeYBiOjHAdPCbd4IaIkzOfsAkqUEdrrqPB2w&usqp=CAU" width="50" height="50"></img></a>
                                <Link to="/">Trang chủ</Link>
                                <Link to="/">Lien he</Link>
                            </div>
                            <div className="flex flex-rowg gap-5">
                                <input type="text" placeholder="Nhập địa chỉ giao hàng" className="px-2"  />
    
                            </div>
                            <div className="flex flex-row gap-5">
                               
                                <span>Xin chào {fullname}</span>
                               <Link to="/user">Profile</Link>
                                <span className="flex flex-row items-center gap-2">
                                    <Link to="/cart" className="mb-2"> <i class="fa fa-shopping-cart"></i>Giỏ Hàng</Link>
                                    
                                </span>
                                <span onClick={(e)=>{logout(e)}}>Đăng xuất</span>
                            </div>
                        </div>
                    </div>
                    </nav>
                ):
                (
                    <nav>
                    <div className="container mx-auto">
                        <div className="flex flex-row justify-between py-3">
                            <div className="flex flex-rowg gap-5">
                                <a><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeYBiOjHAdPCbd4IaIkzOfsAkqUEdrrqPB2w&usqp=CAU" width="50" height="50"></img></a>
                                <Link to="/">Trang chủ</Link>
                                <Link to="/">Lien he</Link>
                            </div>
                            <div className="flex flex-rowg gap-5">
                                <input type="text" placeholder="Nhập địa chỉ giao hàng" className="px-2"  />
    
                            </div>
                            <div className="flex flex-row gap-5">
                                <Link to="/SignUp">Đăng ký</Link>
                                <Link to="/SignIn">Đăng nhập</Link>
                                <div className="flex flex-row items-center gap-2">
                                    <Link to="/cart" className="mb-2">Gio Hang</Link>
                                    <i class="fas fa-shopping-cart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </nav>
                )
            }
              <Switch>
                <Route path="/SignIn">
                    <Login />


                </Route>
                <Route path="/SignUp">
                    <Register/>
                </Route>
                <Route path="/user">
                    <UserInfo/>
                </Route>
                <Route path="/cart">
                 
                    <Cart/>
                    <FooterCart/>
                </Route>
                <Route exact path="/">
                    <ContentTop />
                    <ContentBottom />
                    <Footer />

                </Route>

            </Switch>
        </Router>

    )
}

export default Menubar

              
            

         