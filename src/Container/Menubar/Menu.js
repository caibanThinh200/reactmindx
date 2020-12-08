
import React,{useState,useEffect} from 'react'
import '../Menubar/Menu.css'
import Register from '../Authenticate/Register';
import Header from '../Authenticate/Header';
import Login from '../Authenticate/Login';
import ContentTop from '../Content-Top/ContentsTop';
import ContentBottom from '../Content-Bottom/ContentBottom';
import Footer from '../Footer/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
    
function Menubar() {
    const [fullname,setFullname] = useState("");
    const user =JSON.parse(localStorage.getItem("token"));
  
    const logout = (e) =>{
        e.preventDefault();
        localStorage.removeItem("token");
        window.location = "/";
    }
    const getUserInfo = () =>{
       
        fetch("/User/s/userprofile")
        .then(res => res.json())
        .then(json => setFullname(json[0].Fullname))
        .catch(e=>{
            alert("Session exprires");
            console.log(1);
            //window.location = "/SignIn"
        })
    }
    useEffect(()=>{
        getUserInfo();
    },[]);
    return (
        <Router>
        <nav className="menu">
            <div className="menu-left float-left w100">
                <div className="menu-logo float-left w10 ">
                    <a href><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeYBiOjHAdPCbd4IaIkzOfsAkqUEdrrqPB2w&usqp=CAU" alt="" />
                    </a>
                </div>
                <div className="menu-center float-left w35">
                    <ul>
                        
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        
                        <li>
                            <Link to ="/Cart">Giỏ hàng</Link>
                        </li>
                      
                        <li>
                            <a href>Liên hệ</a>
                        </li>
                    </ul>
                         
                </div>
                {
                    user ? 
                    <div className="menu-right float-left w55">
                    <button className="bt-giaohang">GIAO NGAY</button>
                    <input type="text" placeholder="Nhập địa chỉ giao hàng" />
                    <span>Hello {fullname}</span>
                    <button className="signUp" onClick={(e)=>{logout(e)}}>ĐĂNG XUẤT</button>
                </div>:
                  <div className="menu-right float-left w55">
                  <button className="bt-giaohang">GIAO NGAY</button>
                  <input type="text" placeholder="Nhập địa chỉ giao hàng" />
                  <button className="bt-dangnhap"><Link to="/User">ĐĂNG NHẬP</Link></button>
              </div>

                }
                
            </div>
            <div className="clear" />
        </nav>
        
        <Switch>
            <Route path="/User">
                <Header/>
               
               
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
