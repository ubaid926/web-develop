import { useState, useContext, useId } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {
  FormValues, EditValues
} from '../config/context';
function FormInput({ title, border, placeholder, func, dValue, updateFunc }) {
  const { contextInit, setcontextInit } = useContext(FormValues)
  const { editObject, setEditObject } = useContext(EditValues)
  const addId = useId()
  const addMake = (e) => {
    setcontextInit(prevInput => ({
      ...prevInput,
      make: e.target.value
    }))
  }
  const updateMake = (e) => {
    setEditObject(prevInput => ({
      ...prevInput,
      make: e.target.value
    }))
  }
  const updatePrice = (e) => {
    setEditObject(prevInput => ({
      ...prevInput,
      price: e.target.value
    }))
  }
  const addPrice = (e) => {
    setcontextInit(prevInput => ({
      ...prevInput,
      price: e.target.value
    }))
    setcontextInit(prevInput => ({
      ...prevInput,
      id: addId
    }))

  }
  const updateTitle = (e) => {
    setEditObject(prevInput => ({
      ...prevInput,
      title: e.target.value
    }))
  }

  const addTitle = (e) => {
    setcontextInit(prevInput => ({
      ...prevInput,
      title: e.target.value
    }))
  }
  const addName = (e) => {
    setcontextInit(prevInput => ({
      ...prevInput,
      name: e.target.value
    }))
  }
  const updateName = (e) => {
    setEditObject(prevInput => ({
      ...prevInput,
      name: e.target.value
    }))
  }
  const addNum = (e) => {
    setcontextInit(prevInput => ({
      ...prevInput,
      number: e.target.value
    }))
  }
  const updateNum = (e) => {
    setEditObject(prevInput => ({
      ...prevInput,
      number: e.target.value
    }))
  }
  const addAdress = (e) => {
    setcontextInit(prevInput => ({
      ...prevInput,
      adress: e.target.value
    }))
  }
  const updateAdress = (e) => {
    setEditObject(prevInput => ({
      ...prevInput,
      adress: e.target.value
    }))
  }
  // console.log(editObject)

  return (
    <InputGroup style={border && { borderBottom: 'solid 2px #a3b4b6' }}
      className=" flex p-6  ">
      <div style={{ width: '30%' }}>
        <InputGroup.Text className='inputtext font-bold'
          id="inputGroup-sizing-sm">{title}</InputGroup.Text>
      </div>
      <Form.Control className='formcontrol'
        type={func == 'mobilenum' ? 'number' : func == 'price' ? "number" : "text"
        }
        onChange={(e) => {
          if (func) {
            // if (func === 'price') {
            //   addPrice(e);
            // } else if (func === 'title') {
            //   addTitle(e);
            // } else if (func === 'name') {
            //   addName(e);
            // } else if (func === 'mobilenum') {
            //   addNum(e);
            // } else if (func === 'adress') {
            //   addAdress(e);
            // } else if (func === 'make') {
            //   addMake(e);
            // }
            switch (func) {
              case "price":
                addPrice(e)
                break;
              case "title":
                addTitle(e)
                break;
              case "name":
                addName(e)
                break;
              case "mobilenum":
                addNum(e)
                break;
              case "adress":
                addAdress(e)
                break;
              case "make":
                addMake(e)
                break;
            }
          }
          else {
            switch (updateFunc) {
              case "updatePrice":
                updatePrice(e)
                break;
              case "updateTitle":
                updateTitle(e)
                break;
              case "updateName":
                updateName(e)
                break;
              case "updateNum":
                updateNum(e)
                break;
              case "updateAdress":
                updateAdress(e)
                break;
              case "updateMake":
                updateMake(e)
                break;

            }
          }


        }
        }
        defaultValue={dValue}
        placeholder={placeholder}
        style={{ width: '70%', height: '42px', border: 'solid 1px #002f34', borderRadius: '4px', padding: '5px' }}
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
      />
    </InputGroup>
  )
}
export default FormInput