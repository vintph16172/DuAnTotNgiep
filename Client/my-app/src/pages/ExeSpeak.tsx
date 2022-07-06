/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const ExeSpeak = () => {
    return (
        <div>
            <div>
                <section className="w-10/12 mx-auto">
                    <div className="mt-[59px]">
                        <a ><img className="w-[50px]" src="../image/image 27.png"  /></a>
                    </div>
                </section>
                <section className="w-10/12 mx-auto py-[100px]">
                    <div className="grid md:grid-cols-3 justify-items-center">
                        <div>
                            <img src="../image/image 24.png"  />
                        </div>
                        <div className="col-span-2">
                            <div className="flex">
                                <h1 className="font-bold md:text-2xl text-lg md:px-[20px] px-[10px]">Buy</h1>
                                <img className="md:w-[30px] w-[20px]" src="../image/image 25.png"  />
                            </div>
                            <div>
                                <p className="text-xl px-[30px] py-[20px]">/bai/</p>
                            </div>
                            <div className="w-[40px] mx-[30px]">
                                <img src="../image/image 26.png"  />
                            </div>
                            <div>
                                <p className="text-lg md:px-[8px] md:py-[30px]">nhấn để nói</p>
                            </div>
                            <div>
                                <button className="px-[30px] py-[15px] font-bold shadow-lg border-2 border-[#CCCCCC] rounded-xl">Kiểm tra</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-6/12 w-10/12 py-[10px] mx-auto md:float-right">
                        <div className="bg-[#76D7C4] px-[15px] md:py-[10px] rounded-md">
                            <p className="text-white font-bold">Đúng rồi !</p>
                            <p className="text-white md:py-[10px] font-bold">Dịch nghĩa: <span>Mua</span></p>
                            <button className="text-white w-full py-[10px] rounded-md bg-[#138D75] mb-[20px] font-bold">Tiếp tục</button>
                        </div>
                    </div>
                </section>
                <section className="w-10/12 mx-auto py-[100px]">
                    <div className="grid md:grid-cols-3 justify-items-center">
                        <div>
                            <img src="../image/image 24.png"  />
                        </div>
                        <div className="col-span-2 ">
                            <div className="flex">
                                <h1 className="font-bold text-2xl px-[20px]">Buy</h1>
                                <img className="w-[30px]" src="../image/image 25.png"  />
                            </div>
                            <div>
                                <p className="text-xl px-[30px] py-[20px]">/bai/</p>
                            </div>
                            <div className="w-[40px] mx-[30px]">
                                <img src="../image/image 26.png"  />
                            </div>
                            <div>
                                <p className="text-lg px-[8px] py-[30px]">nhấn để nói</p>
                            </div>
                            <div>
                                <button className="px-[30px] py-[15px] shadow-lg font-bold border-2 border-[#CCCCCC] rounded-xl">Kiểm tra</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-6/12 w-10/12 mx-auto py-[10px] md:float-right">
                        <div className="bg-[#FFDFE0] px-[15px] md:py-[10px] rounded-md">
                            <p className="font-bold">Gần đúng rồi !</p>
                            <p className=" md:py-[10px] font-bold">Dịch nghĩa: <span>Mua</span></p>
                            <button className="text-white w-full py-[10px] rounded-md bg-[#C0392B] mb-[20px] font-bold">Tiếp tục</button>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default ExeSpeak