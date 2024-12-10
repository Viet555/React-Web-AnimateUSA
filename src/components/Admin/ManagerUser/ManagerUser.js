import CRUDuser from "./CRUDuser"

const ManagerUser = () => {
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

    return (
        <>
            <CRUDuser
                buildDataSelect={buildDataSelect}
            />
        </>
    )
}
export default ManagerUser