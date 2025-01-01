import { useNavigate } from "react-router-dom"
import './Contact.scss'
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { PostContact } from "../../Services/ApiService"
import { isNumber } from "lodash"
const Contact = () => {
    const navigator = useNavigate()
    const User = useSelector(state => state.user.account)
    const isauthentic = useSelector(state => state.user.isauthentic)
    const [dataUser, setDataUser] = useState()
    const [TelePhone, setTelePhone] = useState()
    const [comment, setComment] = useState()
    useEffect(() => {
        if (isauthentic === true) {
            setDataUser(User)

        }
    }, [User])
    const handleSubmitForm = async () => {
        if (!TelePhone || !comment) {
            toast.error(`missing input`)
        }

        else {
            let res = await PostContact({
                email: dataUser.email,
                telephone: TelePhone,
                Comment: comment
            })
            if (res && res.errCode === 0) {
                toast.success("Success")
                setTelePhone('')
                setComment('')
            }
        }
    }
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
                                <input className="form-control"
                                    value={dataUser?.firstName}
                                ></input>

                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control"
                                    value={dataUser?.email}
                                ></input>

                            </div>
                            <div className="form-group">
                                <label>TelePhone</label>
                                <input className="form-control"
                                    value={TelePhone}
                                    onChange={(event) => setTelePhone(event.target.value)}
                                ></input>

                            </div>
                        </div>
                        <div className="content-between">

                            <label>Comment *</label>
                            <textarea
                                value={comment}
                                onChange={(event) => setComment(event.target.value)}
                                placeholder="Comment"></textarea>
                            <div className='submit-content my-3'>
                                <button className="btn-Sumit-contact"
                                    onClick={() => handleSubmitForm()}
                                >Submit</button>
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