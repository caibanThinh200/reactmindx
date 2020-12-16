import React, { useState } from 'react'
import '../UserInfo/Information.css'
function Infomation() {
    const [name,setName] = useState("chưa có");
    const [username,setUsername] = useState("chưa có");
    const [birth,setBirth] = useState("chưa có");
    const [created,setCreated] = useState("chưa có");
    const [gmail,setGmail] = useState("chưa có");
    const [phone,setPhone] = useState("chưa có");
    const getInfo = () =>{
        fetch("/User/s/userprofile")
            .then(res => res.json())
            .then(json => {
                setName(json[0].Fullname);
                setUsername(json[0].Username);
                setBirth(json[0].Birth);
                setCreated(json[0].Created_at);
                setGmail(json[0].Gmail);
                setPhone(json[0].phoneNum);
            });
        }
    getInfo();
    return (
        <div className="container" style={{textAlign:"center"}}>
            <div className="information">
                <h1>Thông Tin Cá Nhân</h1>
                <div className="information-input">
                    <form>
                    <div className="inf">
                            <div>
                                <span htmlFor>Họ tên: </span>
                                <span>{name}</span>
                            </div>
                          
                        </div>
                        <div className="inf">
                            <div>
                                <label htmlFor>Tên đăng nhập:  </label>
                                <span>{username}</span>
                            </div>
                            
                        </div>
                        <div className="inf">
                            <div>
                                <label htmlFor>Email:  </label>
                                <span>{gmail}</span>
                            </div>
                           
                        </div>
                        <div className="inf">
                            <div>
                                <label htmlFor>Đổi mật khẩu mới:  </label>
                                <input type="password" placeholder="nhập mật khẩu" required />
                            </div>
                            
                        </div>
                        <div className="inf">
                            <div>
                                <label htmlFor>Nhập lại mật khẩu:  </label>
                                <input type="password" placeholder="nhập mật khẩu" required />
                            </div>
                          
                        </div>
                        <button> Thay đổi</button>
                        <div className="inf">
                            <div>
                                <label htmlFor>Số điện thoại:  </label>
                                <span>{phone}</span>
                            </div>
                           
                        </div>
                        <div className="inf">
                            <div>
                                <label htmlFor>Ngày sinh:  </label>
                                <span>{birth}</span>
                            </div>
                         
                        </div>
                      
                    </form>
                </div>
            </div>
            <div className="avatar">
                <h4>Đổi avarta</h4>
                <div className="avatar-img">
                    <div></div>
                </div>
                <div className="avatar-field">
                    <input type="file" />
                </div>
                {/* <button class="ui fluid teal submit button" onclick="signUpButtonPressed()">up load</button> */}
            </div>
        </div>
    )
}

export default Infomation
