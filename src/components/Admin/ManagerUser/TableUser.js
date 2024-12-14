import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as action from '../../Store/export'
import { Buffer } from "buffer";
import { DeleteUserById } from "../../../Services/ApiService";
import { toast } from "react-toastify";
import ModalEditUser from "./ModalEditUser";
const TableUser = (props) => {

    const dispatch = useDispatch()
    const ListUserState = useSelector(state => state.admin.listUser)
    const [listUser, setListUser] = useState([])
    const [isshow, setIsShow] = useState(false)

    const { handleEditUser } = props



    useEffect(() => {
        dispatch(action.FetchAllUser())
    }, [])
    useEffect(() => {
        if (ListUserState) {
            setListUser(ListUserState)
        }
    }, [ListUserState])
    const handleDeleteUser = async (UserId) => {
        let response = await DeleteUserById(UserId.id)
        if (response && response.errCode === 0) {
            toast.success(response.message)
            dispatch(action.FetchAllUser())
        }
    }

    return (
        <>


            <Table striped bordered hover className='text-center col-12'>
                <thead style={{ background: "rgb(83, 168, 237)" }} className="col-12">
                    <tr>
                        <th>ID</th>
                        <th>first Name</th>
                        <th>last Name </th>
                        <th>Email</th>
                        <th>Gender </th>
                        <th>Address</th>
                        <th>Role</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            let imageBuffer = ''
                            imageBuffer = new Buffer(item.image, 'base64').toString('binary');
                            return (

                                <tr key={`table-user-manager${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.address}</td>
                                    <td>{item.roleId}</td>
                                    <td><img src={imageBuffer} style={{ width: "60px" }}></img></td>
                                    <td>
                                        <div className='action-btn '>
                                            <button
                                                className='btn btn-danger mx-3 px-3'
                                                onClick={() => handleDeleteUser(item)}
                                            >
                                                <i className="fa-solid fa-trash-can "></i></button>
                                            <button className='btn btn-warning px-3'
                                                onClick={() => handleEditUser(item, imageBuffer)}
                                            ><i className="fa-solid fa-pen-to-square "></i></button></div>
                                    </td>

                                </tr>
                            )
                        })
                    }
                    {listUser && listUser.length === 0 &&
                        <tr>
                            <td colSpan={'6'}>
                                not foud User
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>

        </>
    )
}
export default TableUser