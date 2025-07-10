import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react';
import {
    FormValues, EditValues
} from '../config/context';

export default function AppTextArea({ func }) {
    const { contextInit, setcontextInit } = useContext(FormValues)
    const { editObject, setEditObject } = useContext(EditValues)
    const updateDetail = (e) =>
        setEditObject(prevInput => ({
            ...prevInput,
            description: e.target.value
        }))

    const addDetail = (e) =>
        setcontextInit(prevInput => ({
            ...prevInput,
            description: e.target.value
        }))
    const [inputColor, setInputColor] = useState(true)
    const [inputTextColor, setInputTextColor] = useState(true)
    return (
        <>
            <InputGroup className=" flex p-6 ">
                <InputGroup.Text style={{ width: '30%', color: !inputColor ? "red" : !inputTextColor ? "#23e5db" : "" }}
                    className='inputtext  font-bold'>Description</InputGroup.Text>
                <div className='flex flex-col' style={{ width: '70%' }}>
                    <Form.Control onBlur={(e) => {
                        if (e.target.value.trim() == "") {
                            setInputColor(false)

                        } else {
                            !inputColor && setInputColor(true)
                            setInputTextColor(true)

                        }
                    }}

                        onFocus={(e) => {
                            const isRed = window.getComputedStyle(e.target).borderColor === 'rgb(255, 0, 0)';
                            if (!isRed) {

                                setInputTextColor(false)
                            }
                        }}
                        className='formcontrol' onChange={(e) => func == 'add' ? addDetail(e) : updateDetail(e)}
                        style={{
                            border: !inputColor ? 'solid 1px red' : !inputTextColor ? 'solid 1px #23e5db' :
                                'solid 1px #e8ecec',
                            borderRadius: '4px', padding: '5px'
                        }} as="textarea" aria-label="With textarea"
                        placeholder="Describe the item you're selling" />
                    <p style={{ color: 'red', display: inputColor ? 'none' : 'block' }}>this field is required</p>
                </div>
            </InputGroup>
        </>

    )
}