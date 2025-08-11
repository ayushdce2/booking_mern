import React from 'react'

const Profile = () => {
  return (
    <>
        <div className='ml-2 bg-[#DDE6ED] p-2 rounded'>
          <p className='text-2xl font-bold text-[#27374D]'>Profile</p>
          <p className='italic text-[#526D82] font-semibold'>Subheading goes here</p>
        </div>
        <div className='ml-2 mt-3 bg-[#DDE6ED] p-2 rounded'>
          <div className='bg-[#9DB2BF] rounded py-1 px-3 flex justify-between'>
            <p className='text-2xl font-bold text-[#27374D] '>Personal Details</p>
            <img src='/images/edit.svg' />
          </div>
          
          <div className='flex gap-3 mt-3'>
            <div className=''>
              <img src='/images/user.png#' className=' w-[10rem]'/>
            </div>
            <div>
            <div className='flex gap-3 p-3 pt-0 pb-0'>
              <div className='font-semibold'>
                <p>Name : </p>
              </div>
              <div>
                <p> John Doe</p>
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
                <p>Qualification : </p>
              </div>
              <div>
                <p> MBBS</p>
              </div>
            </div>
            <div className='flex p-3 pb-0 gap-3'>
              <div className='font-semibold'>
                <p>Areas of Expertise  : </p>
              </div>
              <div>
                <p> High risk pregnancies with all minor and major Obst. & Gynae Surgeries..</p>
              </div>
            </div>
            <div className='flex p-3 pb-0 gap-3'>
              <div className='font-semibold'>
                <p>Speciality : </p>
              </div>
              <div>
                <p> High risk pregnancies with all minor and major Obst. & Gynae Surgeries.</p>
              </div>
            </div>
            <div className='flex p-3 pb-0 gap-3'>
              <div className='font-semibold'>
                <p>Designation   : </p>
              </div>
              <div>
                <p> Head Of Department (Obst & Gynae)</p>
              </div>
            </div>
            
            
          </div>
          </div>
        </div>
        <div className='ml-2 mt-3 bg-[#DDE6ED] p-2 rounded'>
          <div className='bg-[#9DB2BF] rounded py-1 px-3 flex justify-between'>
            <p className='text-2xl font-bold text-[#27374D] '>Other Details</p>
            <img src='/images/edit.svg' />
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
    </>
  )
}

export default Profile