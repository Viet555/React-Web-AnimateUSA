import './DetailProduct.scss'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import img1 from '../../../asset/image/figure/figure1.1.webp'
import { useEffect, useState } from 'react';
import { AllDataProductByid } from '../../../Services/ApiService';
import { Buffer } from 'buffer';
import Lightbox from 'react-image-lightbox';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'react-image-lightbox/style.css';
import { useSelector } from 'react-redux';
import SliderAlsoPurchaSe from './SliderAlsoPurchaSe';
let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    Default: 3000,
    responsive: [
        {
            breakpoint: 480, // Kích thước màn hình
            settings: {
                slidesToShow: 2, // Số lượng slide hiển thị
                slidesToScroll: 2, // Số lượng slide cuộn
            }
        }
    ]
};

const DetailProduct = (props) => {
    const navigator = useNavigate()
    const AlsoPuchase = useSelector(state => state.admin.ProductCharacter)
    const [dataAlsoPuchase, setDataAlsoPuchase] = useState([])
    const [dataProduct, setDataProduct] = useState([])
    const params = useParams()
    const [imagepro, setImagePro] = useState('')
    const [count, setCount] = useState(0)
    // const [imageSliderProduct, setImageSliderProduct] = useState('')
    const [isOpen, setIsopen] = useState(false)
    useEffect(() => {
        handleGetDetailProduct()
    }, [params.id])

    useEffect(() => {
        if (AlsoPuchase) {
            setDataAlsoPuchase(AlsoPuchase.data)
        }
        // if (dataAlsoPuchase && dataAlsoPuchase.length > 0) {
        //     dataAlsoPuchase.map(item => {
        //         dataAlsoPuchase.imageProduct = new Buffer(item.imageProduct, 'base64').toString('binary');

        //     })
        // }

    }, [AlsoPuchase])
    const handleGetDetailProduct = async () => {
        if (params && params.id) {
            let id = params.id
            let res = await AllDataProductByid(id)
            if (res && res.errCode === 0 && res.data) {
                setDataProduct(res.data)

            }
            if (res && res.data && res.data.imageProduct) {
                let imgBase64 = ''
                imgBase64 = new Buffer(res.data.imageProduct, 'base64').toString('binary');
                setImagePro(imgBase64)
            }
        }
    }

    // const RenderHTML = (props) => (<span dangerouslySetInnerHTML={{ __html: dataProduct.markdown.contentHTML }}></span>)
    return (
        <>
            <div className="DetailProDuct-container col-12">
                <div className="container px-5">
                    <div className="header-content">
                        <i className="fa-solid fa-house" onClick={() => navigator('/')}></i><i className="fa-solid fa-chevron-right"></i>
                        <span className='all-type'> {dataProduct.typeProducts}</span><i className="fa-solid fa-chevron-right"></i><span> {dataProduct.productName}</span>
                    </div>
                    <div className="detail-content-main">
                        <div className="content-left">
                            <div className='img-content'>
                                <img src={imagepro}
                                    onClick={() => setIsopen(true)}
                                />
                            </div>
                            <div className='img-small '>
                                <img src={imagepro} />
                            </div>
                        </div>
                        <div className="content-right">
                            <span className='header-right'>{dataProduct.productName}</span>
                            <span className='line'></span>
                            <div className='detail-product'>
                                <span className='cost'>${dataProduct.count}</span>
                                <div className='info-product row'>
                                    <span >Availability: In Stock</span>
                                    <span >Sku: {dataProduct.Sku}</span>
                                    <span >Categories: {dataProduct.categories}</span>
                                    <span >Product Type: {dataProduct.typeProducts}</span>
                                    <span >Tags: {dataProduct.tag}</span>
                                </div>

                            </div>

                            <div className='evalute'>
                                <div className='amount-product'>
                                    <span className='amount-minus'> <i

                                        onClick={() => setCount((count) => count - 1)}
                                        className="fa-solid fa-minus"></i></span>
                                    <span>{count}</span>
                                    <span className='amount-plus'><i
                                        onClick={() => setCount((count) => count + 1)}
                                        className="fa-solid fa-plus"></i></span>
                                </div>
                                <div className='Cart'>
                                    <button className='add-to-cart'><i className="fa-solid fa-bag-shopping mx-2"></i>add to cart</button>
                                    <span className='iconic'><i className=" icon-show fa-regular fa-heart"></i></span>
                                    <span className='iconic'><i className=" icon-show fa-solid fa-chart-simple"></i></span>
                                </div>
                            </div>


                            <div className='Social-content'>
                                <Nav.Link href="#link" className="header__option ">
                                    <i className="fa-brands fa-facebook-f active1"></i>
                                </Nav.Link>

                                <NavLink to='/login' className='header__option nav-link option-login'>
                                    <i className="fa-brands fa-twitter active2"></i>
                                </NavLink>
                                <Nav.Link href="#link" className="header__option ">
                                    <i className="fa-brands fa-instagram active3"></i>
                                </Nav.Link>
                                <Nav.Link href="#link" className="header__option ">
                                    <i className="fa-solid fa-envelope active4"></i>
                                </Nav.Link>
                                <Nav.Link href="#link" className="header__option ">
                                    <i className="fa-brands fa-google-plus-g active4"></i>
                                </Nav.Link>

                            </div>
                        </div>

                    </div>
                    <div className="content-description">
                        <span>Description</span>
                        <div className='row my-2'>
                            <span className="line-l"></span>
                            <span className="line-r"></span>
                        </div>
                        <div className="content-markdown"
                        >
                            {dataProduct && dataProduct.markdown && dataProduct.markdown.contentHTML &&
                                <div dangerouslySetInnerHTML={{ __html: dataProduct.markdown.contentHTML }}></div>
                            }
                        </div>

                    </div>
                    <div className="content-last">
                        <SliderAlsoPurchaSe
                            AlsoPuchase={dataAlsoPuchase}
                            settings={settings}
                        // imageSliderProduct={imageSliderProduct}
                        />
                    </div>

                </div>

            </div>
            {isOpen &&
                <Lightbox
                    mainSrc={imagepro}
                    onCloseRequest={() => setIsopen(false)}

                />
            }
        </>


    )
}
export default DetailProduct 