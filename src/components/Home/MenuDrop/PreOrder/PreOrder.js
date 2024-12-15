import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as action from '../../../Store/export'
import { Buffer } from "buffer"
import { useNavigate } from "react-router-dom"
import { getALLProductByType } from "../../../../Services/ApiService"
import '../NewArrial/NewArrivals.scss'
const PreOrder = () => {
    const [allProductPre, setAllProductPre] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        handleGetAllProductAnime()
    }, [])

    const handleGetAllProductAnime = async () => {
        let res = await getALLProductByType('PreOrder')
        if (res && res.errCode === 0 && res.data) {
            setAllProductPre(res.data)
        }
    }

    const handleOnclickDetailProduct = (data) => {
        navigate(`/Detail-Product/${data.id}`)
    }
    return (
        <>

            <div className="New-arrivals-container ">
                <div className="container">
                    <div className="header-content">
                        <i className="fa-solid fa-house" onClick={() => navigator('/')}></i><i className="fa-solid fa-chevron-right"></i>
                        <span className='all-type'>Preorders</span>

                    </div>
                    <div className="row" style={{ lineHeight: "50px", marginTop: '10px', color: '#777', fontSize: "14px" }}>
                        <span>*Below are all preorder items </span>
                        <span>**Please note that all orders with preorder item/s included won't be fulfilled until all items are available for shipping. </span>
                        <span>***Please note that all preorders can't be cancelled.  </span>
                    </div>
                    <div className="sort-by-content">
                        <span> Sort By: </span> <select className="select-content">
                            <option selected>Date, new to old</option>
                            <option >Date, old to new</option>
                        </select>
                    </div>
                    <div className="main-content" >

                        <div className="Arrivals-content col-12 ">
                            {allProductPre && allProductPre.length > 0 &&
                                allProductPre.map((item, index) => {
                                    let imageBuffer = ''
                                    imageBuffer = new Buffer(item.imageProduct, 'base64').toString('binary');
                                    return (
                                        <div className='content col-3' key={index}>
                                            <div className='img-display'

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

                </div>


            </div>
        </>
    )
}
export default PreOrder