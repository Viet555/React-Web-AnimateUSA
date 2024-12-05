import Slider from "react-slick";
import './MainBanner.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../../asset/image/MainBanner/banner1.webp'
import banner2 from '../../asset/image/MainBanner/banner2.webp'
import banner3 from '../../asset/image/MainBanner/banner3.webp'
import banner4 from '../../asset/image/MainBanner/banner4.webp'
import banner5 from '../../asset/image/MainBanner/banner5.webp'
import * as action from '../Store/export'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Buffer } from "buffer";
const MainBanner = (props) => {
    const settings = props
    const dispatch = useDispatch()
    const BannerImg = useSelector(state => state.admin.BannerData)



    useEffect(() => {
        dispatch(action.fetchLimitBanner())
    }, [])

    console.log("checkDATABANER:", BannerImg[0])
    console.log("checkDATABANER:", BannerImg)
    return (

        <>

            <div className='container-Banner-slick'>
                <div className='content-slick'>
                    <Slider {...settings}>

                        {BannerImg && BannerImg.length > 0 &&
                            BannerImg.map((item, index) => {
                                let imageBuffer = ''
                                imageBuffer = new Buffer(item.image, 'base64').toString('binary');
                                return (
                                    <div className='img-slider'>
                                        <img key={index} src={imageBuffer} />
                                    </div>
                                )
                            })
                        }



                        {/* <div className='img-slider'>

                            <img src={banner2} />
                        </div>
                        <div className='img-slider'>

                            <img src={banner3} />
                        </div>
                        <div className='img-slider'>

                            <img src={banner4} />
                        </div> */}

                    </Slider>
                </div>
            </div>


        </>
    );
}

export default MainBanner;