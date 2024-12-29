import Select from 'react-select';
import MdEditor from 'react-markdown-editor-lite';

import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from "markdown-it";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ApiGetFaq } from '../../Services/ApiService';
import { useNavigate } from 'react-router-dom';



const Faq = () => {
    const [dataFaq, setDataFaq] = useState()
    const navigator = useNavigate()
    useEffect(() => {
        getContentFaq()
    }, [])
    const getContentFaq = async () => {
        let res = await ApiGetFaq()
        if (res && res.errCode === 0) {
            setDataFaq(res.data)
            console.log(res)
        }

    }

    return (
        <>

            <div className="content-markdown  container"  >
                <div className='header-faq p-3' style={{ color: '#777', fontSize: '13px', }}>
                    <i className="fa-solid fa-house " style={{ cursor: 'pointer' }} onClick={() => navigator('/')}></i><i className="fa-solid fa-chevron-right mx-2"></i >
                    <span> FAQ</span>
                </div>
                {dataFaq && dataFaq.contentHTML &&
                    <div dangerouslySetInnerHTML={{ __html: dataFaq.contentHTML }}></div>
                }
            </div>
        </>
    )
}
export default Faq 