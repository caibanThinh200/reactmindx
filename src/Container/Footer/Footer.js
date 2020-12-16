import React from 'react'
import '../Footer/Footer.css'
function Footer() {
    return (
        <footer style={{ height: "30%" }}>
            <div className="footer-item">
                <h3> Công ty</h3>
                <p><a href>Giới thiệu </a></p>
                <p><a href>Trung tâm trợ giúp </a></p>
                <p><a href>Quy chế </a></p>
                <p><a href>Điều khoản sử dụng </a></p>
                <p><a href>Giải quyết khiếu nại </a></p>
                <p><a href>Liên hệ </a></p>
                <p><a href>Hợp tác nhân viên giao tiếp </a></p>
            </div>
            <div className="footer-item">
                <h3> Hỗ trợ khách hàng</h3>
                <p><a href>Thông tin chuyển khoản </a></p>
                <p><a href>Phí giao hàng </a></p>
                <p><a href>Câu hỏi thường gặp </a></p>
                <p><a href>Bảng tin công ty</a></p>
                <p><a href>Video</a></p>
            </div>
            <div className="clears" />
            <div className="footer-item logo">
                <a href="./login.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeYBiOjHAdPCbd4IaIkzOfsAkqUEdrrqPB2w&usqp=CAU" alt="" /></a>
                <p>© 2020 Now - A Foody Corporation</p>
                <a href="#"><span className="fab fa-facebook-f" /></a>
                <a href="#"><span className="fab fa-instagram" /></a>
            </div>
            <div className="footer-item">
                <h3>Địa chỉ công ty</h3>
                <p>Công ty cổ phần ...</p>
                <p>Tầng 10, tòa nhà Sonatus,</p>
                <p>15 Lê Thánh Tôn, phường Bến Nghé, Quận 1</p>
                <p>Giấy CN ĐKDN số: 0311828036</p>
                <p>Sở Kế hoạch và Đầu tư TP.HCM cấp ngày 11/6/2012,</p>
                <p>sửa đổi lần thứ 21, ngày 04/10/2019</p>
                <p>Số điện thoại: 1900 2042</p>
            </div>
            <div className="clear" />
            <hr />
            <div className="text">
                <p> © 2050 công ty cổ phần thương mại dịch vụ FOODY NOW 22 Trịnh Đình Thảo,
                  phường Hoà Thạnh,
                  quận
                  Tân
                  Phú, TPHCM
                  Số
                  giấy phép ĐKKD: 0312867172 do sở kế hoạch đầu tư TPHCM ngày 9/2/1998.
          </p>
            </div>
            <div className="clear" />
        </footer>
    )
}

export default Footer
