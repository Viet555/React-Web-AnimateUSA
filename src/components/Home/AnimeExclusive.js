import './AnimeExclusive.scss'
import anm2 from '../../asset/image/animeexclusive/anm2.webp'
import anm22 from '../../asset/image/animeexclusive/anm22.webp'
import { useState } from 'react'
const AnimeExclusive = () => {




    const [imgdefault, setImgDefault] = useState(true)
    const handleOnMouse = (newimg) => {
        setImgDefault(!imgdefault)

    }
    return (
        <>
            <div className="container-AnimeExclusive col-12">
                <div className='container'>
                    <div className="header-AnimeExclusive">
                        <span className="line-l"></span>
                        <span className="inline-title">Animate Exclusives</span>
                        <span className="line-r"></span>
                    </div>
                    <div className="content-main">
                        <div className="AnimeExclusive-content col-12 ">
                            <div className='content col-2'>
                                <div className='img-display'
                                    onMouseOver={() => handleOnMouse()}
                                    onMouseOut={() => handleOnMouse()}
                                    value={imgdefault}
                                >
                                    <img src={imgdefault === true ? anm2 : anm22} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale AnimeExclusive</span>
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

                                    <img src={imgdefault === true ? anm2 : anm22} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale AnimeExclusive</span>
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

                                    <img src={imgdefault === true ? anm2 : anm22} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale AnimeExclusive</span>
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

                                    <img src={imgdefault === true ? anm2 : anm22} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale AnimeExclusive</span>
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

                                    <img src={imgdefault === true ? anm2 : anm22} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale AnimeExclusive</span>
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

                                    <img src={imgdefault === true ? anm2 : anm22} />
                                </div>

                                <div className='info-display'>
                                    <span>[Uma Musume] Mr. C.B. - 1/7 Scale AnimeExclusive</span>
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
                    <div className='content-last'><a href='/'>More-details</a></div>
                </div>

            </div>

        </>
    )
}
export default AnimeExclusive;