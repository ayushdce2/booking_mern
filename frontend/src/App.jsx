import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PatientLogin from "./patient/pages/PatientLogin.jsx";
import PatientHome from "./patient/pages/PatientHome.jsx";
import AdminLogin from "./admin/pages/AdminLogin.jsx";
// import AdminHome from "./admin/pages/AdminHome.jsx";
import DoctorLogin from "./doctor/pages/DoctorLogin.jsx";
// import DoctorHome from "./doctor/pages/DoctorHome.jsx";
import Hospitalwebhome from "./hospitalweb/pages/Hospitalwebhome.jsx";
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hospitalwebhome/>}></Route>
      
      <Route path='/patient/*' element={<PatientLogin/>}></Route>
      <Route path='/patient/patienthome/*' element={<PatientHome/>}></Route>

      <Route path='/doctor/*' element={<DoctorLogin/>}></Route>

      <Route path='/admin/*' element={<AdminLogin/>}></Route>

    </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default App
