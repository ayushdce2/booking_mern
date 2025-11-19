import { useState } from 'react'
import {ToastContainer} from "react-toastify";
import './App.css'
import Appointment from "./main_components/Appointment.jsx";
import PatientHome from "./patient/pages/PatientHome.jsx";
// import AdminLogin from "./admin/pages/AdminLogin.jsx";
// import AdminHome from "./admin/pages/AdminHome.jsx";
// import DoctorLogin from "./doctor/pages/DoctorLogin.jsx";
// import DoctorHome from "./doctor/pages/DoctorHome.jsx";
import Hospitalwebhome from "./hospitalweb/pages/Hospitalwebhome.jsx";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import RefreshHandler from './main_components/RefreshHandler.jsx';

function App() {

const [isAuthenticated,setisAuthenticated]=useState(false);
    const PrivateRoute=({element})=>{
      return isAuthenticated ? element : <Navigate to="/appointment" />
    }

  return (
    <>
  <BrowserRouter>
  <RefreshHandler setisAuthenticated={setisAuthenticated}/>
    <Routes>
      <Route path='/' element={<Hospitalwebhome/>}></Route>
      
      <Route path='/appointment/*' element={<Appointment/>}></Route>
      
      <Route path={"/patient/patienthome/*"} element={<PrivateRoute element={<PatientHome/>}/>}></Route>

      {/* <Route path='/doctor/*' element={<DoctorLogin/>}></Route> */}

      {/* <Route path='/admin/*' element={<AdminLogin/>}></Route> */}

    </Routes>
  </BrowserRouter>
      <ToastContainer/>
    </>
  )
}

export default App
