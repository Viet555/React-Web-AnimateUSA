import Slider from "react-slick";
import './MainBanner.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../../asset/image/MainBanner/banner1.webp'
import banner2 from '../../asset/image/MainBanner/banner2.webp'
import banner3 from '../../asset/image/MainBanner/banner3.webp'
import banner4 from '../../asset/image/MainBanner/banner4.webp'
import banner5 from '../../asset/image/MainBanner/banner5.webp'
const MainBanner = (props) => {
    const settings = props
    console.log('check props', props)
    return (

        <>

            <div className='container-Banner-slick'>
                <div className='content-slick'>
                    <Slider {...settings}>
                        <div className='img-slider'>
                            <img src={banner1} />

                        </div>
                        <div className='img-slider'>

                            <img src={banner2} />
                        </div>
                        <div className='img-slider'>

                            <img src={banner3} />
                        </div>
                        <div className='img-slider'>

                            <img src={banner4} />
                        </div>

                    </Slider>
                </div>
            </div>


        </>
    );
}

export default MainBanner;