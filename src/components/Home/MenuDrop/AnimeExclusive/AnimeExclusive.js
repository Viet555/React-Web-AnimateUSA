import { useEffect, useState } from "react"
import { getALLProductByType } from "../../../../Services/ApiService"
import { Buffer } from "buffer"
import '../NewArrial/NewArrivals.scss'
import { useNavigate } from "react-router-dom"
const AnimeExclusive = () => {
    const [allProductAnime, setAllProductAnime] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        handleGetAllProductAnime()
    }, [])

    const handleGetAllProductAnime = async () => {
        let res = await getALLProductByType('Anime')
        if (res && res.errCode === 0 && res.data) {
            setAllProductAnime(res.data)
        }
    }
    console.log(allProductAnime)
    const handleOnclickDetailProduct = (data) => {
        navigate(`/Detail-Product/${data.id}`)
    }

    return (
        <>

            <div className="New-arrivals-container ">
                <div className="container">
                    <div className="header-content">
                        <i className="fa-solid fa-house" onClick={() => navigator('/')}></i><i className="fa-solid fa-chevron-right"></i>
                        <span className='all-type'>Exclusive Item </span>
                    </div>
                    <div className="sort-by-content">
                        <span> Sort By: </span> <select className="select-content">
                            <option selected  >Date, new to old</option>
                            <option >Date, old to new</option>
                        </select>
                    </div>
                    <div className="main-content" >

                        <div className="Arrivals-content col-12 ">
                            {allProductAnime && allProductAnime.length > 0 &&
                                allProductAnime.map((item, index) => {
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
export default AnimeExclusive