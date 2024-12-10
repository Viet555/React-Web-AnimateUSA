import { useDispatch, useSelector } from 'react-redux'

import * as action from '../../Store/export'
import { useEffect, useState } from 'react'
import Select from 'react-select';
import { toast } from 'react-toastify';
import { fetchDataTypeProduct } from '../../../Services/ApiService'

const CRUDuser = (props) => {

    const { buildDataSelect } = props

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState('')
    const [gender, setGender] = useState('')
    const [dataRole, setDataRole] = useState([])
    useEffect(() => {
        getDataRolefromAllcode()
    }, [])


    const handleChangeSelect = (event) => {
        setRole(event)
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
                        <label>Role</label>
                        <Select
                            placeholder='Choose Type'
                            options={dataRole}
                            value={role}
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
                        <input
                            value={gender}
                            onChange={(event) => setGender(event.target.value)}
                            type='text'
                            className="form-control" />
                    </div>

                    <div className="form-group col-4 my-2">
                        <>

                            <label htmlFor="imageProduct" className='Add-Image'>Image</label>
                            <input
                                // onChange={(event) => handleUploadFileImg(event)}
                                type='file'
                                id='imageProduct'
                                className="form-control" hidden />
                            <div className='img-prev'>
                                {/* {imgprev
                                    ?
                                    <img src={imgprev} />
                                    :
                                    ""
                                }
                                {imgprev ?
                                    <span onClick={() => setImgPrev(null)}>x</span>
                                    :
                                    ""
                                } */}
                            </div>
                        </>
                        <button className='btn btn-primary w-50 mt-4'
                        // onClick={() => handleCreateProduct()}
                        >CREATE</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default CRUDuser