import React from 'react';
import "../assets/css/login.css";

const Login = () => {
  return (
    <div className='h-[100vh] w-[100vw] grid place-items-center mywrapperbg '>
        <div className='grid grid-cols-1 md:grid-cols-2 border-8 border-[#91C8E4] rounded h-[80%] w-[95%] md:w-[80%] '>
            <div className='hidden p-3 md:flex flex-col justify-between '>
                <div>
                    <p className='text-2xl text-[#fff] bg-[#91C8E4] inline-block p-2 border-2 rounded-md'>Dr. Ayush Clinic</p>
                </div>
                <div>
                    <p className='text-xl text-[#4682A9] text-shadow-12xs tracking-wide italic text-center'>
                        "Take care of your body. It's the only place you have to live"
                    </p>
                </div>
            </div>
            <form className='bg-[#91C8E4]/70 md:bg-[#91C8E4] flex flex-col justify-around items-center'>

                <p className='text-5xl text-[#4682A9] font-bold text-shadow-2xs text-center'>
                    Welcome
                    <br/>
                    <span className='text-lg text-[#4682A9] font-bold text-shadow-2xs'>SignIn to Book Appointment</span>
                    </p>

                
                
                <div className=' md:w-[65%]'>
                    <div className='relative'>
                        <img src='./images/loginuser.svg' className='absolute top-[25%] left-[4%] h-[2rem]'/>
                        <input type='text' className='text-xl p-3 pl-12 outline-0 rounded-lg border-4 border-[#91C8E4] text-[#4682A9] bg-white w-[100%]' placeholder='Enter ID '/>
                    </div>
                    <div className='relative'>
                        <img src='./images/password.svg' className='absolute top-[25%] left-[4%] h-[2rem]'/>
                        <input type='text' className='text-xl p-3 pl-12 outline-0 rounded-lg border-4 border-[#91C8E4] text-[#4682A9] bg-white w-[100%]' placeholder='Enter password '/>
                    </div>
                    <div className='flex justify-between'>
                        <div class="flex items-center pl-2">
                            <input id="remember_me" type="checkbox" value="" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm" />
                            <label for="remember_me" class="w-full py-3 ms-2  font-medium text-[#4682A9] text-lg">Remember Me</label>
                        </div>
                        <div class="flex items-center pl-2">
                            <label for="" class="w-full py-3 ms-2  font-medium text-[#4682A9] text-lg cursor-pointer">Forgot Password?</label>
                        </div>
                    </div>
                </div>
                
                <div>
                    <button type="button" class="text-white bg-[#4682A9] hover:bg-[#749BC2] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 cursor-pointer">
                        <img src='./images/login.svg' />
                        SignIn
                        </button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Login