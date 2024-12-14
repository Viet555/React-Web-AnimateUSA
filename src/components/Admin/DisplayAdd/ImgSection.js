
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ImgSection.scss'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../Store/export'
import { Buffer } from 'buffer';
const ImgSection = (props) => {

    const { show, setShow, handleSaveAddBanner } = props
    const [title, setTitle] = useState('')
    const [imgPreview, setImgPreview] = useState('')
    const [image, setImage] = useState('')
    const BannerImg = useSelector(state => state.admin.BannerData)
    const [listBanner, setListBanner] = useState()
    const disPatch = useDispatch()
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
    useEffect(() => {
        setListBanner(BannerImg)
    }, [BannerImg])


    useEffect(() => {
        disPatch(action.fetchLimitBanner())
    }, [])
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
            <div className=" my-2 text-center " style={{ fontSize: '25px', fontWeight: '600', textTransform: "uppercase" }}>
                Banner DisPlay
            </div>
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

            <Table striped bordered hover className='text-center col-12'>
                <thead style={{ background: "rgb(83, 168, 237)" }} className="col-12">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Banner </th>
                    </tr>
                </thead>
                <tbody>
                    {listBanner && listBanner.length > 0 &&
                        listBanner.map((item, index) => {
                            let imageBuffer = ''
                            imageBuffer = new Buffer(item.image, 'base64').toString('binary');
                            return (

                                <tr key={`table-user-manager${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td><img src={imageBuffer} style={{ width: "60px" }}></img></td>
                                    <td>
                                        <div className='action-btn '>
                                            <button
                                                className='btn btn-danger mx-3 px-3'
                                            // onClick={() => handleDeleteUser(item)}
                                            >
                                                <i className="fa-solid fa-trash-can "></i></button>
                                            <button className='btn btn-warning px-3'
                                            // onClick={() => handleEditUser(item, imageBuffer)}
                                            ><i className="fa-solid fa-pen-to-square "></i></button></div>
                                    </td>

                                </tr>
                            )
                        })
                    }
                    {listBanner && listBanner.length === 0 &&
                        <tr>
                            <td colSpan={'6'}>
                                not foud
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
        </>
    )
}
export default ImgSection