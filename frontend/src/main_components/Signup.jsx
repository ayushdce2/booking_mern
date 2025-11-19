import React from 'react'
import { Link } from 'react-router-dom';
import useSignUp from "./hook/useSignUp.jsx";

const Signup = () => {

    const {signupFormData,signupSubmit} = useSignUp();


  return (
    
    <>
        <form className='bg-[#91C8E4]/70 md:bg-[#91C8E4] flex flex-col justify-around items-center'onSubmit={signupSubmit}>

                <p className='text-5xl text-[#4682A9] font-bold text-shadow-2xs text-center'>
                    Welcome
                    <br/>
                    <span className='text-lg text-[#4682A9] font-bold text-shadow-2xs'>SignUp Now !</span>
                    </p>

                
                
                <div className=' md:w-[65%]'>
                    <div className='relative'>
                        <img src='/images/loginuser.svg' className='absolute top-[25%] left-[4%] h-[2rem]'/>
                        <input type='text' className='text-xl p-3 pl-12 outline-0 rounded-lg border-4 border-[#91C8E4] text-[#4682A9] bg-white w-[100%]' placeholder='name . . .  'name="name" onChange={signupFormData}/>
                    </div>
                    <div className='relative'>
                        <img src='/images/loginuser.svg' className='absolute top-[25%] left-[4%] h-[2rem]'/>
                        <input type='text' className='text-xl p-3 pl-12 outline-0 rounded-lg border-4 border-[#91C8E4] text-[#4682A9] bg-white w-[100%]' placeholder='email . . .  'name="email" onChange={signupFormData}/>
                    </div>
                    <div className='relative'>
                        <img src='/images/password.svg' className='absolute top-[25%] left-[4%] h-[2rem]'/>
                        <input type='text' className='text-xl p-3 pl-12 outline-0 rounded-lg border-4 border-[#91C8E4] text-[#4682A9] bg-white w-[100%]' placeholder='password . . . 'name="password" onChange={signupFormData}/>
                    </div>
                    
                </div>
                
                <div className=''>
                    <button type="submit" class="text-white bg-[#4682A9] hover:bg-[#749BC2] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 cursor-pointer">
                        <img src='/images/login.svg' />
                        SignUp
                        </button>
                        
                </div>
                <div>
                    <Link to="/appointment" className='text-sm text-[#4682A9] font-bold text-shadow-2xs'>Already have account ? SignIn Now !</Link> 
                </div>

            </form>
    </>
  )
}

export default Signup