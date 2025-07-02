import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { Form as FormAnt } from 'antd';
import InputGroup from 'react-bootstrap/InputGroup';
import { Switch } from 'antd';
import UploadApp from '../components/upload';
import FormInput from '../components/forminput';
import AppButton from '../components/button';
import { FormValues, EditValues } from '../config/context';
import AppTextArea from '../components/textarea';


function UpdateForm() {
    const { editObject, setEditObject } = useContext(EditValues)
    const { contextInit, setcontextInit } = useContext(FormValues)
   
 
    let result = []
    const recArr = JSON.parse(localStorage.getItem("adds"));
    const update = () => {
        // console.log(editObject)
        for (let i = 0; i < recArr.length; i++) {
            if (editObject.id == recArr[i].id) {
             
                result.push(editObject)
            } else {
                result.push(recArr[i])
            }
        }
        let recArrString = JSON.stringify(result)
        localStorage.setItem("adds", recArrString)
    }

    const updateCategory = (e) => {
        setEditObject(prevInput => ({
            ...prevInput,
            category: e.target.value
        }))
    }

 

    return (
        <>
            <h1
                style={{
                    fontSize: "22px", color: '#002f34', height: '100px'
                }}
                className='uppercase font-bold flex justify-center items-end'>
                Post your add</h1>
            <FormAnt style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
                <div className='mainForm'>
                    <Form.Select onChange={(e) => { updateCategory(e) }}
                        aria-label="Default select example"
                        className='formcontrol font-bold capitalize w-full p-6'
                        defaultValue={editObject.category}
                        style={{ height: '80px', borderBottom: 'solid 2px #a3b4b6' }}>
                        <option className='font-bold'>category</option>
                        <option
                            // {editObject.category=="cars" && defaultChecked}
                            value="cars">Cars</option>
                        <option value="mobiles">Mobiles</option>
                        <option value="flats">Flats</option>
                    </Form.Select>
                    <UploadApp dValue='updateUrl' />
                    <FormInput
                        title="make"
                        dValue={editObject.make}
                        border="true"
                        updateFunc="updateMake"
                        placeholder='Enter Make'
                    />
                    <FormInput title="Ad title"
                        updateFunc="updateTitle"
                        placeholder='Title'
                        dValue={editObject.title} />
                        <AppTextArea func="update"/>
                
                    <FormInput title="Adress"

                        updateFunc="updateAdress"
                        dValue={editObject.adress}
                        placeholder="Adress" />
                </div>
                <div className='mainForm' >
                    <FormInput dValue={editObject.price}
                        title="Price"
                        updateFunc="updatePrice"
                        placeholder="Enter Price" />
                </div>
                <div className='mainForm' >
                    <div style={{ borderBottom: 'solid 2px #a3b4b6' }}>
                        <FormInput title="Name"
                            updateFunc="updateName"
                            dValue={editObject.name} placeholder='Name' />
                        <FormInput title="Mobile Phone Number"
                            updateFunc="updateNum"
                            dValue={editObject.number}
                            placeholder="Enter phone number" />
                        <div className='p-6 flex justify-between'>
                            <InputGroup.Text className='font-bold'
                                style={{ width: '40%' }} >
                                Show my phone number in ads</InputGroup.Text>
                            <Switch style={{ backgroundColor: '#002f34' }}
                                defaultValue={editObject.number ? true : false}
                                onChange={(e) => {
                                    !e && delete editObject.number
                                  
                                }} />
                        </div>
                    </div>
                    <div className='p-6 flex justify-end'>
                        <AppButton className='p-6' title="Update" update={update} />
                    </div>
                </div>
            </FormAnt>

        </>
    );
};
export default UpdateForm;