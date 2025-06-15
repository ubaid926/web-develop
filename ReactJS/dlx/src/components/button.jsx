import Button from 'react-bootstrap/Button';
import { FormValues, EditValues } from '../config/context';
import context from 'react-bootstrap/esm/AccordionContext';
import { useContext, useId, useState } from 'react';
import { Link } from "react-router-dom";
function AppButton({ getValue, update, title }) {
    const { contextInit, setcontextInit } = useContext(FormValues)
    const { editObject, setEditObject } = useContext(EditValues)
    let btncolor = '#002f34'
    // {console.log(get)} 
    // const get=()=>{console.log(getValue.value)}
    const [rec, setRec] = useState()
 console.log(editObject)
    // console.log(contextInit)
    return (
        <>
            <Link to="/">
                <Button
                    onClick={
                        update ? () => console.log(editObject) :
                            () => {

                                if (Object.keys(contextInit).length == 0) return
                                if (localStorage.getItem("adds")) {
                                    const recArr = JSON.parse(localStorage.getItem("adds"));
                                    recArr.push(contextInit)
                                    let recArrString = JSON.stringify(recArr)
                                    localStorage.setItem("adds", recArrString)
                                }
                                else {
                                    const addArr = []
                                    addArr.push(contextInit)
                                    let addArrString = JSON.stringify(addArr)
                                    localStorage.setItem("adds", addArrString)
                                }

                            }
                    }
                    style={{
                        backgroundColor: btncolor,
                        color: 'white',
                        height: '45px',
                        padding: '5px',
                        width: '85px',
                        borderRadius: '3px'
                    }} className=' font-bold bg-yellow-200' > {title ? title : "Post now"}</Button >
            </Link>
        </>
    )
}
export default AppButton