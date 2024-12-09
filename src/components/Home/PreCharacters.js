import './Precharaters.scss'
import crt1 from '../../asset/image/character/crt1.webp'
import crt11 from '../../asset/image/character/crt1.1.webp'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../Store/export'
import { Buffer } from 'buffer'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'
const PreCharacter = () => {
    const dispatch = useDispatch()
    const productChar = useSelector(state => state.admin.ProductCharacter)
    const navigate = useNavigate()
    const [listProductChar, setListproductChar] = useState()


    useEffect(() => {
        dispatch(action.fetchLimitProductChar())

    }, [])
    useEffect(() => {
        if (!_.isEmpty(productChar)) {
            setListproductChar(productChar.data)
        }
    }, [productChar])

    const [imgdefault, setImgDefault] = useState(true)
    const handleOnMouse = (newimg) => {
        setImgDefault(!imgdefault)

    }
    const handleOnclickDetailProduct = (data) => {
        navigate(`/Detail-Product/${data.id}`)
    }
    return (
        <>
            <div className="container-charater col-12">
                <div className='container'>
                    <div className="header-charater">
                        <span className="line-l"></span>
                        <span className="inline-title">PRE-ORDER: Character Goods
                        </span>
                        <span className="line-r"></span>
                    </div>
                    <div className="content-main">
                        <div className="charater-content col-12 ">
                            {listProductChar && listProductChar.length > 0 &&
                                listProductChar.map((item, index) => {
                                    let imageBuffer = ''
                                    imageBuffer = new Buffer(item.imageProduct, 'base64').toString('binary');
                                    return (
                                        <div className='content col-2' key={index}>
                                            <div className='img-display'
                                                onMouseOver={() => handleOnMouse()}
                                                onMouseOut={() => handleOnMouse()}
                                                value={imgdefault}
                                                onClick={() => handleOnclickDetailProduct(item)}
                                            >
                                                <img src={imageBuffer} />
                                            </div>

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

                            {/* <div className='content col-2'>
                                <div className='img-display'
                                    onMouseOver={() => handleOnMouse('imgdefault')}
                                    onMouseOut={() => handleOnMouse('imgdefault')}
                                >

                                    <img src={imgdefault === true ? crt1 : crt11} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale charater</span>
                                    <div className='cost-display'>$178.99</div>
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
                            <div className='content col-2'>
                                <div className='img-display'
                                    onMouseOver={() => handleOnMouse('imgdefault')}
                                    onMouseOut={() => handleOnMouse('imgdefault')}
                                >

                                    <img src={imgdefault === true ? crt1 : crt11} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale charater</span>
                                    <div className='cost-display'>$178.99</div>
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
                            <div className='content col-2'>
                                <div className='img-display'
                                    onMouseOver={() => handleOnMouse('imgdefault')}
                                    onMouseOut={() => handleOnMouse('imgdefault')}
                                >

                                    <img src={imgdefault === true ? crt1 : crt11} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale charater</span>
                                    <div className='cost-display'>$178.99</div>
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
                            <div className='content col-2'>
                                <div className='img-display'
                                    onMouseOver={() => handleOnMouse('imgdefault')}
                                    onMouseOut={() => handleOnMouse('imgdefault')}
                                >

                                    <img src={imgdefault === true ? crt1 : crt11} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale charater</span>
                                    <div className='cost-display'>$178.99</div>
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
                            <div className='content col-2'>
                                <div className='img-display'
                                    onMouseOver={() => handleOnMouse('imgdefault')}
                                    onMouseOut={() => handleOnMouse('imgdefault')}
                                >

                                    <img src={imgdefault === true ? crt1 : crt11} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale charater</span>
                                    <div className='cost-display'>$178.99</div>
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
                            <div className='content col-2'>
                                <div className='img-display'
                                    onMouseOver={() => handleOnMouse('imgdefault')}
                                    onMouseOut={() => handleOnMouse('imgdefault')}
                                >

                                    <img src={imgdefault === true ? crt1 : crt11} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale charater</span>
                                    <div className='cost-display'>$178.99</div>
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
                            <div className='content col-2'>
                                <div className='img-display'
                                    onMouseOver={() => handleOnMouse('imgdefault')}
                                    onMouseOut={() => handleOnMouse('imgdefault')}
                                >

                                    <img src={imgdefault === true ? crt1 : crt11} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale charater</span>
                                    <div className='cost-display'>$178.99</div>
                                    <div className='evaluate'>
                                        <span ><i className=" icon-show fa-regular fa-heart"></i></span>
                                        <button className='add-to-cart'>add to cart</button>
                                        <span><i className=" icon-show fa-solid fa-chart-simple"></i></span>
                                    </div>

                                </div>
                                <div className='show-quick-view'>
                                    Quick View
                                </div>
                            </div> */}
                        </div>
                        <div className='content-last'><a href='/'>More-details</a></div>
                    </div>

                </div>

            </div>

        </>
    )
}
export default PreCharacter;