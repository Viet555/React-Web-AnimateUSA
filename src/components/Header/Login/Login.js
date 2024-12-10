import { useNavigate } from 'react-router-dom'
import './Login.scss'
import { useState } from 'react'
import { userLogin } from '../../../Services/ApiService'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { UserLoginFail, UserLoginSuccess } from '../../Store/Action/userAction'
import { useSelector } from 'react-redux';
import * as action from '../../Store/export'
const Login = (props) => {

    const [email, setemmail] = useState('')
    const [password, setpassword] = useState('')
    const [hiddenpassword, sethiddenpassword] = useState(true)
    const [loading, setloading] = useState(false)
    const handleOnclickeye = () => {
        sethiddenpassword(!hiddenpassword)
    }
    const ditpatch = useDispatch()
    const navigate = useNavigate()
    const handleForgotPass = () => {
        navigate('/')
    }
    const handleCreateAccount = () => {
        navigate('/register')
    }

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error('Missing input', email)
            return;
        }
        try {
            let res = await userLogin(email, password)

            if (res && res.errcode === 0) {
                ditpatch(UserLoginSuccess(res))
                toast.success('Login Success')
                console.log(res)
                navigate('/')
            }
            else {
                ditpatch(UserLoginFail())
                toast.error(res.message)
            }

        } catch (e) {
            console.log(e)
        }

    }

    return (
        <>
            <div className='login-container'>
                <div className='content-up'>
                    <span><a href='/'>HOME</a><i className="fa-solid fa-caret-right mx-3"></i>My Account</span>
                    <h4>My Account</h4>
                </div>

                <div className='content-down col-12'>
                    <div className='main-contet-login col-12'>

                        <div className='form-group col-6 '>
                            <div className='header-form '>Login</div>
                            <label>Email Address(*)</label>

                            <input
                                value={email}
                                type='email'
                                className='form-control'
                                onChange={(event) => setemmail(event.target.value)}
                            />


                            <label>Password(*)</label>
                            <input
                                value={password}
                                onChange={(event) => setpassword(event.target.value)}
                                type='password'
                                className='form-control' />

                            <div className='forgot-password' onClick={() => handleForgotPass()}>Forgot your password?</div>

                            <div className='button-control'>
                                <button className='btn-login'
                                    onClick={() => handleLogin()}
                                >Log in</button>
                                <button className='btn-login'
                                    onClick={() => handleCreateAccount()}
                                >Create An Account</button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}


export default Login;