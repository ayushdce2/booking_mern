import React, { useState } from 'react'
import {Link, Routes, Route, useLocation} from "react-router-dom"
import Dashboard from '../components/Dashboard.jsx';
import ChooseDoc from '../components/ChooseDoc.jsx';
import Booking from '../components/Booking.jsx';
import BookingSummary from '../components/BookingSummary.jsx';
import Payment from '../components/Payment.jsx';


const Homepage = () => {
  const [sidebar,setSidebar]=useState(false)
  // console.log(window.location.pathname)
  const { pathname } = useLocation();
  return (
    <div className='h-[100vh] overflow-hidden bg-[#9DB2BF] grid grid-cols-1 md:grid-cols-[1fr_5fr]'>
      <div className='h-full p-2 pr-0 overflow-auto'>
        
        <div className={`${sidebar ? "flex absolute top-0 right-0 w-[50vw] bg-[#DDE6ED] pl-2" : "hidden"} md:flex gap-3 items-center  border-b-1 border-[#526D82] mb-3 pb-2 h-[3rem] `}>
         <span className='text-2xl text-shadow-sm text-[#27374D] font-semibold'>Hi, Name</span>
        </div>
        <div className={`h-[calc(100vh-5rem)] ${sidebar ? "flex absolute top-12 right-0 w-[50vw]" : "hidden"} md:flex flex-col justify-between  text-[#27374D] bg-[#DDE6ED] p-2 rounded`}>
          <ul>
            <li className=' '>
              <Link className={`flex gap-2 p-2 mb-2 rounded ${pathname == "/patient" ? "bg-[#27374D] text-[#DDE6ED] " : "bg-[#9DB2BF]" } `} to="/patient">
                <img src='/images/dashboard.svg'/> <span className='text-md font-semibold'>Dashboard</span>
              </Link>
              <Link className={`flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]' ${pathname === "/patient/choosedoc" || pathname === "/patient/choosedoc/booking" || pathname === "/patient/choosedoc/booking/registration" || pathname === "/patient/choosedoc/booking/bookingsummary" || pathname === "/patient/choosedoc/booking/payment" ? "bg-[#27374D] text-[#DDE6ED] " : "bg-[#9DB2BF]" } `} to="/patient/choosedoc" >
                <img src='/images/dashboard.svg'/> <span className='text-md font-semibold'>Appointment Booking</span>
              </Link>
              <Link className='flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]'>
                <img src='/images/dashboard.svg'/> <span className='text-md font-semibold'>View Reports</span>
              </Link>
              <Link className='flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]'>
                <img src='/images/dashboard.svg'/> <span className='text-md font-semibold'>View Medicine</span>
              </Link>
              <Link className='flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]'>
                <img src='/images/dashboard.svg'/> <span className='text-md font-semibold'>Talk Doctor</span>
              </Link>
              
            </li>
          </ul>
          
          <ul>
            <li className=' '>
              <Link className='flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]'>
                <img src='/images/dashboard.svg'/> <span className='text-md font-semibold'>Profile</span>
              </Link>
              <Link className='flex gap-2 p-2 rounded  bg-[#9DB2BF]'>
                <img src='/images/dashboard.svg'/> <span className='text-md font-semibold'>Settings</span>
              </Link>
              
              
            </li>
          </ul>
        </div>

      </div>
      <div className='h-full p-2 pl-0 overflow-auto'>

        <div className='flex gap-3 items-center justify-end border-b-1 border-[#526D82] mb-3 pb-2 h-[3rem]'>
          <div className='mr-auto' onClick={()=>{setSidebar(prev => !prev)}}>
            <p className='md:hidden'>T</p>
          </div>
          
          
          <div>
            <img src='/images/settings.svg'/>
          </div>
          <div>
            <img src='/images/notification.svg'/>
          </div>
          <div>
            <img src='/images/user.svg'/>
          </div>
          
        </div>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/choosedoc/*" element={<ChooseDoc />} />
            <Route path="/choosedoc/booking" element={<Booking />} />
            <Route path="/choosedoc/booking/payment" element={<Payment />} />
            <Route path="/choosedoc/booking/bookingsummary" element={<BookingSummary />} />
            
          </Routes>

      </div>



    </div>

  )
}

export default Homepage