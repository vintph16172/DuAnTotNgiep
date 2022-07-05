import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div>
         <div className='py-[102px] px-[244px]'>
        <h1 className='font-normal text-[36px]'>Lien he voi chung toi</h1>
        <div className="email">
            <p className='m-0 text-[24px] pt-10'>Email cua ban</p>
            <span className='text-[18px]'>
                Liên hệ với chúng tôi qua email bằng cách điền vào biểu mẫu trên trang này
            </span>
            <br />
            <div className='py-3'>
                <span className='text-[18px] py-3'>
                    Bạn cũng có thể truy cập khu vực Chăm sóc khách hàng để tìm câu trả lời cho những câu hỏi thường gặp nhất về các
                    dịch vụ của Voguie.
                </span>
            </div>
        </div>
        <form action="">
            <div className="form">
                <div className="name grid grid-cols-2 gap-7 py-3">
                    <div className=''>
                        <label htmlFor="" className='uppercase'>Ho (*)</label>
                        <br />
                        <input type="text" name="" className='border rounded-md border-[#ccc] px-3 py-2 text-[16px] hover:shadow-md transition-all ease-linear duration-300 focus:none w-full' id="" />
                    </div>
                    <div className=''>
                        <label htmlFor="" className='uppercase'>Ho (*)</label>
                        <br />
                        <input type="text" name="" className='border rounded-md border-[#ccc] px-3 py-2 text-[16px] hover:shadow-md transition-all ease-linear duration-300 focus:none w-full' id="" />
                    </div>
                </div>
                <div className="nation-date grid grid-cols-2 gap-7 py-3">
                    <div className=''>
                        <label htmlFor="" className='uppercase'>Quoc gia/Vung (*)</label>
                        <br />
                        <input type="text" name="" className='border rounded-md border-[#ccc] px-3 py-2 text-[16px] hover:shadow-md transition-all ease-linear duration-300 focus:none w-full' id="" />
                    </div>
                    <div className=''>
                        <label htmlFor="" className='uppercase'>Ngày sinh (*)</label>
                        <br />
                        <input type="date" name="" className='border rounded-md border-[#ccc] px-3 py-2 text-[16px] hover:shadow-md transition-all ease-linear duration-300 focus:none w-full' id="" />
                    </div>
                </div>
                <div className="address grid grid-cols-2 gap-7 py-3">
                    <div className=''>
                        <label htmlFor="" className='uppercase'>Dia chi email (*)</label>
                        <br />
                        <input type="text" name="" className='border rounded-md border-[#ccc] px-3 py-2 text-[16px] hover:shadow-md transition-all ease-linear duration-300 focus:none w-full' id="" />
                    </div>
                    <div className=''>
                        <label htmlFor="" className='uppercase'>so dien thoai (*)</label>
                        <br />
                        <input type="text" name="" className='border rounded-md border-[#ccc] px-3 py-2 text-[16px] hover:shadow-md transition-all ease-linear duration-300 focus:none w-full' id="" />
                    </div>
                </div>
                <div className="address grid grid-cols-2 gap-7 py-3">
                    <div className=''>
                        <label htmlFor="" className='uppercase'>Message (*)</label>
                        <br />
                        <textarea className='border rounded-md border-[#ccc] px-3 py-2 text-[16px] h-[100px] hover:shadow-md transition-all ease-linear duration-300 focus:none w-full'></textarea>
                    </div>
                    <div className='pt-[22px]'>
                        <button className='uppercase bg-[#512E5F] w-[450px] text-[#fff] py-[2px] px-4'>file dinh kem</button>
                        <div className='pt-3'><span className='text-[12px]'>Bạn có thể đính kèm tệp lên đến 4096KB ở bất kỳ định dạng nào sau đây: doc, xsl, txt, pdf, jpg, jpeg, gif, png</span></div>
                    </div>
                </div>
            </div>
            <div className="text pt-[85px]">
                <p className='text-[18px] m-0'>
                    Trang web này được bảo vệ bởi reCAPTCHA và Chính sách quyền riêng tư và Điều khoản dịch vụ của Google sẽ được áp dụng.
                </p>
                <br />
                <p className='text-[18px] m-0'>
                    Dữ liệu cá nhân của bạn sẽ được Vogue sử dụng chỉ cho các mục đích liên quan đến dịch vụ / liên hệ được yêu cầu.
                </p>
                <br />
                <p className='text-[18px] m-0'>
                    Tham khảo Chính sách quyền riêng tư của chúng tôi để biết thêm thông tin và liên hệ với Valentino nếu có các mối quan tâm và yêu cầu về quyền riêng tư
                </p>
                <br />
                <p className='text-[18px] m-0'>
                    Hơn nữa, nếu bạn cũng muốn giữ liên lạc với Vogue khi nhận các thông tin liên lạc thương mại được cá nhân hóa, vui lòng cho phép chúng tôi:
                </p>
            </div>
            <div className='check-box'>
                <div className="flex items-center pt-5">
                    <input type="checkbox" name="" id="" className='text-[18px]' />
                    <p className='m-0 pl-3'>xử lý dữ liệu của bạn cho mục đích tiếp thị và khuyến mại (thông báo được gửi qua bưu điện, email hoặc SMS về bộ sưu tập hoặc lời mời tham gia sự kiện, v.v.)</p>
                </div>
                <div className="flex items-center pt-5">
                    <input type="checkbox" name="" id="" className='text-[18px]' />
                    <p className='m-0 pl-3'>xử lý dữ liệu của bạn cho mục đích phân tích thói quen và sở thích của bạn (để Valentino có thể cung cấp cho bạn các dịch vụ được cá nhân hóa)</p>
                </div>
            </div>
            <div className="submit flex justify-center items-center pt-[96px]">
                <button className='py-2 px-[40px] bg-[#4A235A] w-[337px] h-[64px] text-white font-bold border rounded-[10px]'>Gui phan hoi</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Contact