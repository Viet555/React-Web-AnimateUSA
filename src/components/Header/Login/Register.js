import { useNavigate } from 'react-router-dom'
import './Login.scss'
import { useState } from 'react'
import { CreateAccount } from '../../../Services/ApiService'
import { toast } from 'react-toastify'
const Register = () => {
    const [email, setemmail] = useState('')
    const [password, setpassword] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [hiddenpassword, sethiddenpassword] = useState(true)
    const [loading, setloading] = useState(false)
    const handleOnclickeye = () => {
        sethiddenpassword(!hiddenpassword)
    }
    const navigate = useNavigate()

    const handleCreateAccount = async () => {
        try {

            const res = await CreateAccount(email, password, firstName, lastName)
            if (res && res.errcode === -1) {
                toast.error(res.message)
                return
            }
            if (res && res.errcode === 1) {
                toast.warning(res.message)
                return
            }
            else {
                toast.success(res.message)
                navigate('/login')
            }
            setemmail('')
            setfirstName('')
            setlastName('')
            setpassword('')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className='login-container register'>
                <div className='content-up'>
                    <span><a href='/'>HOME</a><i className="fa-solid fa-caret-right mx-3"></i>Create Account</span>
                    <h4>Create Account</h4>
                </div>

                <div className='content-down col-12'>
                    <div className='main-contet-login col-12'>

                        <div className='form-group col-6 '>
                            <div className='header-form '>Register</div>
                            <label>FirstName (*)</label>

                            <input
                                value={firstName}
                                onChange={(event) => setfirstName(event.target.value)}
                                type='email'
                                className='form-control' />

                            <label>LastName (*)</label>
                            <input
                                value={lastName}
                                onChange={(event) => setlastName(event.target.value)}
                                type='email'
                                className='form-control' />

                            <label>Email Address(*)</label>
                            <input
                                value={email}
                                onChange={(event) => setemmail(event.target.value)}
                                type='email'
                                className='form-control' />

                            <label>Password(*)</label>
                            <input
                                value={password}
                                onChange={(event) => setpassword(event.target.value)}
                                type='password'
                                className='form-control' />
                            <span>* Required Fields</span>
                            <div className='button-control'>
                                <button className='btn-login'
                                    onClick={() => handleCreateAccount()}
                                >Submit</button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
export default Register