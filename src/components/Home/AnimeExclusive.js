import './AnimeExclusive.scss'
import anm2 from '../../asset/image/animeexclusive/anm2.webp'
import anm22 from '../../asset/image/animeexclusive/anm22.webp'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../Store/export'
import _ from 'lodash'
import { Buffer } from 'buffer'
import { useNavigate } from 'react-router-dom'
const AnimeExclusive = () => {

    const productAnime = useSelector((state => state.admin.ProductAnime))
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [listProductAnime, setlistProductAnime] = useState([])
    const [imgdefault, setImgDefault] = useState(true)
    const handleOnMouse = (newimg) => {
        setImgDefault(!imgdefault)
    }

    useEffect(() => {
        dispatch(action.fetchLimitProductAni())

    }, [])
    useEffect(() => {
        if (!_.isEmpty(productAnime)) {
            setlistProductAnime(productAnime.data)
        }

    }, [productAnime])
    const handleOnclickDetailProduct = (data) => {

        navigate(`/Detail-Product/${data.id}`)
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
                            {listProductAnime && listProductAnime.length > 0 &&
                                listProductAnime.map((item, index) => {
                                    let imageBuffer = ''
                                    imageBuffer = new Buffer(item.imageProduct, 'base64').toString('binary');
                                    return (
                                        <div className='content col-3 ' key={index}>
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

                        </div>
                    </div>
                    <div className='content-last'><a href='/'>More-details</a></div>
                </div>

            </div>

        </>
    )
}
export default AnimeExclusive;