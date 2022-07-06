import React from 'react'
import Footer from '../Component/Footer'
import HeaderComponent from '../Component/Header'
import BannerUser from '../Component/user/BannerUser'
import ThongKe from '../Component/user/ThongKe'

type Props = {}

const User = (props: Props) => {
  return (
    <div >
        <HeaderComponent/>
       <div className='w-10/12 mx-auto'>
          <BannerUser />
          <ThongKe />
       </div>
        <Footer/>
    </div>
  )
}

export default User