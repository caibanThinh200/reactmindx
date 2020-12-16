import React from 'react'
import '../Content-Bottom/ContentBottom.css'
function ContentBottom() {
    return (
        <div className="contens-column">
            <div className="contens-column-title-top">
                <h3>
                    Mang đến cho bạn món ăn ưa thích mỗi ngày
          </h3>
                <p>
                    Nhanh chóng xoa dịu cơn thèm ăn của bạn với những món ngon yêu thích và dịch vụ giao hàng “thần
                    tốc”.
                    ABS hiện đang được thử hoạt đọng trên cả nước, nhằm phục vụ cho nhu cầu của ngừoi dùng.
                    Chúng tôi sẽ cố gằng giảm thiểu ít nhất thời giao hàng xuống thấp nhất có thể, để cho người dùng có
                    những trải nghiệm tốt nhất trong thời gian tới!
          </p>
            </div>
            <div className="title-img">
                <div className="title-top-img">
                    <div className="title-top-img-1">  </div>
                    <h4>Đa dạng sự lựa chọn</h4>
                    <p> Tất cả những sản phẩm của ABS đều được qua kiểm định, mang cho bạn bữa ăn an toàn nhất,
              bạn đang ở đâu.</p>
                </div>
                <div className="title-top-img">
                    <div className="title-top-img-2">  </div>
                    <h4>Đội ngũ giao hàng thần tốc</h4>
                    <p> ABS mang đến cho bạn những bữa ăn nóng hổi và ngon lành nhất, dù
              bạn đang ở đâu.</p>
                </div>
            </div>
            <div className="contens-column-center">
                <h3>
                    Đơn hàng của bạn sẽ được bảo quản như thế nào
          </h3>
                <p>
                    ABS sẽ bảo quản đơn của bạn bằng túi &amp; thùng để chống nắng mưa, giữ nhiệt... trên đường đi một cách
                    tốt nhất.
          </p>
                <div className="contens-column-center-img">
                    <div></div>
                </div>
            </div>
            <div className="contens-column-bottom">
                <p>ReView</p>
                <a href>View All &gt; </a>
                <div className="videoreview">
                    <iframe src="https://www.youtube.com/embed/DTI5FHbzK9s">
                    </iframe>
                    <iframe src="https://www.youtube.com/embed/Ia31rOXaEtU">
                    </iframe>
                    <iframe src="https://www.youtube.com/embed/Cc6GN-8t4gU">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default ContentBottom
