
import { Button, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import _ from "lodash"
import { handleUpdateUserByAdmin } from "../../../Services/ApiService"
import { toast } from "react-toastify"
import * as action from '../../Store/export'
import Select from 'react-select';
import './ModalEditUser.scss'
const ModalEditUser = (props) => {
    const disPatch = useDispatch()
    const { show, setShow, dataUserEdit, dataRole, dataGender, imageBuffer } = props
    const [dataUser, setDataUser] = useState()

    const handleClose = () => {
        setShow(!show)

        setFirstName("")
        setLastName("")
        setRole("")
        setEmail("")
        setGender("")
        setAddress("")
        setImage("")
        setImagePreview('')
    }

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [roleId, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState('')
    const [gender, setGender] = useState('')

    useEffect(() => {
        if (!_.isEmpty(dataUserEdit)) {
            setFirstName(dataUserEdit.firstName)
            setLastName(dataUserEdit.lastName)
            setRole(dataUserEdit.roleId)
            setEmail(dataUserEdit.email)
            setGender(dataUserEdit.gender)
            setAddress(dataUserEdit.address)

            setImage(dataUserEdit.image)

        }
        if (imageBuffer) {
            setImagePreview(imageBuffer)
        }

    }, [dataUserEdit])

    const handleSubmitUpdate = async () => {
        let res = await handleUpdateUserByAdmin(dataUserEdit.id, firstName, lastName, roleId, address, gender, image)
        if (res && res.errCode === 0) {
            toast.success(res.message)
            handleClose()
            disPatch(action.FetchAllUser())

        }
    }
    const handleLoadImg = (event) => {

        if (event.target && event.target.files && event.target.files[0]) {
            setImagePreview(URL.createObjectURL(event.target.files[0]))
            // setImage(event.target.files[0])

            const reader = new FileReader();
            reader.onload = () => setImage(reader.result); // Base64 string
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    return (
        <>
            <Modal
                show={show}
                onHide={setShow}
                size='xl'

            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-Edit col-12 row '>
                        <div className='form-group col-4 my-3'>
                            <label>First Name</label>
                            <input
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                className='form-control '
                                type='text' />
                        </div>
                        <div className='form-group col-4 my-3'>
                            <label>last Name</label>
                            <input
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                className='form-control '
                                type='text' />
                        </div>
                        <div className='form-group col-4 my-3'>
                            <label>Email</label>
                            <input
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                className='form-control'
                                type='text'
                                disabled
                            />

                        </div>
                        <div className='form-group col-3 my-4'>
                            <Select
                                placeholder={roleId}
                                options={dataRole}
                                value={roleId}
                                onChange={(event) => setRole(event.label)}
                            />
                        </div>
                        <div className='form-group col-3 my-4'>
                            <Select
                                placeholder={gender}
                                options={dataGender}
                                value={gender}
                                onChange={(event) => setGender(event.label)}
                            />
                        </div>
                        <div className='form-group col-6'>
                            <label>Address</label>
                            <input
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                                className='form-control'
                                type='text' />
                        </div>
                        <div className='form-group col-4'>
                            <label htmlFor="file-img" className='btn btn-secondary' > Load Image</label>

                            <input

                                onChange={(event) => handleLoadImg(event)}
                                type='file'
                                id="file-img" hidden

                            />

                        </div>

                        <div className='img-preview col-3 mt-4 ' >

                            {imagePreview ?
                                <img src={imagePreview} />

                                :
                                <span >preview Img</span>
                            }

                        </div>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"

                        onClick={() => handleClose()}>
                        cancel

                    </Button>

                    <Button variant="primary" onClick={() => handleSubmitUpdate()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalEditUser