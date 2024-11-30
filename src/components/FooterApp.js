
import './FooterApp.scss'
const FooterApp = () => {
    return (
        <>
            <div className='footer-container '>
                <div className='footer-main'>
                    <div className='footer-content'>

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

                        </div>
                        <div className='row-img-footer '>

                        </div>

                    </div>
                </div>
                <div className='last-footer '>© All rights reserved. Thiết kế website</div>
            </div >


        </>
    )
}
export default FooterApp;