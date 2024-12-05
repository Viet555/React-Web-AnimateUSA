import { useEffect, useState } from "react"
import ImgSection from "./DisplayAdd/ImgSection"
import { toast } from "react-toastify"
import { AddBannerImage } from "../../Services/ApiService"

const AdminManager = () => {



    const [isshow, setIsShow] = useState(false)

    const handleShowModelAddImg = () => {
        setIsShow(!isshow)
    }
    const handleSaveAddBanner = async (data) => {
        if (!data.image) {
            toast.error("missing input Image parameters ")
            return;
        } else {
            let res = await AddBannerImage(data)
            if (res && res.errCode === 0) {
                handleShowModelAddImg()
                toast.success('Add Banner Succes')
            }
            if (res & res.errCode !== 0) {
                toast.error(res.message)
            }
            console.log("check res", res)
        }

        // setIsShow(!isshow)


    }
    return (
        <>
            <ImgSection
                show={isshow}
                setShow={handleShowModelAddImg}
                handleSaveAddBanner={handleSaveAddBanner}

            />
        </>
    )
}
export default AdminManager