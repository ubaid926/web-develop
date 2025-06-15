import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AppForm from './pages/form.jsx'
import UpdateForm from './pages/update.jsx'
import AddDisplay from './pages/addDisplay.jsx'
import { EditValuesProvider } from './config/context.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>


      <Route path='/' element={<App />} >
      </Route>
      <Route path='form' element={<AppForm />} />
      <Route path='update' element={<UpdateForm />} />
      <Route path='addDisplay' element={< AddDisplay />} />


    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EditValuesProvider>
      <RouterProvider router={router} />
    </EditValuesProvider>
    {/* <App /> */}
  </StrictMode>,
)
