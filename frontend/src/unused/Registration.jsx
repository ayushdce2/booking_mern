import React from 'react'
import {Link} from "react-router-dom"

const Registration = () => {
  return (
    <>
            <div className='ml-2 bg-[#DDE6ED] p-2 rounded'>
                <p className='text-2xl font-bold text-[#27374D]'>Registration</p>
                <p className='italic text-[#526D82] font-semibold'>Enter phone number and thereafter with otp.</p>
            </div>

             <div className='ml-2 mt-2 bg-[#DDE6ED] p-2 rounded'>
                <p className='text-2xl font-bold text-[#27374D]'>Step 1 : </p>
                <div className='ml-5 my-5'>
                    {/* <p className='text-lg'>Enter Phone Number : </p> */}
                    <input type="text" placeholder='Enter Phone Number' className='w-96 outline-0 border-1 p-2 rounded'/>

                </div>
                <p className='text-2xl font-bold text-[#27374D]'>Step 2 : </p>
                <div className='ml-5 my-5'>
                    <input type="text" placeholder='Submit OTP' className='w-96 outline-0 border-1 p-2 rounded'/>
                </div>
                <Link to="/patient/choosedoc/booking/payment" className='bg-[#27374D] p-2 rounded text-[#DDE6ED]'>Submit</Link>
             </div>
    </>
  )
}

export default Registration