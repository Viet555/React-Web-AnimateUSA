import { NavDropdown } from 'react-bootstrap';
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
                        <span> <NavDropdown title=" All categories" id="basic-nav-dropdown" >
                            <NavDropdown.Item href="#action/3.1" className='menu-item ' >Acrylic Stands</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='menu-item'> Art book </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className='menu-item'>Apparel</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" className='menu-item'>File Folders</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className='menu-item'>Fine Art</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" className='menu-item'>illustration Boards / Cards</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" className='menu-item'>Keychains</NavDropdown.Item>
                        </NavDropdown> </span>
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