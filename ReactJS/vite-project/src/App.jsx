import { useState, useContext } from 'react'
import './App.css'
import AppButton from './components/button'
import { displayContext } from './components/context'

function App() {

  // const displayer = useContext(displayContext)
  const [display, setDisplay] = useState([])
  //  const getData=(a)=>{
  //      console.log(a)
  //  }

  return (
    <>
      <displayContext.Provider value={{display,setDisplay}}>
        <div className='text-white flex flex-col justify-evenly rounded-4xl bg-black mx-auto mt-20  p-1.5 maindiv'>
          <div className='text-clip px-1.5 valuediv'>
           {display}
          </div>
          <div className=' btnsdiv flex flex-wrap gap-x-3 gap-y-0 p-1 items-end justify-evenly '>
            <AppButton color={"whitecustom"} value={"AC"} />
            <AppButton color={"whitecustom"} value={"+/-"} />
            <AppButton color={"whitecustom"} value={"%"} />
            <AppButton color={"yellowcustom"} value={"/"} />
            <AppButton value={7} />
            <AppButton value={8} />
            <AppButton value={9} />
            <AppButton color={"yellowcustom"} value={"*"} />
            <AppButton value={4} />
            <AppButton value={5} />
            <AppButton value={6} />
            <AppButton color={"yellowcustom"} value={"-"} />
            <AppButton value={1} />
            <AppButton value={2} />
            <AppButton value={3} />
            <AppButton color={"yellowcustom"} value={"+"} />
            <AppButton radius={'rounded-md'} width={'zero-btn'} value={0} />
            <AppButton value={"."} />
            <AppButton color={"yellowcustom"} value={"="} />
          </div>
        </div>
      </displayContext.Provider>
    </>
  )
}

export default App
