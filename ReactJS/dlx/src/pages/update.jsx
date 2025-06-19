import Form from 'react-bootstrap/Form';
import { Form as FormAnt } from 'antd';
import InputGroup from 'react-bootstrap/InputGroup';
import { Switch } from 'antd';
import React, { useContext, useState } from 'react';
import UploadApp from '../components/upload';
import AppLocation from '../components/location';
import FormInput from '../components/forminput';
import AppButton from '../components/button';
import { FormValues, EditValues } from '../config/context';


function UpdateForm() {
    const { editObject, setEditObject } = useContext(EditValues)
     const { contextInit, setcontextInit } = useContext(FormValues)
    // const [editOject, setEditObject] = useState({})
    // const onFinish = values => {
    //   console.log('Success:', values);
    // };
    // const onFinishFailed = errorInfo => {
    //   console.log('Failed:', errorInfo);
    // };
    // const {contextInit,setcontextInit}=useContext(FormValues)
    //  <Modal
    //  key={i}
    // open={open}
    // onClose={handleClose}
    // aria-labelledby="modal-modal-title"
    // aria-describedby="modal-modal-description">
    // <Box sx={style} className='flex flex-col gap-4'>
    //     <h1>Edit your details</h1>
    //     <TextField
    //         style={{ width: '100%' }}
    //         type='file'
    //         id="outlined-required"
    //         title='afjsdlkjafsjk'
    // itemID='Textfield'
    // onClick={(e) => e.target.type = "file"}
    // label="Title"
    // defaultValue={modalTitle.image_url}
    // onChange={
    //     async (e) => {
    //         const file = e.target.files[0];
    //         if (!file) return
    //         const data = new FormData()
    //         data.append("file", file)
    //         data.append("upload_preset", "olx_ad_image")
    //         data.append("cloud_name", "dcjsi7kem")
    //         const res = await fetch("https://api.cloudinary.com/v1_1/dcjsi7kem/image/upload",
    //             {
    //                 method: "POST",
    //                 body: data
    //             })
    //         const uploadImageUrl = await res.json()
    // console.log(uploadImageUrl.url);
    // const imgUrl = uploadImageUrl.url
    // setUrlState2(imgUrl)
    // ;
    // urlVar = imgUrl
    //  console.log(urlVar)
    // }}
    // />
    // {urlState2 &&
    //     addUpdateImage()
    // }

    const update = () => {
        console.log(editObject)
    }

    // const [contextInit, setcontextInit] = useState({})

    const updateCategory = (e) => {
        setEditObject(prevInput => ({
            ...prevInput,
            category: e.target.value
        }))
    }

    const updateDetail = (e) =>
        setEditObject(prevInput => ({
            ...prevInput,
         description: e.target.value
        }))


    { console.log(editObject,"editObject") }
    { console.log(contextInit,"contextInit") }

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
                        <option  value="mobiles">Mobiles</option>
                        <option value="flats">Flats</option>
                    </Form.Select>
                    <UploadApp dValue={editObject.image_url} />
                    <FormInput title="Make"
                        dValue={editObject.make}
                        border="true" func='make'
                        updateFunc="updateMake"
                        placeholder='Enter Make'
                    />
                    <FormInput title="Ad title" func='title'
                     updateFunc="updateTitle"
                        placeholder='Title'
                        dValue={editObject.title} />
                    <InputGroup className=" flex p-6 ">
                        <InputGroup.Text
                            style={{ width: '30%' }}
                            className='inputtext  font-bold'>
                            Description</InputGroup.Text>
                        <Form.Control
                            // onMouseLeave={(e) => {
                            //     if (e.target.value.length == 0) {
                            //         e.target.style.outlineColor = 'red'
                            //     }
                            // }
                            // }
                            className='formcontrol'
                            onChange={(e) => updateDetail(e)}
                            defaultValue={editObject.description}
                            style={{ width: '70%', border: 'solid 1px #002f34', borderRadius: '4px', padding: '5px' }} as="textarea" aria-label="With textarea" placeholder="Describe the item you're selling" />
                    </InputGroup>
                    <FormInput title="Adress"
                        func='adress'
                         updateFunc="updateAdress"
                        dValue={editObject.adress}
                        placeholder="Adress" />
                </div>
                <div className='mainForm' >
                    <FormInput dValue={editObject.price}
                        title="Price" func='price'
                         updateFunc="updatePrice"
                        placeholder="Enter Price" />
                </div>
                <div className='mainForm' >
                    <div style={{ borderBottom: 'solid 2px #a3b4b6' }}>
                        <FormInput title="Name" func='name'
                         updateFunc="updateName"
                            dValue={editObject.name} placeholder='Name' />
                        <FormInput title="Mobile Phone Number"
                            func='mobilenum'  updateFunc="updateNum"
                             dValue={editObject.number}
                            placeholder="Enter phone number" />
                        <div className='p-6 flex justify-between'>
                            <InputGroup.Text className='font-bold'
                                style={{ width: '40%' }} >
                                Show my phone number in ads</InputGroup.Text>
                            <Switch style={{ backgroundColor: '#002f34' }}
                            defaultValue={editObject.number?true:false}
                                onChange={(e) => {
                                    e && delete contextInit.number
                                    // console.log(contextInit)
                                }} />
                        </div>
                    </div>
                    {/* </FormAnt.Item> */}
                    {/* </FormAnt> */}
                    <div className='p-6 flex justify-end'>
                        <AppButton className='p-6' title="Update" update={update} />
                    </div>
                </div>
            </FormAnt>
          
        </>
    );
};
export default UpdateForm;