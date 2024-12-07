import './PreFigures.scss'
import figure1 from '../../asset/image/figure/figure1.webp'
import figure11 from '../../asset/image/figure/figure1.1.webp'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../Store/export'
import { Buffer } from 'buffer'
const PreFigures = () => {

    const dispatch = useDispatch()
    const dataFigure = useSelector(state => state.admin.ProductFigure)

    const [listProduct, setListProduct] = useState([])
    const [imgdefault, setImgDefault] = useState(true)
    const handleOnMouse = (newimg) => {
        setImgDefault(!imgdefault)

    }
    useEffect(() => {
        dispatch(action.fetchLimitProductFigure())
    }, [])

    useEffect(() => {
        setListProduct(dataFigure.data)
    }, [dataFigure])

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
                            {listProduct && listProduct.length > 0 &&
                                listProduct.map((item, index) => {
                                    let imageBuffer = ''
                                    imageBuffer = new Buffer(item.imageProduct, 'base64').toString('binary');

                                    return (

                                        <div className='content col-2' key={index}>
                                            <div className='img-display'
                                                onMouseOver={() => handleOnMouse()}
                                                onMouseOut={() => handleOnMouse()}
                                                value={imgdefault}
                                            >
                                                {/* <img src={imgdefault === true ? imageBuffer : imageBuffer} /> */}
                                                <img src={imageBuffer} />
                                            </div>

                                            <div className='info-display'>
                                                <span className='line-clamp'>{item.productName}</span>
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
export default PreFigures;