import LogoBanner from '../../../asset/image/500_x_204_140x.avif'
import './Banner.scss'
const Banner = () => {
    return (
        <>
            <div className="Banner-container">
                <div className="content-left">
                    <div className="logo-banner">
                        <a href='/'><img src={LogoBanner} /></a>
                    </div>
                </div>
                <div className="content-between">

                    <i className="icon-search fa-solid fa-magnifying-glass"></i>
                    <input type='text' placeholder='SEARCH...'></input>
                    <div className='categories'>
                        <span>  All Categories <i className="fa-solid fa-circle-chevron-down mx-2"></i></span>
                    </div>
                </div>
                <div className="content-right">
                    <div>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>

                </div>

            </div>

        </>
    )
}
export default Banner;