import Form from 'react-bootstrap/Form';
import { Form as FormAnt } from 'antd';
import InputGroup from 'react-bootstrap/InputGroup';
import { Switch } from 'antd';
import React, { useContext, useState } from 'react';
import UploadApp from '../components/upload';
import FormInput from '../components/forminput';
import AppButton from '../components/button';
import { FormValues } from '../config/context';
import AppTextArea from '../components/textarea';

function AppForm() {
  const { contextInit, setcontextInit } = useContext(FormValues)
  const addCategory = (e) => {
    setcontextInit(prevInput => ({
      ...prevInput,
      category: e.target.value
    }))
  }


  // console.log()

  return (
    <>
      <h1 style={{
        fontSize: "22px", color: '#002f34', height: '100px'
      }}
        className='uppercase font-bold flex justify-center items-end'>Post your add</h1>
      <FormAnt style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
        <div className='mainForm'>
          <Form.Select onChange={(e) => { addCategory(e) }}
            aria-label="Default select example"
            className='formcontrol font-bold capitalize w-full p-6'
            style={{ height: '80px', borderBottom: 'solid 2px #a3b4b6' }}>
            <option className='font-bold'>category</option>
            <option value="cars">Cars</option>
            <option value="mobiles">Mobiles</option>
            <option value="flats">Flats</option>
          </Form.Select>
          <UploadApp />
          <FormInput title="Make" border="true" func='make' placeholder='Enter Make' />
          <FormInput title="Ad title" func='title' placeholder='Title' />
          <  AppTextArea func="add" />

          <FormInput title="Adress" func='adress' placeholder="Adress" />
        </div>
        <div className='mainForm' >
          <FormInput title="Price" func='price'
            placeholder="Enter Price" />
        </div>
        <div className='mainForm' >
          <div style={{ borderBottom: 'solid 2px #a3b4b6' }}>
            <FormInput title="Name" func='name' placeholder='Name' />
            <FormInput title="Mobile Phone Number"
              func='mobilenum'
              placeholder="Enter phone number" />
            <div className='p-6 flex justify-between'>
              <InputGroup.Text className='font-bold'
                style={{ width: '40%' }} >
                Show my phone number in ads</InputGroup.Text>
              <Switch
                style={{ backgroundColor: '#002f34' }}
                onChange={(e) => {
                  !e && delete contextInit.number
                }} />
            </div>
          </div>
          <div className='p-6 flex justify-end'>
            <AppButton className='p-6' />
          </div>
        </div>
      </FormAnt>


    </>
  );
};
export default AppForm;