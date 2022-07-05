import React, { useEffect } from 'react'
import Footer from '../Component/Footer'



const Learning = () => {

    const abc = () => {
        let navbar = document.querySelector<any>('.nav__learning-menu');

        navbar.classList.toggle('active');


        window.onscroll = (): any => {
            navbar.classList.remove('active');
        }
    }




    return (
        <div>

            <div>
                <header className="header__learning">
                    <div className="header__learning_box">
                        <div className="logo">
                            <a ><img src=""  />Logo</a>
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
                <section className="content__learning">
                    <h2 className="title_learning">Chủ đề cho bạn</h2>
                    <div className="learning__box">
                        <div className="box__list__learning">
                            <div className="item__list__learning">
                                <a >
                                    <img src="./../image//family.PNG"  />
                                </a>
                                <h3 className="title__tiem__learning">Gia đình</h3>
                            </div>
                            <div className="item__list__learning">
                                <a >
                                    <img src="./../image/info.PNG"  />
                                </a>
                                <h3 className="title__tiem__learning">Giới thiệu</h3>
                            </div>
                            <div className="item__list__learning">
                                <a >
                                    <img src="./../image/hi.PNG"  />
                                </a>
                                <h3 className="title__tiem__learning">Chào hỏi</h3>
                            </div>
                            <div className="item__list__learning">
                                <a >
                                    <img src="./../image/shopping.PNG"  />
                                </a>
                                <h3 className="title__tiem__learning">Mua sắm</h3>
                            </div>
                            <div className="item__list__learning__key">
                                <div className="col">
                                    <a >
                                        <img src="./../image/shopping.PNG"  />
                                    </a>
                                    <h3 className="title__tiem__learning">Mua sắm</h3>
                                </div>
                                <div className="item__lock_learning">
                                    <button><i className="fa-solid fa-lock" /></button>
                                </div>
                            </div>
                            <div className="item__list__learning__key">
                                <div className="col">
                                    <a >
                                        <img src="./../image/shopping.PNG"  />
                                    </a>
                                    <h3 className="title__tiem__learning">Mua sắm</h3>
                                </div>
                                <div className="item__lock_learning">
                                    <button><i className="fa-solid fa-lock" /></button>
                                </div>
                            </div>
                            <div className="item__list__learning__key">
                                <div className="col">
                                    <a>
                                        <img src="./../image/shopping.PNG"  />
                                    </a>
                                    <h3 className="title__tiem__learning">Mua sắm</h3>
                                </div>
                                <div className="item__lock_learning">
                                    <button><i className="fa-solid fa-lock" /></button>
                                </div>
                            </div>
                            <div className="item__list__learning__key">
                                <div className="col">
                                    <a>
                                        <img src="./../image/shopping.PNG"  />
                                    </a>
                                    <h3 className="title__tiem__learning">Mua sắm</h3>
                                </div>
                                <div className="item__lock_learning">
                                    <button><i className="fa-solid fa-lock" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="btn__display_item">
                            <button>Xem thêm bài học</button>
                        </div>
                    </div>
                </section>
            </div>


            <Footer />
        </div>
    )
}

export default Learning