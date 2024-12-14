import { useDispatch, useSelector } from 'react-redux'

import * as action from '../../Store/export'
import { useEffect, useState } from 'react'
import Select from 'react-select';
import { toast } from 'react-toastify';
import { CreateAccount, fetchDataTypeProduct } from '../../../Services/ApiService'
import { set } from 'lodash';

const CRUDuser = (props) => {

    const { buildDataSelect } = props
    const ListGender = useSelector(state => state.admin.DataGender)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [roleId, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState('')
    const [gender, setGender] = useState('')
    const [dataRole, setDataRole] = useState([])
    const [dataGender, setDataGender] = useState([])
    useEffect(() => {
        getDataRolefromAllcode()
    }, [])

    const dispatch = useDispatch()
    useEffect(() => {
        if (ListGender) {
            let selectedGender = buildDataSelect(ListGender.data)
            setDataGender(selectedGender)
        }
    }, [ListGender])

    const handleChangeSelect = (event) => {
        setRole(event.label)
    }

    const getDataRolefromAllcode = async () => {
        try {
            let res = await fetchDataTypeProduct('ROLE')
            if (res && res.errCode === 0 && res.data) {
                let selected = buildDataSelect(res.data)
                setDataRole(selected)
            }

        } catch (e) {
            console.log(e)
        }
    }
    const handleUploadFileImg = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setImagePreview(URL.createObjectURL(event.target.files[0]))
            // setImage(event.target.files[0])

            const reader = new FileReader();
            reader.onload = () => setImage(reader.result); // Base64 string
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    const handleCreateUser = async () => {

        if (!firstName || !lastName || !password || !roleId || !email) {
            toast.error('missing input parameter')
        }
        else {

            let response = await CreateAccount(email, password, firstName, lastName, roleId, image, gender, address)
            console.log(response)
            if (response && response.errcode === 0) {
                toast.success(response.message)
                setEmail('')
                setFirstName('')
                setLastName('')
                setGender('')
                setImage('')
                setAddress('')
                setPassword('')
                dispatch(action.FetchAllUser())
            }
            if (response && response.errcode === 1) {
                toast.warning(response.message)
            }
        }

    }
    const handleCloseImage = () => {
        setImagePreview(null)
        setImage(null)
    }
    return (
        <>
            <div className="product-container my-5">
                <div className="product-main row px-3">
                    <span>
                        ADD USER
                    </span>
                    <div className="form-group col-4">
                        <label>First Name</label>
                        <input
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                            type='text'
                            className="form-control" />
                    </div>
                    <div className="form-group col-4">
                        <label>Last Name</label>
                        <input
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                            type='text'
                            className="form-control" />
                    </div>
                    <div className="form-group col-4">
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="form-control">
                        </input>

                    </div>
                    <div className="form-group col-4">
                        <label>Password</label>
                        <input
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            type='password'
                            className="form-control" />
                    </div>
                    <div className="form-group col-4">
                        <label>Role</label>
                        <Select
                            placeholder={roleId}
                            options={dataRole}
                            value={roleId}
                            onChange={(event) => handleChangeSelect(event)}
                        />
                    </div>

                    <div className="form-group col-4">
                        <label>Address</label>
                        <input
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            type='text'
                            className="form-control" />
                    </div>
                    <div className="form-group col-4">
                        <label>Gender</label>
                        <Select
                            placeholder={gender}
                            options={dataGender}
                            value={gender}
                            onChange={(event) => setGender(event.label)}
                        />
                    </div>

                    <div className="form-group col-4 my-4">
                        <>

                            <label htmlFor="imageProduct" className='Add-Image'>Image</label>
                            <input
                                onChange={(event) => handleUploadFileImg(event)}
                                type='file'
                                id='imageProduct'
                                className="form-control" hidden />
                            <div className='img-prev'>
                                {imagePreview
                                    ?
                                    <img src={imagePreview} />
                                    :
                                    ""
                                }
                                {imagePreview ?
                                    <span onClick={() => handleCloseImage()}>x</span>
                                    :
                                    ""
                                }
                            </div>
                        </>
                        <button className='btn btn-primary w-50 mt-4'
                            onClick={() => handleCreateUser()}
                        >CREATE</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default CRUDuser