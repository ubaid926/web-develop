import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdCancelPresentation } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { useState, useRef, useContext } from 'react';
// import { Modal } from 'antd';
import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { ModalTitle } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { EditValues } from '../config/context';

function AppAdd() {
    const { editObject, setEditObject } = useContext(EditValues)
    const style = {
        borderRadius: '7px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: '420px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const adds = localStorage.getItem("adds")
    let recAdd = []
    if (adds) {
        recAdd = JSON.parse(adds)
    }
    const [modalTitle, setModalTitle] = useState("")
    const [updateStorage, setupdateStorage] = useState()
    const [open, setOpen] = React.useState(false);
    let modalNumRef = useRef(null);
    const handleOpen = (id) => {
        setOpen(true)
        // setModalTitle(recAdd[i])
        modalNumRef = id;
        console.log(modalNumRef)
        // modalNum=i
        // console.log(modalTitle)
    };

    const [addUpdateObj, setAddUpdateObj] = useState({})
    // let addUpdateObj = {}

    let searched
    const updateAdd = () => {
        const recArr2 = JSON.parse(localStorage.getItem("adds"));
        let modalNum = modalNumRef.current
        console.log(recArr2)
        let recArr2Obj = recArr2.filter(keyid => { keyid })
        console.log(recArr2Obj)
        // const keysUpdateobj = Object.keys(addUpdateObj);
        // const keysrecArr2 = Object.keys(recArr2Obj);
        // console.log(recArr2)
        // for (let key in addUpdateObj) {
        // searched = keysrecArr2.filter(key => !(key in addUpdateObj));
        // console.log(key, "addupdateobj")
        // }
        // for (let key2 in recArr2Obj) {
        //     for (let i = 0; i < searched.length; i++) {
        //         if (key2 == searched[i]) {
        //             setAddUpdateObj(prevInput => ({
        //                 ...prevInput,
        //                 [key2]: recArr2Obj[key2]
        //             })
        //             )
        //         }
        //     }
        // }
        // const newEntries = {};
        // searched.forEach(key => {
        //     newEntries[key] = recArr2Obj[key];
        // });

        // Update state once
        // setAddUpdateObj(prev => ({
        //     ...prev,
        //     ...newEntries
        // }));

        // Also update recArr2 with the merged object
        // recArr2[modalNum] = { ...addUpdateObj, ...newEntries };

        // Save to localStorage
        // localStorage.setItem("adds", JSON.stringify(recArr2));

        // recArr2[modalNum] = addUpdateObj
        // let recArrString = JSON.stringify(recArr2)
        // localStorage.setItem("adds", recArrString)
        handleClose()

    }


    const handleClose = () => setOpen(false);
    const [urlState2, setUrlState2] = useState(null)
    // let urlVar = ""

    const addUpdateImage = () => {
        //  console.log(urlVar)
        // addUpdateObj.image_url = urlVar
        setAddUpdateObj(prevInput => ({
            ...prevInput,
            image_url: urlState2
        })
        )
        // urlVar = ""
        setUrlState2(null)
    }
    // console.log(urlVar)
    const addUpdatedPrice = (e) => {
        setAddUpdateObj(prevInput => ({
            ...prevInput,
            price: e.target.value
        })
        )
        // addUpdateObj.price = e.target.value
    }
    const addUpdatedAdress = (e) => {
        setAddUpdateObj(prevInput => ({
            ...prevInput,
            adress: e.target.value
        })
        )
        // addUpdateObj.adress = e.target.value
    }
    const addUpdatedMake = (e) => {
        setAddUpdateObj(prevInput => ({
            ...prevInput,
            make: e.target.value
        })
        )
        // addUpdateObj.make = e.target.value
    }
    
    return (
        <>
            {recAdd.map((v, i) => (
                <Card key={i} style={{
                    width: '18.5rem', border: '1px solid #ccd5d6',
                    position: 'relative', borderRadius: '5px',
                    height: '312px', textTransform: 'capitalize', lineHeight: '2rem'
                }}>
                    < button onClick={() => {
                        let storage = JSON.parse(localStorage.getItem("adds"))
                        storage.splice(i, 1)
                        setupdateStorage(storage)
                        localStorage.setItem('adds', JSON.stringify(storage))
                    }} style={{ position: 'absolute', right: '0', top: '0', border: 'none' }}>
                        <MdCancelPresentation style={{
                            color: 'white', fontSize: '20px'
                        }} />
                    </button >
                    <Link to="/update" >
                        <button onClick={() => {
                            let idFilter = recAdd.filter((z) => z == v)
                            setEditObject(idFilter[0])
                            // console.log(idFilter)
                        }} style={{ position: 'absolute', right: '0', top: '25px', border: 'none' }}>
                            <BiSolidEditAlt style={{
                                color: 'white', fontSize: '20px'
                            }} />
                        </button>
                    </Link>
                    <Card.Img variant="top" src={v.image_url} alt='picture' style={{ height: '160px', width: '100%', objectFit: 'cover' }} />
                    <Card.Body style={{ padding: '15px', fontSize: '17px' }}>
                        <Card.Title className='font-bold'>
                            {v.price}
                        </Card.Title>
                        <Card.Text>
                            {v.make}
                        </Card.Text>
                        <Card.Text>
                            {v.adress}
                        </Card.Text>
                    </Card.Body>
                </Card >))
            }
        </>
    )
}
export default AppAdd