import React from 'react';
import {Link} from "react-router-dom"

const Prescription = () => {
  return (
    <>
        <div className='ml-2 bg-[#DDE6ED] p-2 rounded flex justify-between items-center'>
            <div>
          <p className='text-2xl font-bold text-[#27374D]'>Mr. Raunak</p>
          <p className='italic text-[#526D82] font-semibold'>Country : India</p>
            </div>
            <div>
                <p className='text-lg font-bold text-[#27374D]'>Date : 12July 2025</p>
                <p className='text-lg font-bold text-[#27374D]'>Time : 10:00 AM</p>
            </div>
        </div>
        
        <div className='ml-2 mt-3 bg-[#DDE6ED] p-2 rounded'>
          <div className='bg-[#9DB2BF] rounded py-1 px-3 '>
            <p className='text-2xl font-bold text-[#27374D] '>Patient Details</p>
            
          </div>
          
   
            
            <div>
            <div className='flex gap-3 mt-3 p-3 pt-0 pb-0'>
              <div className='font-semibold'>
                <p>OPD Type : </p>
              </div>
              <div>
                <p> Premium</p>
              </div>
            </div>
            <div className='flex p-3 pb-0 gap-3'>
              <div className='font-semibold'>
                <p>Department : </p>
              </div>
              <div>
                <p> ENT</p>
              </div>
            </div>
            <div className='flex p-3 pb-0 gap-3'>
              <div className='font-semibold'>
                <p>Disease : </p>
              </div>
              <div>
                <p> Left ear audible problem</p>
              </div>
            </div>
            <div className='flex p-3 pb-0 gap-3'>
              <div className='font-semibold'>
                <p>Consultancy Type : </p>
              </div>
              <div>
                <p> Video Call</p>
              </div>
            </div>
            <div className='flex p-3 pb-0 gap-3'>
              <div className='font-semibold'>
                <p>Doctor Timing : </p>
              </div>
              <div>
                <p> -</p>
              </div>
            </div>
            <div className='flex p-3 pb-0 gap-3'>
              <div className='font-semibold'>
                <p>Doctor Time Slot  : </p>
              </div>
              <div>
                <p> -</p>
              </div>
            </div>
            
            
            
          
          </div>
        </div>

        <div className='ml-2 mt-3 bg-[#DDE6ED] p-2 rounded'>
          <div className='bg-[#9DB2BF] rounded py-1 px-3 '>
            <p className='text-2xl font-bold text-[#27374D] '>Prescription</p>
            
          </div>
          
   
            
            <div>
            <div className='flex gap-3 mt-3 p-3 pt-0 pb-0'>
              <textarea className='border-1 border-[#9DB2BF] w-full h-[10.9rem] focus:outline-0'> </textarea>
            </div>
            <button className='bg-[#27374D] text-[#DDE6ED] p-2 rounded mt-3 ml-3'>Submit</button>
            
            
            
          
          </div>
        </div>
    </>
  )
}

export default Prescription