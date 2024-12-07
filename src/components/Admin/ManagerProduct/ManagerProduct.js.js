
import { useDispatch, useSelector } from 'react-redux'
import './ManagerProduct.scss'
import * as action from '../../Store/export'
import { useEffect, useState } from 'react'
import Select from 'react-select';
import { createProductDisplay } from '../../../Services/ApiService'
import { toast } from 'react-toastify';
const ManagerProduct = () => {
    const dataProduct = useSelector(state => (state.admin.typeProduct))
    const dispatch = useDispatch()


    const [option, setOption] = useState('')
    const [productName, setProductName] = useState('')
    const [typeProduct, setTypeProduct] = useState('')
    const [count, setCount] = useState('')
    const [tag, setTag] = useState('')
    const [sku, setSku] = useState('')
    const [Categories, setCategories] = useState('')
    const [imageProduct, setImageProduct] = useState('')
    const [imgprev, setImgPrev] = useState(null)

    useEffect(() => {
        dispatch(action.fetchTypeproduct('PRODUCT'))
    }, [])

    useEffect(() => {
        let selecBuild = buildDataSelect(dataProduct)
        setOption(selecBuild)
        console.log(selecBuild)
    }, [dataProduct])

    const buildDataSelect = (inputData) => {
        let result = [];

        if (inputData && inputData.length > 0 &&
            inputData.map((item, index) => {
                let object = {};

                object.label = item.valueVie
                object.value = item.id
                result.push(object)
            })
        )
            return result;
    }

    const handleChangeSelect = (event) => {
        setTypeProduct(event)
    }
    const handleUploadFileImg = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setImgPrev(URL.createObjectURL(event.target.files[0]))
            // setImage(event.target.files[0])

            const reader = new FileReader();
            reader.onload = () => setImageProduct(reader.result); // Base64 string
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    const handleCreateProduct = async () => {
        if (!productName || !typeProduct || !count || !tag || !sku || !imageProduct || !Categories) {
            toast.error("missing input params")
        }

        else {
            let res = await createProductDisplay({
                productName: productName,
                typeProduct: typeProduct.label,
                count: count,
                imageProduct: imageProduct,
                Sku: sku,
                categories: Categories,
                tag: tag

            })
            if (res && res.errCode === 0) {
                toast.success('Create Success')
                setProductName('')
                setTypeProduct('')
                setCount('')
                setCategories('')
                setSku('')
                setTag('')
                setImgPrev([])
                setImageProduct('')
                setProductName('')
            }
        }
    }
    return (
        <>

            <div className="product-container my-5">
                <div className="product-main row px-3">
                    <span>
                        ADD PRODUCT
                    </span>
                    <div className="form-group col-4">
                        <label>Name</label>
                        <input
                            value={productName}
                            onChange={(event) => setProductName(event.target.value)}
                            type='text'
                            className="form-control" />
                    </div>
                    <div className="form-group col-4">
                        <label>Type</label>
                        <Select

                            placeholder='Choose Type'
                            options={option}
                            value={typeProduct}
                            onChange={(event) => handleChangeSelect(event)}
                        />
                    </div>
                    <div className="form-group col-4">
                        <label>Count</label>
                        <input
                            value={count}
                            onChange={(event) => setCount(event.target.value)}
                            type='text'
                            className="form-control" />
                    </div>
                    <div className="form-group col-4">
                        <label>Tag</label>
                        <input
                            value={tag}
                            onChange={(event) => setTag(event.target.value)}
                            type='text'
                            className="form-control" />
                    </div>
                    <div className="form-group col-4">
                        <label>Sku</label>
                        <input
                            value={sku}
                            onChange={(event) => setSku(event.target.value)}
                            type='text'
                            className="form-control" />
                    </div>
                    <div className="form-group col-4">
                        <label>Categories</label>
                        <textarea
                            value={Categories}
                            onChange={(event) => setCategories(event.target.value)}
                            className="form-control">
                        </textarea>

                    </div>
                    <div className="form-group col-4">
                        <>

                            <label htmlFor="imageProduct" className='Add-Image'>Image</label>
                            <input
                                onChange={(event) => handleUploadFileImg(event)}
                                type='file'
                                id='imageProduct'
                                className="form-control" hidden />
                            <div className='img-prev'>
                                {imgprev
                                    ?
                                    <img src={imgprev} />
                                    :
                                    ""
                                }
                                {imgprev ?
                                    <span onClick={() => setImgPrev(null)}>x</span>
                                    :
                                    ""
                                }
                            </div>
                        </>
                        <button className='btn btn-primary w-50 mt-4'
                            onClick={() => handleCreateProduct()}
                        >CREATE</button>
                    </div>

                </div>
            </div>
        </>

    )

}

export default ManagerProduct