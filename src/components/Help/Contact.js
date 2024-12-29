import { useNavigate } from "react-router-dom"
import './Contact.scss'
const Contact = () => {
    const navigator = useNavigate()
    return (
        <>
            <div className="contact-us-container">
                <div className="container">
                    <div className='header-faq p-3' style={{ color: '#777', fontSize: '14px', }}>
                        <i className="fa-solid fa-house " style={{ cursor: 'pointer' }} onClick={() => navigator('/')}></i><i className="fa-solid fa-chevron-right mx-2"></i >
                        <span> Contact Us</span>
                    </div>
                    <div className="header-content">
                        <span className="title-header"> Leave a Message</span>
                    </div>
                    <div className="main-content">
                        <div className="content-left">
                            <div className="form-group">
                                <label>Name*</label>
                                <input className="form-control"></input>

                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control"></input>

                            </div>
                            <div className="form-group">
                                <label>TelePhone</label>
                                <input className="form-control"></input>

                            </div>
                        </div>
                        <div className="content-between">

                            <label>Comment *</label>
                            <textarea placeholder="Comment"></textarea>
                            <div className='submit-content my-3'>
                                <button className="btn-Sumit-contact">Submit</button>
                            </div>

                        </div>

                        <div className="content-right"> Business days are as follows: Monday - Friday.</div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Contact