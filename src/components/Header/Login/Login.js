import { useNavigate } from 'react-router-dom'
import './Login.scss'
import { useState } from 'react'

const Login = () => {
    const [email, setemmail] = useState('')
    const [password, setpasswordd] = useState('')
    const [hiddenpassword, sethiddenpassword] = useState(true)
    const [loading, setloading] = useState(false)
    const handleOnclickeye = () => {
        sethiddenpassword(!hiddenpassword)
    }
    return (
        <>
            <div className="main-container">

                <div className="form-group col-3 form-container">
                    <div className="Header-login">LOGIN</div>
                    <div className='form-content'>

                        <input
                            placeholder="Email"
                            type={"email"}
                            className='form-control'
                            value={email}
                            onChange={(event) => setemmail(event.target.value)} />
                        <div className='input-password'>
                            <input
                                placeholder="Password"
                                type={!hiddenpassword ? "text" : "password"}
                                className='form-control'
                                value={password}
                                onChange={(event) => setpasswordd(event.target.value)} />
                            <span

                                onClick={() => handleOnclickeye()}
                            >
                                {hiddenpassword ?
                                    <i className="fa-solid fa-eye-slash"></i>
                                    :
                                    <i className="fa-solid fa-eye"></i>
                                }
                            </span>
                        </div>
                    </div>
                    <div className='forget-password ' >Forget password ?</div>
                    <div className='clear'></div>
                    <div className="btn-login">

                        {email && password ?
                            <button className='btn-acction'
                                disabled={loading === true}
                            >
                                {loading === true && <i class="fa-solid fa-spinner"></i>}

                                LOGIN</button>
                            :
                            <button className='btn-disable-acction'
                                disabled
                            >LOGIN</button>
                        }
                    </div>

                    <div className='dont-account'>
                        you don't have an account yet ?
                        <a href='/'>registry</a>
                    </div>
                    <div className='return-home'
                    >
                        <span><a href='/'><i class="fa-solid fa-arrow-left"></i> go to the homepage</a> </span>
                    </div>
                </div >

            </div>

        </>
    )
}
export default Login