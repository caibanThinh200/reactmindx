import React, {useState, useEffect} from 'react'
import '../csslogin/tailwind.css'
import Register from '../Authenticate/Register';
import Login from '../Authenticate/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = () => {
    return(
      <Router>
        <div className="">
      <nav className="bg-white box-border py-2">
        <div className="flex flex-row justify-between items-center container mx-auto">
          <div className="text-white uppercase flex flex-row gap-5">
            <a href="" className='text-black'>đồ ăn</a>
            <a href="">Nước uống</a>
            <a href="">đặc bàn</a>
            <a href="">liên hệ</a>
          </div>
          <div>
            <button className="focus:outline-none " >
              {/* <i className="fas fa-home text-white text-lg"  ></i> */}
              <a href="" className=''><img className='text-lg'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeYBiOjHAdPCbd4IaIkzOfsAkqUEdrrqPB2w&usqp=CAU"
                            alt="" />
                    </a>
            </button>
            
          </div>
          <div className="text-white flex flex-row gap-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg uppercase"><Link to="/">đăng kí</Link></button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg uppercase"><Link to ="/SignIn">đăng nhập</Link></button>
          </div>
        </div>
      </nav>
    </div>
    <Switch>
      <Route exact path="/">
        <Register/>
      </Route>
    
      <Route path ="/SignIn">
        <Login/>
      </Route>
    </Switch>
    </Router>
    )
}
export default Header;
