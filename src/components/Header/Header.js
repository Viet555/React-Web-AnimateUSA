import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.scss'
import { NavLink } from 'react-router-dom';

import { NavItem } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../Store/export'

const Header = () => {
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.user.account);
    console.log("check email state", userInfo)
    return (
        <>
            <div className='header-container col-12'>
                <Navbar expand="lg" className="header__navbar bg-body-tertiary transparent-navbar">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <span className='text-left-header'> Official retailer of anime goods in the U.S. and Canada!</span>
                            </Nav>
                            <Nav className='nav__header-option'>
                                <NavLink to='/login' className='header__option nav-link option-login'> {userInfo && userInfo.firstName ? userInfo.firstName : "Sign In / Register"}</NavLink>
                                <Nav.Link href="#link" className="header__option ">Account </Nav.Link>
                                <Nav.Link href="#link" className="header__option ">Blog</Nav.Link>
                                <NavLink to="/New" className="header__option nav-link ">My Wishlist</NavLink>
                                <NavLink to="/New" className="header__option nav-link ">Help</NavLink>
                                <div className='Social-content'>
                                    <Nav.Link href="#link" className="header__option ">
                                        <i class="fa-brands fa-facebook-f active1"></i>
                                    </Nav.Link>

                                    <NavLink to='/login' className='header__option nav-link option-login'>
                                        <i class="fa-brands fa-twitter active2"></i>
                                    </NavLink>
                                    <Nav.Link href="#link" className="header__option ">
                                        <i class="fa-brands fa-instagram active3"></i>
                                    </Nav.Link>
                                    {userInfo && userInfo.firstName &&
                                        <div className="btn-logout">
                                            <i
                                                onClick={() => dispatch((action.UserLogout()))}
                                                className="fa-solid fa-right-from-bracket">
                                            </i>
                                        </div>
                                    }
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


            </div>

        </>

    )
}

export default Header;
