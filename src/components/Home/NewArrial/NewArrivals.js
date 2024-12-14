import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as action from '../../Store/export'
import { Buffer } from "buffer"
import './NewArrivals.scss'
import { useNavigate } from "react-router-dom"
const NewArrivals = () => {
    const navigator = useNavigate()
    const disPatch = useDispatch()
    const dataProduct = useSelector(state => state.admin.listProductNew)
    const [listProductNew, setListProductNew] = useState()

    useEffect(() => {
        disPatch(action.FetchAllProductNew())
    }, [])



    useEffect(() => {
        if (dataProduct) {
            setListProductNew(dataProduct)
        }
    }, [dataProduct])

    const handleOnclickDetailProduct = (data) => {

        navigator(`/Detail-Product/${data.id}`)

    }
    return (
        <>

            <div className="New-arrivals-container ">
                <div className="container">
                    <div className="header-content">
                        <i className="fa-solid fa-house" onClick={() => navigator('/')}></i><i className="fa-solid fa-chevron-right"></i>
                        <span className='all-type'>New Items </span>
                    </div>
                    <div className="sort-by-content">
                        <span> Sort By: </span> <select className="select-content">
                            <option selected>Date, new to old</option>
                            <option >Date, old to new</option>
                        </select>
                    </div>
                    <div className="main-content" >

                        <div className="Arrivals-content col-12 ">
                            {listProductNew && listProductNew.length > 0 &&
                                listProductNew.map((item, index) => {
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
export default NewArrivals