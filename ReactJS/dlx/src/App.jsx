import { useState, useContext } from 'react'
import './App.css'
import AppForm from './pages/form'
import AppLayout from './components/navbar'
import AppDropdown from './components/dropdown'
import AppSearch from './components/search'
import { FormValues, EditValues } from './config/context'
import { Outlet } from 'react-router-dom'

// import AppRouter from './config/router'

function App() {
  const [contextInit, setcontextInit] = useState({})
  const [editObject, setEditObject] = useState({})
  // { console.log(editObject) }
  return (
    <>
      {/* <RouterProvider/> */}
      {/* <AppRouter > */}
      {/* <EditValues.Provider value={{ editObject, setEditObject }}> */}
        <FormValues.Provider value={{ contextInit, setcontextInit }}>

          <div className=''>
            <AppLayout />
            <div className="flex justify-end align-center" style={{ width: "100%", padding: "10px", height: "80px", backgroundColor: "#002f34", color: "white" }}>
              <h4 className="font-bold">Free Classifieds in Pakistan</h4>
              <p> . © 2006-2025 OLX</p>
            </div>
          </div>
          {/* </AppRouter> */}
          {/* <Link to="/form">
        route
        </Link > */}
        </FormValues.Provider>
      {/* </EditValues.Provider> */}
    </>
  )
}

export default App
