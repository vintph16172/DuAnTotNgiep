
import React from 'react'
import {  useNavigate } from 'react-router-dom'
import Footer from '../Component/Footer'
import HeaderComponent from '../Component/HeaderHome'
// import Count from '../features/count/Count'
// import Product from '../features/product/Product'


const Home = () => {
    const navigate = useNavigate();
    const startLearning = () => {
           const existUser = localStorage.getItem("user") ? localStorage.getItem("user") : ""; 
        //    console.log(localStorage.getItem("user"));
           
        if (!existUser) {
            navigate('/login')
        }else{
            navigate('/learning')
        }
    }
    return (
        <div>
            <HeaderComponent/>
            <div>
               
                {/* end header */}
                <section className="banner">
                    <div className="image">
                        <a ><img src="../image/image 1.png" className='home__img__banner'  /></a>
                    </div>
                    <div className="start">
                        <p className="start-title">Cách học ngôn ngữ miễn phí, vui nhộn và hiệu quả</p>
                        <button onClick={() => startLearning()} className="btn-start-1 btn__start__learning">Bắt đầu học</button>
                        <button className="btn-start-2 btn__join__learning">Tôi đã có tài khoản</button>
                    </div>
                </section>
                {/* end banner  */}
                <section className="vougue">
                    <p className="title">VOUGE là gì ?</p>
                    <p className="title-content">VOGUE là website tốt nhất trên thế giới giúp bạn học nói tiếng Anh thành thạo như người
                        bản xứ
                        một cách hiệu quả hơn, dễ dàng hơn, tiết kiệm hơn</p>
                    <div className="content">
                        <div className="image">
                            <a ><img src="../image/image 2.png"  /></a>
                        </div>
                        <p className="content2">Công nghệ Trí Tuệ Nhân Tạo (A.I.) của VOGUE là độc quyền được phát triển riêng cho mục
                            đích hướng dẫn người dùng phát âm tiếng Anh.
                        </p>
                    </div>
                    <div className="content">
                        <div className="image">
                            <a ><img src="../image/image 3.png"  /></a>
                        </div>
                        <p className="content2">VOGUE như là gia sư bản địa trực tuyến của riêng bạn,luôn sẵn sàng giúp bạn luyện tập
                            24/7 với phản hồi tức thì và hướng dẫn chính xác tuyệt dối.</p>
                    </div>
                </section>
                {/* end vougue */}
                <section className="reason">
                    <p className="title">Lý do bạn nên học cùng VOGUE</p>
                    <div className="content">
                        <div className="box">
                            <p className="title-box">Truyền động lực học</p>
                            <p className="title-box2">Chúng tôi giúp người học dễ dàng xây dựng
                                thói quen học tập, qua những tính năng mô
                                phỏng trò chơi, các thử thách vui vẻ.</p>
                        </div>
                        <div className="box">
                            <p className="title-box">Học thật vui</p>
                            <p>Học hiệu quả mà không nhàm chán! Xây dựng kỹ
                                năng mỗi ngày với các bài học thú vị cùng các
                                nhân vật ngộ nghĩnh.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="box">
                            <p className="title-box">Học mọi lúc mọi nơi</p>
                            <p className="title-box2">Truy cập vào website và trải nghiệm mọi thứ mà
                                VOGUE mạng lại để đạt danh hiệu xuất sắc</p>
                        </div>
                        <div className="box">
                            <p className="title-box">Thực sự hiệu quả</p>
                            <p>Các khóa học của chúng tôi giảng dạy một
                                cách hiệu quả các kỹ năng nghe, đọc và viết. Bạn có thể xem nghiên cứu khoa học
                                mới nhất của chúng tôi!</p>
                        </div>
                    </div>
                </section>
                {/* end reason */}
                <section className="studyRoute">
                    <p className="title">LỘ TRÌNH HỌC VỚI VOGUE</p>
                    <div className="row">
                        <div className="col">
                            <div className="col-box">
                                <p className="col-title">Kiểm tra đầu vào</p>
                                <p className="col-content">Thiết lập lộ trình học phù hợp riêng của bạn</p>
                            </div>
                            <div className="col-number">
                                1
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-box">
                                <p className="col-title">Lựa chọn chủ đề yêu thích</p>
                                <p className="col-content">Giao tiếp trong các tình huống đơn giản tại nơi làm việc, tình huống cơ bản.
                                </p>
                            </div>
                            <div className="col-number">
                                2
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-box">
                                <p className="col-title">Mỗi ngày một bài học</p>
                                <p className="col-content">Hiểu và tự tin vận dụng các cấu trúc thông dụng trong một số lĩnh vực và diễn
                                    đạt rõ ràng những vấn đề thường gặp trong cuộc sống.</p>
                            </div>
                            <div className="col-number">
                                3
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-box">
                                <p className="col-title">Cảm nhận sự tự tin hoàn toàn mới</p>
                                <p className="col-content">Tự tin giao tiếp trong các tình huống xã hội. Đối phó với những tình huống
                                    tương đối phức tạp trong công việc. Tự tin hoàn toàn tin tưởng vào bản thân, nhận biết được giá
                                    trị và sự quan trọng của mình </p>
                            </div>
                            <div className="col-number">
                                4
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>
            <Footer/>
        </div>
    )
}

export default Home