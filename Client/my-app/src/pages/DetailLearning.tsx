import React from 'react'
import Footer from '../Component/Footer';
import Header from '../Component/Header';

const DetailLearning = () => {
  
   
    return (
        <div>
            <Header/>
           
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