import Slider from "react-slick";
import './MainBanner.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
                                    <div className='img-slider' key={index}>
                                        <img src={imageBuffer} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>


        </>
    );
}

export default MainBanner;