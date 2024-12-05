
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ImgSection.scss'

const ImgSection = (props) => {

    const { show, setShow, handleSaveAddBanner } = props
    const [title, setTitle] = useState('')
    const [imgPreview, setImgPreview] = useState('')
    const [image, setImage] = useState('')



    const handleLoadImg = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setImgPreview(URL.createObjectURL(event.target.files[0]))
            // setImage(event.target.files[0])

            console.log(typeof image, image); // Kiểm tra loại dữ liệu
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result); // Base64 string
            reader.readAsDataURL(event.target.files[0]);

        }

        else {
            setImgPreview('')
        }

    }
    const handleClose = () => {
        setShow(!show)
        setImgPreview('')
        setTitle('')
        setImage('')
    }
    return (
        <>

            <Button variant="primary"
                onClick={setShow}
                className='btn-add-banner'
            >
                <i className="fa-solid fa-plus"></i> Add Banner
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size='lg'

            >
                <Modal.Header closeButton>
                    <Modal.Title>Banner Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container-form col-12'>
                        <div className='form-group col-12'>
                            <label>Title Banner Image</label>
                            <input
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                                className='form-control'
                                type='text' />
                        </div>
                        <div className='form-group col-12'>
                            <label htmlFor="file-img" className='label-img'> Load Image</label>
                            <input
                                onChange={(event) => handleLoadImg(event)}
                                type='file'
                                id="file-img" hidden />

                        </div>
                        <div className='img-preview col-12'>


                            {imgPreview ?
                                <img src={imgPreview} />

                                :
                                <span >preview Img</span>
                            }

                        </div>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"

                        onClick={handleClose}>
                        cancel

                    </Button>

                    <Button variant="primary" onClick={() => handleSaveAddBanner({ title, image })}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
export default ImgSection