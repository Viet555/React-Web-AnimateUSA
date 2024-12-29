import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './FooterApp.scss'
import { FOOTER, ROUTE } from '../constant'
const FooterApp = () => {
    return (
        <>
            <div className='footer-container '>
                <div className='footer-main'>
                    <div className='content-left'>
                        <div className='title-contact '>
                            <span>{FOOTER.CONTACT_US}</span>
                            <a href='/'>Contact form</a>
                            <div className='Social-content'>
                                <Nav.Link href="#link" className="header__option ">
                                    <i className="fa-brands fa-facebook-f active1"></i>
                                </Nav.Link>

                                <NavLink to='/login' className='header__option nav-link option-login'>
                                    <i className="fa-brands fa-twitter active2"></i>
                                </NavLink>
                                <Nav.Link href="#link" className="header__option ">
                                    <i className="fa-brands fa-instagram active3"></i>
                                </Nav.Link>

                            </div>
                        </div>
                    </div>
                    <div className='content-center'>
                        <div className='title-contact '>
                            <span>INFORMATION</span>
                            <a href='/'>Terms of Use</a>
                            <a href='/'>Privacy Policy </a>
                            <a href={ROUTE.FAQ_CONTENT}>FAQ</a>

                        </div>
                    </div>

                    <div className='content-right'>

                        <iframe width="400" height="408"
                            src="https://www.youtube.com/embed/qDlayhQkc0Q"
                            title="4K ANIME | relaxing | Beauty Of Anime"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </div>

                </div>
                <div className='footer-end'>
                    <span>  Animate North America., Ltd Torrance, CA</span>


                    <div className='creadit'></div>
                </div>
            </div >


        </>
    )
}
export default FooterApp;