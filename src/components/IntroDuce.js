
import "./MainBanner/MainBanner.scss"

const IntroDuce = () => {
    return (
        <>

            <div className='customize-scroll'>
                <div className="home-banner">


                    <div className="title-banner">
                        <h1 className='title-main'>MONA MEDIA</h1>
                        <p className='title-content'>orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy <br />nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                </div>

                <div className='main-content col-12 '>
                    <div className='content col-3.5 '>
                        <h1>PURPOELY</h1>
                        <p className='text-center'>Lorem ipsum dolor sit amet,</p> <p className='col-12 text-center '>consectetuer adipiscing elit, sed diam</p><p className='col-12 text-center '>nonummy nibh euismod tincidunt ut</p><p className='col-12 text-center '> laoreet dolore magna aliquam erat</p><p className='text-center'>volutpat.</p>
                    </div>
                    <div className='content col-3.5 '>
                        <h1>MISSION</h1>
                        <p className='text-center '>Lorem ipsum dolor sit amet,</p> <p className='col-12 text-center '>consectetuer adipiscing elit, sed diam</p><p className='col-12 text-center '>nonummy nibh euismod tincidunt ut</p><p className='col-12 text-center '> laoreet dolore magna aliquam erat</p><p className='text-center'>volutpat.</p>
                    </div>
                    <div className='content col-3.5 '>
                        <h1>FUTURE</h1>
                        <p className='text-center '>Lorem ipsum dolor sit amet,</p> <p className='col-12 text-center '>consectetuer adipiscing elit, sed diam</p><p className='col-12 text-center '>nonummy nibh euismod tincidunt ut</p><p className='col-12 text-center '> laoreet dolore magna aliquam erat</p><p className='text-center'>volutpat.</p>
                    </div>
                </div>
                {/* <div className='footer-container '>
                    <div className='footer-main'>
                        <div className='footer-content'>
                            <img src={imgLogo} className='img-logo' />
                            <p >Đăng kí để không bỏ lỡ bất kì ưu đãi nào</p>
                            <input placeholder='Email của bạn' style={{ fontSize: "1em", }} /><button style={{ background: "rgb(237, 42, 42)", border: "none", height: "1.8em", width: '2.7em' }}>GỬI</button>
                        </div>
                        <div className='footer-content' style={{ fontSize: "14px" }}>
                            <h5 style={{ color: "rgba(255, 255, 255, 0.564)" }}>Liên Hệ</h5>
                            <div className='my-5'>
                                <p><i class="fa-solid fa-location-arrow mx-1"></i>1073/23 Cách Mạng Tháng 8, P.7,Q.Tân Bình, TP.HCM</p>
                                <p><i class="fa-solid fa-phone mx-1"></i>089438183</p>
                                <p><i class="fa-solid fa-square-envelope mx-1"></i>ngoqviet1011@gmail.com</p>
                            </div>
                            <span className='social d-flex gap-2 my-5' style={{ color: "rgba(255, 255, 255, 0.564)", fontSize: "18px" }}>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-google"></i>
                                <i class="fa-brands fa-youtube"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </span>
                        </div>
                        <div className='footer-content' style={{ color: "rgba(255, 255, 255, 0.564)" }}>
                            <h5 >Tour phổ biến</h5>

                            <div className='row-img-footer '>
                                <img src={imgfooter1} className='img-logo' />
                                <img src={imgfooter2} className='img-logo' />
                                <img src={imgfooter3} className='img-logo' />
                            </div>
                            <div className='row-img-footer '>
                                <img src={imgfooter4} className='img-logo' />
                                <img src={imgfooter5} className='img-logo' />
                                <img src={imgfooter6} className='img-logo' />
                            </div>

                        </div>
                    </div>
                    <div className='last-footer '>© All rights reserved. Thiết kế website</div>
                </div > */}
            </div>

        </>
    )
}
export default IntroDuce;