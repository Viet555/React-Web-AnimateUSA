import { useEffect, useState } from "react";
import CRUDuser from "./CRUDuser"
import { useDispatch, useSelector } from "react-redux";
import * as action from '../../Store/export'
import TableUser from "./TableUser";
import ModalEditUser from "./ModalEditUser";
import { fetchDataTypeProduct } from '../../../Services/ApiService'
import { Buffer } from "buffer";
const ManagerUser = () => {


    const [isshow, setIsShow] = useState(false)
    const [dataUserEdit, setDataUserEdit] = useState({})
    const [dataRole, setDataRole] = useState([])
    const [dataGender, setDataGender] = useState([])
    const dispatch = useDispatch()
    const ListGender = useSelector(state => state.admin.DataGender)
    useEffect(() => {
        if (ListGender) {
            let selected = buildDataSelect(ListGender.data)
            setDataGender(selected)
        }
    }, [ListGender])
    useEffect(() => {
        dispatch(action.dataGenderAllcodes())
        getDataRolefromAllcode()
    }, [])
    const buildDataSelect = (inputData) => {
        let result = [];

        if (inputData && inputData.length > 0 &&
            inputData.map((item, index) => {
                let object = {};
                object.label = item.valueEng
                object.value = item.id
                result.push(object)
            })
        )
            return result;
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
    const handleEditUser = (user) => {
        setIsShow(!isshow)
        console.log(user)
        setDataUserEdit(user)

    }

    return (
        <>
            <CRUDuser
                buildDataSelect={buildDataSelect}
            />
            <TableUser
                handleEditUser={handleEditUser}
            />
            <ModalEditUser
                setShow={setIsShow}
                dataUserEdit={dataUserEdit}
                show={isshow}
                dataRole={dataRole}
                dataGender={dataGender}
            />
        </>
    )
}
export default ManagerUser