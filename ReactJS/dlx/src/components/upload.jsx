import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { FormValues, EditValues } from '../config/context';
import { useContext, useEffect } from 'react';
import { InputGroup } from 'react-bootstrap';
const UploadApp = ({ dValue }) => {
  const { editObject, setEditObject } = useContext(EditValues)
  const { contextInit, setcontextInit } = useContext(FormValues)
  const [urlState, setUrlState] = useState(null)
  const addImage = () => {
    setcontextInit(prevInput => ({
      ...prevInput,
      image_url: urlState
    })
    )
    setUrlState(null)
    // console.log(url)
  }
  const updateImage = () => {
    setEditObject(prevInput => ({
      ...prevInput,
      image_url: urlState
    })
    )
    setUrlState(null)
    // console.log(url)
  }
  // console.log(contextInit)
  // useEffect(() => {
  //   console.log(urlState);
  // }, [urlState]);
 const [inputColor, setInputColor] = useState(true)
  const [inputTextColor, setInputTextColor] = useState(true)
  return (
    <div className='flex p-6'
      style={{
        borderBottom: 'solid 2px #a3b4b6',
      }}>
      {/* <InboxOutlined style={{ fontSize: '40px' }} /> */}
      <InputGroup.Text className='font-bold'
        style={{ width: '30%',color: !inputColor ? "red" : !inputTextColor ? "#23e5db" : "" }} > Upload Images</InputGroup.Text>
      <div className='flex flex-col '
        style={{ width: "70%" ,color: !inputColor ? "red" : !inputTextColor ? "#23e5db" : "" }}>
        <p className="ant-upload-text font-bold text-center">
          Click this area to upload</p>
        {/* <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from uploading company data or other
          banned files.
        </p> */}
        <input
          //  type={dvalue?"text":'file'}
          // {/* // {dvalue && value={dvalue}} */}
          onFocus={(e) => {
              const isRed = window.getComputedStyle(e.target).borderColor === 'rgb(255, 0, 0)';
            if (!isRed) {
              e.target.style.borderColor = '#23e5db'
              setInputTextColor(false)
            }
          }}
          onBlur={(e) => {
          if (e.target.value.trim() == "") {
              setInputColor(false)
              e.target.style.borderColor = 'red'
            } else {
              !inputColor && setInputColor(true)
              setInputTextColor(true)
              e.target.style.borderColor = '#e8ecec'
            }
          }}
          type='file'
          className='uploadinput'
          style={{
             border: inputColor ? 'solid 1px #e8ecec' : 'solid 1px red', width: '100%',
            backgroundColor: '#fafafa', height: '100px',
            display:'flex', justifyContent:'center'
          }}
          onChange={
            async (e) => {
              const file = e.target.files[0];
              if (!file) return
              const data = new FormData()
              data.append("file", file)
              data.append("upload_preset", "olx_ad_image")
              data.append("cloud_name", "dcjsi7kem")
              const res = await fetch("https://api.cloudinary.com/v1_1/dcjsi7kem/image/upload",
                {
                  method: "POST",
                  body: data
                })
              const uploadImageUrl = await res.json()
              // console.log(uploadImageUrl.url);
              const imgUrl = uploadImageUrl.url
              setUrlState(imgUrl);
              // console.log(imgUrl)
            }
          }
        />
        {urlState && !dValue ? addImage() :
          urlState && dValue ? updateImage() : ""}
        <p style={{ color: 'red', display: inputColor ? 'none' : 'block' }}>this field is required</p>
        {/* {urlState &&
          <img src={urlState} style={{ width: "100px", height: '100px' }} />
        } */}
      </div>
      {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
    </div>
  )
};
export default UploadApp;