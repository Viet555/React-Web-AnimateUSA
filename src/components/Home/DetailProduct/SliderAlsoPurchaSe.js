import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Buffer } from "buffer";
import './SliderAlsoPurchaSe.scss'
import { useNavigate } from "react-router-dom";

const SliderAlsoPurchaSe = (props) => {
    const { AlsoPuchase, settings, } = props
    const navigate = useNavigate()
    const handleOnclickDetailProduct = (data) => {
        navigate(`/Detail-Product/${data.id}`)
    }
    return (
        <>
            <span style={{ fontWeight: '700', fontSize: '20px', }}>Also Purchased</span>
            <Slider {...settings}>

                {AlsoPuchase && AlsoPuchase.length > 0 &&
                    AlsoPuchase.map((item, index) => {
                        let imageBuffer = ''
                        imageBuffer = new Buffer(item.imageProduct, 'base64').toString('binary');
                        return (

                            <div className='img-display' key={index}>
                                <img src={imageBuffer}
                                    onClick={() => handleOnclickDetailProduct(item)} />
                                <div className='info-display'>
                                    <span className='line-clamp' onClick={() => handleOnclickDetailProduct(item)}>{item.productName}</span>
                                    <div className='cost-display'>${item.count}</div>
                                    <div className='evaluate'>
                                        <span ><i className=" icon-show fa-regular fa-heart"></i></span>
                                        <button className='add-to-cart'>add to cart</button>
                                        <span><i className=" icon-show fa-solid fa-chart-simple"></i></span>
                                    </div>

                                </div>
                                <div className='show-quick-view'>
                                    Quick View
                                </div>
                            </div>

                        )
                    })
                }
            </Slider>
        </>
    )
}
export default SliderAlsoPurchaSe