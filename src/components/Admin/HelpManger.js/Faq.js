import Select from 'react-select';
import MdEditor from 'react-markdown-editor-lite';

import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from "markdown-it";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { handleCreateFaq } from '../../../Services/ApiService';

const mdParser = new MarkdownIt(/* Markdown-it options */);

const FaqManager = () => {



    const [contentMarkdowns, setContentMarkdowns] = useState()
    const [contentHTML, setContentHTML] = useState()

    useEffect(() => {

    }, [])



    const handleEditorChange = (event) => {
        setContentMarkdowns(event.text);   // Lưu trữ nội dung văn bản
        setContentHTML(event.html);        // Lưu trữ nội dung HTML
    }

    const handleSaveFaq = async () => {
        if (contentHTML && contentMarkdowns) {
            let res = await handleCreateFaq({
                contentHTML: contentHTML,
                contentmarkdowns: contentMarkdowns
            })
            console.log(res)
        }
    }
    return (
        <>
            <div className="Faq-container">

                <MdEditor
                    className='py-5 px-4'
                    style={{ height: '500px' }}
                    renderHTML={text => mdParser.render(text)}
                    onChange={(event) => handleEditorChange(event)}
                    value={contentMarkdowns}
                />
                <div className='btn-save-faq text-center p-3 '>
                    <button className='btn btn-warning w-25'
                        onClick={() => handleSaveFaq()}
                    > Save Faq</button>
                </div>
            </div>

        </>
    )
}
export default FaqManager 