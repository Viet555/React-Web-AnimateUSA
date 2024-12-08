import Select from 'react-select';
import MdEditor from 'react-markdown-editor-lite';

import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from "markdown-it";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getALLProductByType, AllDataProductByid, SaveDeltailProduct } from '../../../Services/ApiService'
import { CRUD_ACTION } from '../../../constant';
import { toast } from 'react-toastify';
const mdParser = new MarkdownIt(/* Markdown-it options */);

const MarkDownProduct = () => {

    const listTypeProduct = useSelector(state => state.admin.typeProduct)
    const [opton, setOption] = useState([])
    const [optonAllName, setOptonAllName] = useState([])
    const [selectedProduct, setSelectedProduct] = useState([])
    const [contentMarkdowns, setContentMarkdowns] = useState('')
    const [contentHTML, setContentHTML] = useState()
    const [description, setDescription] = useState('')
    const [productName, setProductName] = useState('')
    const [hasOldData, sethasOldData] = useState(false)
    const [dataProduct, setDataProduct] = useState([])
    const [action, setAction] = useState('')
    useEffect(() => {
        let selectBuild = buildDataSelect(listTypeProduct)
        setOption(selectBuild)

    }, [listTypeProduct])


    const buildDataSelect = (inputData, type) => {
        let result = [];

        if (inputData && inputData.length > 0 &&
            inputData.map((item, index) => {
                let object = {};

                object.label = type === 'SelectAll' ? item.productName : item.valueVie
                object.value = item.id
                result.push(object)
            })
        )
            return result;
    }
    const handleEditorChange = (event) => {
        setContentMarkdowns(event.text);   // Lưu trữ nội dung văn bản
        setContentHTML(event.html);        // Lưu trữ nội dung HTML
    }

    const handleChangeSelect = async (event) => {
        setSelectedProduct(event)
        let res = await getALLProductByType(event.label)
        if (res && res.data) {
            let dataName = []
            dataName = buildDataSelect(res.data, 'SelectAll')
            setOptonAllName(dataName)
        }

    }
    const handleChangeSelectName = async (event) => {
        setProductName(event)
        let resData = await AllDataProductByid(event.value)
        if (resData && resData.data && resData.errCode === 0) {
            setDataProduct(resData.data)
            console.log("check mar", resData.data.markdown)
        }
        if (resData && resData.data && resData.data.markdown) {
            let markdown = resData.data.markdown
            setContentHTML(markdown.contentHTML)
            setContentMarkdowns(markdown.contentmarkdowns)
            setDescription(markdown.description)
            sethasOldData(true)
        } else {
            setContentHTML('')
            setContentMarkdowns('')
            setDescription('')
            sethasOldData(false)
        }
    }
    const handleSaveDetailProduct = async () => {
        let response = await SaveDeltailProduct({
            contentHTML: contentHTML,
            contentmarkdowns: contentMarkdowns,
            description: description,
            productId: productName.value,
            action: hasOldData === false ? CRUD_ACTION.CREATE : CRUD_ACTION.EDIT
        })
        if (response && response.errCode === 0) {
            toast.success(response.message)

        }
        else {
            toast.error(response.message)
        }
    }

    return (
        <>
            <div className="markdown-container">
                <div className="detail-product col-12 px-4 row">
                    <div className="form-group col-3">
                        <label>Select Type </label>
                        <Select

                            value={selectedProduct}
                            onChange={(event) => handleChangeSelect(event)}
                            options={opton}
                        />
                    </div>
                    <div className='form-group col-3'>
                        <label>Sku</label>
                        <input
                            value={dataProduct.Sku}
                            type='text'
                            className='form-control' disabled />
                    </div>
                    <div className='form-group col-6'>
                        <label>ProductName</label>
                        <Select
                            value={productName}
                            onChange={(event) => handleChangeSelectName(event)}
                            options={optonAllName}
                        />
                    </div>
                </div>
                <MdEditor
                    className='py-5 px-4'
                    style={{ height: '500px' }}
                    renderHTML={text => mdParser.render(text)}
                    onChange={(event) => handleEditorChange(event)}
                    value={contentMarkdowns}
                />
                <button className='btn btn-primary my-3 w-25'
                    onClick={() => handleSaveDetailProduct()}
                >
                    {hasOldData === false
                        ? 'Create'
                        : 'Edit'
                    }
                </button>
            </div>

        </>
    )
}
export default MarkDownProduct 