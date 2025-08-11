import React from 'react';
import {Link} from "react-router-dom"

const Patient = () => {
  return (
    <>
         <div className='ml-2 bg-[#DDE6ED] p-2 rounded'>
          <p className='text-2xl font-bold text-[#27374D]'>All Patients</p>
          <p className='italic text-[#526D82] font-semibold'>Choose doctor and go ahead with booking.</p>
        </div>
        <div className='ml-2 mt-2 bg-[#DDE6ED] p-2  flex items-center gap-5'>
            <div>
                <p>Sort By : </p>
            </div>
            <div>
                <select className='boxShadow1 w-[10rem] p-1 rounded focus:outline-0'>
                    <option>Department</option>
                    <option>one</option>
                    <option>one</option>
                </select>
            </div>
            <div>
                <select className='boxShadow1 w-[10rem] p-1 rounded focus:outline-0'>
                    <option>Experience</option>
                    <option>one</option>
                    <option>one</option>
                </select>
            </div>
        </div>
        <div className='ml-2 bg-[#DDE6ED] p-2 flex flex-col items-center gap-5 overflow-auto h-[calc(80vh-3.8rem)]'>
            <div className='flex items-center p-2 rounded w-full boxShadow1 hover:bg-[#fff]'>
                <div>
                    <img src='/images/user.png' className='w-[5rem] h-[5rem]'/>
                </div>
                <div className='flex grow-1 justify-between'>
                    <div className=' pl-5'>
                        <p className='text-lg font-bold text-[#27374D]'>Mr. Raunak</p>
                        <p className='text-sm text-[#27374D]'>India </p>
                    </div>
                    <div className=''>
                         
                        <p className='text-md text-[#27374D]'><span className='font-bold'>Department : </span>ENT</p>
                        <p className='text-md text-[#27374D]'><span className='font-bold'>Disease : </span>Left ear audible problem</p>
                    </div>
                    <div className=''>
                        <Link to="/doctor/patient/allappointments" className='text-md text-[#DDE6ED] bg-[#27374D] p-2 rounded cursor-pointer'>View</Link>
                    </div>
                </div>
            </div>

            

            

            

        </div>
    </>
  )
}

export default Patient