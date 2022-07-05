import React from 'react'
import Footer from '../Component/Footer';

const DetailLearning = () => {
    const abc = () => {
        let navbar = document.querySelector<any>('.nav__learning-menu');
          
        navbar.classList.toggle('active');
       
        
        window.onscroll = ():any => {
            navbar.classList.remove('active');
        }
    }
   
   


    return (
        <div>

            <header className="header__learning">
                <div className="header__learning_box">

                    <div className="logo">
                        <a ><img src="" />Logo</a>
                        <div className="fas fa-bars" id="menu-btn" onClick={() => abc()} />
                    </div>

                    <div className="nav__learning-menu">
                        <ul className="nav__learning">
                            <li><a >Học </a></li>
                            <li><a >Bài hát</a></li>
                            <li><a >Cửa hàng</a></li>
                        </ul>
                    </div>

                    <nav className="nav__user">
                        <a ><i className="fa-solid fa-bolt" /> 0 </a>
                        <a ><i className="fa-solid fa-crown" /> 0</a>
                        <a ><i className="fa-solid fa-user nav__icon__user" /></a>
                    </nav>
                </div>
            </header>
            <section className="main__topic">
                <div className="box__topic">
                    <div className="img__topic">
                        <img src="./../image/family.PNG" />
                    </div>
                    <div className="desc__topic">
                        <h2 className="title__topic">Gia đình</h2>
                        <p>
                            Trong bài học này, bạn sẽ học các kỹ thuật khác nhau để thành thạo
                            các từ ngữ về gia đình.
                        </p>
                        <button>12%</button>
                    </div>
                </div>
            </section>
            <section className="box__review">
                <h2 className="title__review">Chọn cách luyện tập</h2>
                <div className="list__detail__learning">
                    <div className="item__detail__learning">
                        <img src="./../image/phat am.PNG" />
                        <h4>Phát âm</h4>
                    </div>
                    <div className="item__detail__learning">
                        <img src="./../image/nghe viet.PNG" />
                        <h4>Phát âm</h4>
                    </div>
                    <div className="item__detail__learning">
                        <img src="./../image/quiz.PNG" />
                        <h4>Phát âm</h4>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default DetailLearning