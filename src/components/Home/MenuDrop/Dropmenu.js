
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Dropmenu.scss'
import { Nav, } from 'react-bootstrap';
import { useEffect, useState } from 'react';


import { Link, NavLink } from 'react-router-dom';
import { ROUTE } from '../../../constant';
const Dropmenu = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Hàm kiểm tra cuộn trang
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }
    // Thêm sự kiện cuộn khi component được render
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // cleanup khi component unmount
        };
    }, []);
    return (
        <>

            {isScrolled === false ?
                <div className='Menu-container'>
                    <div className='Main-menu'>
                        <NavLink to="/" className='menu-drop nav-link'>
                            Event Schedule
                        </NavLink>
                        <NavLink to="/" className='menu-drop nav-link'>
                            Shop by Series
                        </NavLink>

                        <NavLink to='/new-arrivals-product' className='menu-drop nav-link '>
                            New Arrivals

                        </NavLink>

                        <NavLink to={ROUTE.PRE_ORDERS} className='menu-drop nav-link'>
                            Pre-orders
                        </NavLink>
                        <NavLink to={ROUTE.ANIME_EXCLUSIVE} className='menu-drop nav-link'>
                            animate Exclusive
                        </NavLink>
                        <NavDropdown title="Character Goods" id="basic-nav-dropdown" className='menu-drop'>
                            <NavDropdown.Item href="#action/3.1" className='menu-item'>Acrylic Stands</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='menu-item'> Art book </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className='menu-item'>Apparel</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" className='menu-item'>File Folders</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className='menu-item'>Fine Art</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" className='menu-item'>illustration Boards / Cards</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" className='menu-item'>Keychains</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Figures" id="basic-nav-dropdown" className='menu-drop'>
                            <NavDropdown.Item href="#action/3.1" className='menu-item'>Nendoroids</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='menu-item'> figmas </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className='menu-item'>Others</NavDropdown.Item>
                        </NavDropdown >
                        <NavDropdown title="Books" id="basic-nav-dropdown" className='menu-drop'>
                            <NavDropdown.Item href="#action/3.1" className='menu-item'>Art Books</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='menu-item'>Manga (BL)</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="CD/DVD" id="basic-nav-dropdown" className='menu-drop'>
                            <NavDropdown.Item href="#action/3.1" className='menu-item'>CD</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='menu-item'>DVD/Blu-ray (BL)</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Help" id="basic-nav-dropdown" className='menu-drop'>
                            <NavLink to={ROUTE.FAQ_CONTENT} className="  nav-link menu-item px-3" > FAQ</NavLink>
                            <NavLink to={ROUTE.CONTACT} className="  nav-link menu-item px-3" > Contact us(form)</NavLink>
                            <NavDropdown.Item href="#action/3.2" className='menu-item'>Getting to LA Store</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
                : <div className='Menu-container scroll-menu'>
                    <div className='Main-menu scroll-menu-main'>

                        <NavLink to="/" className='menu-drop  nav-link'>
                            Event Schedule
                        </NavLink>
                        <NavLink to="/" className='menu-drop nav-link'>
                            Shop by Series
                        </NavLink>
                        <NavLink to='/new-arrivals-product' className='menu-drop nav-link'>
                            New Arrivals
                        </NavLink>
                        <NavLink to={ROUTE.PRE_ORDERS} className='menu-drop nav-link'>
                            Pre-orders
                        </NavLink>
                        <NavLink to={ROUTE.ANIME_EXCLUSIVE} className='menu-drop nav-link'>
                            animate Exclusive
                        </NavLink>
                        <NavDropdown title="Character Goods" id="basic-nav-dropdown" className='menu-drop'>
                            <NavDropdown.Item href="#action/3.1" className='menu-item'>Acrylic Stands</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='menu-item'> Art book </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className='menu-item'>Apparel</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" className='menu-item'>File Folders</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className='menu-item'>Fine Art</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" className='menu-item'>illustration Boards / Cards</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" className='menu-item'>Keychains</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Figures" id="basic-nav-dropdown" className='menu-drop'>
                            <NavDropdown.Item href="#action/3.1" className='menu-item'>Nendoroids</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='menu-item'> figmas </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className='menu-item'>Others</NavDropdown.Item>
                        </NavDropdown >
                        <NavDropdown title="Books" id="basic-nav-dropdown" className='menu-drop'>
                            <NavDropdown.Item href="#action/3.1" className='menu-item'>Art Books</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='menu-item'>Manga (BL)</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="CD/DVD" id="basic-nav-dropdown" className='menu-drop'>
                            <NavDropdown.Item href="#action/3.1" className='menu-item'>CD</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='menu-item'>DVD/Blu-ray (BL)</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Help" id="basic-nav-dropdown" className='menu-drop'>
                            <NavDropdown.Item href="#action/3.1" className='menu-item'>FAQ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='menu-item'>Contact us(form)</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className='menu-item'>Getting to LA Store</NavDropdown.Item>
                        </NavDropdown>
                        <div>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
            }



        </>
    )
}
export default Dropmenu;

{/* <NavDropdown.Divider /> */ } //dau gach ngang