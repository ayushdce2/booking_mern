import React from 'react';
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <>
        <form className='bg-[#91C8E4]/70 md:bg-[#91C8E4] flex flex-col justify-around items-center'>

                <p className='text-5xl text-[#4682A9] font-bold text-shadow-2xs text-center'>
                    Welcome
                    <br/>
                    <span className='text-lg text-[#4682A9] font-bold text-shadow-2xs'>SignIn to Book Appointment</span>
                    </p>

                
                
                <div className=' md:w-[65%]'>
                    <div className='relative'>
                        <img src='/images/loginuser.svg' className='absolute top-[25%] left-[4%] h-[2rem]'/>
                        <input type='text' className='text-xl p-3 pl-12 outline-0 rounded-lg border-4 border-[#91C8E4] text-[#4682A9] bg-white w-[100%]' placeholder='Enter ID '/>
                    </div>
                    <div className='relative'>
                        <img src='/images/password.svg' className='absolute top-[25%] left-[4%] h-[2rem]'/>
                        <input type='text' className='text-xl p-3 pl-12 outline-0 rounded-lg border-4 border-[#91C8E4] text-[#4682A9] bg-white w-[100%]' placeholder='Enter password '/>
                    </div>
                    <div className='flex justify-between'>
                        <div className="flex items-center pl-2">
                            <input id="remember_me" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm" />
                            <label for="remember_me" className="w-full py-3 ms-2  font-medium text-[#4682A9] text-lg">Remember Me</label>
                        </div>
                        <div className="flex items-center pl-2">
                            <Link to="/patient/forget" className="w-full py-3 ms-2  font-medium text-[#4682A9] text-lg cursor-pointer">Forgot Password?</Link>
                        </div>
                    </div>
                </div>
                
                <div className=''>
                    <button type="button" className="text-white bg-[#4682A9] hover:bg-[#749BC2] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 cursor-pointer">
                        <img src='/images/login.svg' />
                        SignIn
                        </button>
                        
                </div>
                <div>
                    <Link to="/patient/signup" className='text-sm text-[#4682A9] font-bold text-shadow-2xs'>Don't have account ? SignUp Now !</Link> 
                </div>

            </form>
    </>
  )
}

export default Signin