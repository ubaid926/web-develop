import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
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
    return (
        <>
            <InputGroup className=" flex p-6 ">
                <InputGroup.Text style={{ width: '30%' }}
                    className='inputtext  font-bold'>Description</InputGroup.Text>
                <div className='flex flex-col' style={{ width: '70%' }}>
                    <Form.Control onBlur={(e) => {
                        if (e.target.value.trim() == "") {
                            e.target.style.borderColor = 'red'
                            e.target.parentElement.previousSibling.style.color = 'red'
                            e.target.nextElementSibling.style.display = 'block'

                        } else {
                            e.target.style.borderColor = 'black'
                            e.target.parentElement.previousSibling.style.color = 'black'
                            e.target.nextElementSibling.style.display = 'none'
                        }
                    }}

                        onFocus={(e) => {
                            e.target.style.borderColor = ' #23e5db'
                            e.target.parentElement.previousSibling.style.color = '#23e5db'
                        }}
                        className='formcontrol' onChange={(e) => func == 'add' ? addDetail(e) : updateDetail(e)}
                        style={{
                            border: 'solid 1px #002f34',
                            borderRadius: '4px', padding: '5px'
                        }} as="textarea" aria-label="With textarea"
                        placeholder="Describe the item you're selling" />
                    <p style={{ color: 'red', display: 'none' }}>this field is required</p>
                </div>
            </InputGroup>
        </>

    )
}