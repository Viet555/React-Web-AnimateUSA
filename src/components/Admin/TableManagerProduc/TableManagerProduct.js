import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { Buffer } from "buffer"
import './TableManagerProduct.scss'
import { getALLProductByType, } from '../../../Services/ApiService'
const TableManagerProduct = () => {

    const ListDataRedux = useSelector(state => state.admin.AllProduct)
    const [listProduct, setListProduct] = useState([])

    useEffect(() => {
        if (ListDataRedux) {
            setListProduct(ListDataRedux)
        }
    }, [ListDataRedux])
    const handleOnclickSwitchType = async (input) => {
        let dataSw = await getALLProductByType(input)
        if (dataSw && dataSw.errCode === 0 && dataSw.data) {
            setListProduct(dataSw.data)
        }
    }
    return (
        <>
            <div className=" my-4 text-center " style={{ fontSize: '25px', fontWeight: '600', textTransform: "uppercase" }}>
                Manage users
            </div>
            <div className='table-user my-3  mx-4 '>
                <div className='btn btn-warning px-2 m-2'
                    onClick={() => handleOnclickSwitchType('Anime')}
                >
                    <i className="fa-solid fa-retweet">
                    </i>Type Anime</div>
                <div className='btn btn-info px-2 m-2'
                    onClick={() => handleOnclickSwitchType('Character')}
                >
                    <i className="fa-solid fa-retweet">
                    </i> Type Character</div>
                <div className='btn btn-secondary px-2 m-2'
                    onClick={() => handleOnclickSwitchType('Figure')}
                >
                    <i className="fa-solid fa-retweet">
                    </i> Type Figure</div>
                <Table striped bordered hover className='text-center col-12'>
                    <thead style={{ background: "rgb(83, 168, 237)" }} className="col-12">
                        <tr>
                            <th>ID</th>
                            <th>ProductName</th>
                            <th>Sku</th>
                            <th>Type</th>
                            <th>Count</th>
                            <th>Action</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listProduct && listProduct.length > 0 &&
                            listProduct.map((item, index) => {
                                let imageBuffer = ''
                                imageBuffer = new Buffer(item.imageProduct, 'base64').toString('binary');
                                return (

                                    <tr key={`table-user-manager${index}`}>
                                        <td>{item.id}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.Sku}</td>
                                        <td>{item.typeProducts}</td>
                                        <td>${item.count}</td>
                                        <td>
                                            <div className='action-btn '>
                                                <button
                                                    className='btn btn-danger mx-3 px-3'
                                                // onClick={() => this.handleDeleteUser(item)}
                                                >
                                                    <i className="fa-solid fa-trash-can "></i></button>
                                                <button className='btn btn-warning px-3'
                                                // onClick={() => this.handleEditUser(item)}
                                                ><i className="fa-solid fa-pen-to-square "></i></button></div>
                                        </td>
                                        <td><img className="img-tabel " style={{ width: "60px" }} src={imageBuffer} /></td>
                                    </tr>
                                )
                            })
                        }
                        {/* {userArr && userArr.length === 0 &&
                                <tr>
                                    <td colSpan={'6'}>
                                        not foud User
                                    </td>
                                </tr>
                            } */}
                    </tbody>
                </Table>
            </div >
        </>
    )

}
export default TableManagerProduct