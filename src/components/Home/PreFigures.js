import './PreFigures.scss'
import figure1 from '../../asset/image/figure/figure1.webp'
import figure11 from '../../asset/image/figure/figure1.1.webp'
import { useState } from 'react'
const PreFigures = () => {




    const [imgdefault, setImgDefault] = useState(true)
    const handleOnMouse = (id) => {
        setImgDefault(!imgdefault)

    }
    return (
        <>
            <div className="container-figure col-12">
                <div className='container'>
                    <div className="header-figure">
                        <span className="line-l"></span>
                        <span className="inline-title">PRE-ORDER: Figures</span>
                        <span className="line-r"></span>
                    </div>
                    <div className="content-main">
                        <div className="figure-content col-12 ">
                            <div className='content col-2'>
                                <div className='img-display'
                                    onMouseOver={() => handleOnMouse('imgdefault1')}
                                    onMouseOut={() => handleOnMouse('imgdefault1')}
                                    value={imgdefault}
                                >

                                    <img src={imgdefault === true ? figure1 : figure11} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale Figure</span>
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

                                    <img src={imgdefault === true ? figure1 : figure11} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale Figure</span>
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

                                    <img src={imgdefault === true ? figure1 : figure11} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale Figure</span>
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

                                    <img src={imgdefault === true ? figure1 : figure11} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale Figure</span>
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

                                    <img src={imgdefault === true ? figure1 : figure11} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale Figure</span>
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

                                    <img src={imgdefault === true ? figure1 : figure11} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale Figure</span>
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
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PreFigures;