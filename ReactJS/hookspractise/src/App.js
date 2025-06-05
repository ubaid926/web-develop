
import { useEffect, useId, useRef, useState } from 'react';
import './App.css';
import Input from './components/input';
import Div from './components/div'
import { Row, Col, Flex } from 'antd'
import AppRouter from './router';

// const [count, setCounter] = useState(0);
// const [text, setText] = useState(Input);
// const minusRef = useRef()
// const plusRef = useRef()
// useEffect(() => {
//   plusRef.current.style.backgroundColor = "blue"
//   // alert("jjjjjjj")
// }, [count])
// useEffect(() => {
//   minusRef.current.style.backgroundColor = "red"
// }, [count])
// console.log()
{/* //   <div> {count}</div>
    //   <button ref={minusRef} onClick={() => { setCounter(count + 1) }}>+</button>
    //   <button ref={plusRef} onClick={() => { setCounter(count - 1) }}>-</button>
    //   {text}
    //   <button onClick={() => { setText(Div) }}>change div</button>
    //   <br /> */}
function App() {
  const inputRef = useRef([])
  const [inputText, setInputText] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [input2Value, setInput2Value] = useState("")
  const [disable, setDisable] = useState(true)
  const inputnest = useRef([])
  // const id=useId()
  const editbtnFunc = (e, v, i) => {
    // inputText.map((val) =>
    //   val == inputnest.current.id && console.log(val)
    let id = document.getElementById(v)
    id.disabled = false
    e.target.style.display = "none"
    let updateBtnid = document.getElementById(i)
    updateBtnid.style.display = "inline-block"
    // )
  }
  // useEffect(()=>{
  //   console.log("hello")
  // },[editbtnFunc()])
  const updatebtnFunc = (e, v,i) => {
    let id = document.getElementById(v)
    id.disabled = true
    e.target.style.display = "none"
    let editBtnId=document.getElementById(v+i)
    editBtnId.style.display="inline-block"
  }
  const handleinput=(e,v)=>{
    // inputText.map((val)=>{
    // })
    let inputIdValue
    let inputid=document.getElementById(v)
    inputIdValue=inputid.value
    setInput2Value(inputIdValue)
    inputid.value=input2Value
    // console.log(inputid,'inputid')
    // console.log(input2Value,"input2value")
  }
  return (
    // <AppRouter/>      
    <div className="App">
      <input ref={inputRef} />
      <button onClick={() => {
        setInputText([...inputText, inputRef.current.value])
        setInputValue(inputRef.current.value)
        console.log(inputValue)
        inputRef.current.value = ""
      }} >save</button>
      {inputText.length == 0 && <div>No todos yet</div>}
      <ul>{inputText &&
        inputText.map((v, i) =>
          <li key={i}>
            <input type="text" disabled id={v}  value={v} onChange={(e)=>handleinput(e,v)} />
            <button onClick={(e) => editbtnFunc(e, v, i)} id={v+i}>Edit</button>
            <button style={{ display: "none" }} id={i} onClick={(e) =>  updatebtnFunc(e, v,i) }>Update</button>
          </li>)}</ul>
      <button onClick={() => setInputText([])}>Clear all</button>
    </div >
  )
}
export default App
