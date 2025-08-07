import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PatientLogin from "./patient/pages/PatientLogin.jsx";
import PatientHome from "./patient/pages/PatientHome.jsx";
import Hospitalwebhome from "./hospitalweb/pages/Hospitalwebhome.jsx";
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hospitalwebhome/>}></Route>
      <Route path='/patient/*' element={<PatientHome/>}></Route>
      <Route path='/patient_login' element={<PatientLogin/>}></Route>
      {/* <Route path='/booking' element={<Login/>}></Route> */}
    </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default App
