import React from 'react'

type Props = {}

const ThongKe = (props: Props) => {
  return (
    <div>
          <div className='py-[90px]'>
        <h1 className='font-bold text-[32px]'>Thong ke</h1>
        <div className="big-box">
            <div className="box-on grid grid-cols-2 gap-[20px]">
                <div className="small-box px-3 py-5 border rounded-md hover:shadow-lg transition-all ease-linear duration-300">
                    <div className="level flex items-center">
                        <div className="icon px-3">
                            <img src="../../image/image 39.png"/>
                        </div>
                        <div className="info px-7">
                            <p className='m-0 text-[18px]'>0</p>
                            <span className='text-[20px]'>Level</span>
                        </div>
                    </div>
                </div>
                <div className="small-box px-3 py-5 border rounded-md hover:shadow-lg transition-all ease-linear duration-300">
                    <div className="level flex items-center">
                        <div className="icon px-3">
                            <img src="../../image/image 39 (1).png"/>
                        </div>
                        <div className="info px-7">
                            <p className='m-0 text-[18px]'>0</p>
                            <span className='text-[20px]'>Tong vuong mieng</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-below grid grid-cols-2 gap-[20px] pt-10">
                <div className="small-box px-3 py-5 border rounded-md hover:shadow-lg transition-all ease-linear duration-300">
                        <div className="level flex items-center">
                            <div className="icon px-3">
                                <img src="../../image/image 39 (2).png"/>
                            </div>
                            <div className="info px-7">
                                <p className='m-0 text-[18px]'>0</p>
                                <span className='text-[20px]'>Diem kinh nghiem</span>
                            </div>
                        </div>
                    </div>
                    <div className="small-box px-3 py-5 border rounded-md hover:shadow-lg">
                        <div className="level flex items-center">
                            <div className="icon px-3">
                                <img src="../../image/image 39 (3).png"/>
                            </div>
                            <div className="info px-7">
                                <p className='m-0 text-[18px]'>0</p>
                                <span className='text-[20px]'>Thu hang</span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ThongKe