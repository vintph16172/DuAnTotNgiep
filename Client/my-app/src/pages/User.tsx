import React from 'react'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import BannerUser from '../Component/user/BannerUser'
import ThongKe from '../Component/user/ThongKe'

type Props = {}

const User = (props: Props) => {
  return (
    <div >
        <Header/>
       <div className='w-10/12 mx-auto'>
          <BannerUser />
          <ThongKe />
       </div>
        <Footer/>
    </div>
  )
}

export default User