import React from 'react';
import "../assets/css/login.css";
import {  Routes,Route } from 'react-router-dom'
import Signin from './Signin.jsx';
import Signup from './Signup.jsx';
import Forget from './Forget.jsx';

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
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forget" element={<Forget />} />
            </Routes>
        </div>
    </div>
  )
}

export default Login