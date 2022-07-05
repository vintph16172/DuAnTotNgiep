import React from 'react'
import BannerUser from '../Component/user/BannerUser'
import ThongKe from '../Component/user/ThongKe'

type Props = {}

const User = (props: Props) => {
  return (
    <div className='px-[123px] mx-auto'>
        <BannerUser />
        <ThongKe />
    </div>
  )
}

export default User