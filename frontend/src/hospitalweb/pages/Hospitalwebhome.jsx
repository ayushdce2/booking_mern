import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png";
import Background from "../assets/background.jpg";
import Doctor from "../assets/doctor.png";
import Ambulance from "../assets/ambulance.svg";
import healthicons from "../assets/healthicons.svg";
import happy from "../assets/happy.jpg";
import patient from "../assets/patient.jpg";
// import Doctoricon from "../assets/doctor.png";
import Medical from "../assets/medical.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "../assets/hospitalwebhome.css";

const hospitalwebhome = () => {
  return (
    <div className=''>

    
    <div className='flex justify-between items-center p-2 '>
      <div className='pl-10'>
        <img src={Logo} className='w-[10rem]'/>
      </div>
      <div>
        <ul className='flex gap-5 items-center'>
          <li>
            <Link to={""} className='bg-[#143D60] p-2 rounded text-[#fff] font-semibold text-lg inline-block w-[7rem] text-center hover:bg-[#A0C878]'>Home</Link>
          </li>
          <li>
            <Link to={""} className='bg-[#143D60] p-2 rounded text-[#fff] font-semibold text-lg inline-block w-[7rem] text-center hover:bg-[#A0C878]'>About</Link>
          </li>
          <li>
            <Link to={""} className='bg-[#143D60] p-2 rounded text-[#fff] font-semibold text-lg inline-block w-[7rem] text-center hover:bg-[#A0C878]'>Treatments</Link>
          </li>
          <li>
            <Link to={""} className='bg-[#143D60] p-2 rounded text-[#fff] font-semibold text-lg inline-block w-[7rem] text-center hover:bg-[#A0C878]'>Services</Link>
          </li>
          <li>
            <Link to={""} className='bg-[#143D60] p-2 rounded text-[#fff] font-semibold text-lg inline-block w-[7rem] text-center hover:bg-[#A0C878]'>Contact</Link>
          </li>
          <li>
            <Link to={""} className='bg-[#EB5B00] p-3 rounded text-[#143D60] font-semibold text-lg inline-block w-[7rem] text-center'>Enquiry</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className=' h-[70vh]'>
      <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={true} modules={[Pagination]}
      loop={true}
      

    >
      <SwiperSlide>
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat flex"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className='flex flex-col justify-center p-7 px-15'>
            <h2 className='text-5xl font-bold text-[#143D60] text-shadow-2xs'>We Do The Best Practices</h2>
            <p className='text-lg font-semibold text-[#143D60] mt-5 text-shadow-2xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere? Voluptas ut itaque nulla sequi molestias quaerat delectus nesciunt impedit assumenda ad? A, atque? Inventore rerum deserunt ab rem assumenda.</p>
            <div className='flex gap-3 mt-5'>
              <button className='bg-[#143D60] text-[#fff] p-3 rounded cursor-pointer hover:bg-[#A0C878]'>Book Appointment</button>
              <button className='bg-[#143D60] text-[#fff] p-3 rounded hover:bg-[#A0C878]'>Emergency</button>

            </div>
            
          </div>
          <div className='flex items-center justify-center w-full' >
            <img src={Doctor}/>
          </div>
        </div>  
      </SwiperSlide>
      
    </Swiper>

    </div>

    <div className='px-10 flex gap-5 justify-around mt-5 bg-[#143D60] text-[#fff] p-10'>
      <div className='flex flex-col gap-3 items-center'>
        <img src={Medical} className='w-[7rem]'/>
        <p className='font-bold text-2xl'>Advanced Technology</p>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo</p>
      </div>
      <div className='flex flex-col gap-3 items-center border-l-1 border-r-1 border-[#DDEB9D]'>
        <img src={healthicons}  className='w-[7rem]'/>
        <p className='font-bold text-2xl'>Healthcare Solutions</p>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo</p>
      </div>
      <div className='flex flex-col gap-3 items-center'>
        <img src={Ambulance}  className='w-[7rem]'/>
        <p className='font-bold text-2xl'>24/7 Availability</p>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo</p>
      </div>
    </div>

<div className=' flex my-5 w-[80vw] mx-auto'>

  <div className='grow-1 relative rounded-b-2xl rounded-tl-2xl' style={{backgroundImage : `URL(${happy})`,backgroundSize:"cover"}}>
      
      {/* <img src={patient} className='absolute w-[30%] rounded-4xl bottom-2 right-2'/> */}
      <div className='absolute  bg-[#fff] p-5 border-l-1 border-t-1 border-[#fff] bottom-0 right-0 rounded-tl-2xl'>
        <p className='text-2xl font-bold text-[#143D60]'>5 Years</p>
        <p className='text-lg text-[#A0C878] font-semibold'>of Service</p>

      </div>
      <div className='absolute top-8 bottom-8 left-8 right-8 bg-[#DDEB9D]/50  rounded-br-full  p-3 flex flex-col'>
        <p className='text-4xl font-semibold text-[#143D60] text-shadow-2xs'>Consult with Trusted Doctors </p>
        <p className='text-lg font-semibold text-[#143D60]'>Whether it’s a general check-up or a specialist consultation, we make it easy for you to connect with experienced healthcare professionals.</p>
        <p className='text-md font-semibold text-[#143D60] mt-auto'>Secure & Confidential | 24/7 Availability | Online & In-Clinic Appointments</p>
      </div>
  </div>
  <div className='border-1 border-[#DDEB9D] w-[25rem]'>
    <div className='bg-[#143D60] text-[#DDEB9D] p-2 text-lg text-center font-semibold '>
      <p className=''>Book An Appointment</p>
    </div>
    <div className='flex flex-col gap-5 p-2'>
      <select>
        <option value="option1">Select Department</option>
        <option value="option2">Option 2</option>
      </select>
      <input type="text" placeholder='First Name' className='text-lg p-2 '/>
      <input type="text" placeholder='Phone Number ' className='text-lg p-2'/>
      <input type="text" placeholder='Email' className='text-lg p-2'/>
      <textarea placeholder='Message' className='text-lg p-2'></textarea>
      <button className='bg-[#143D60] text-[#DDEB9D] p-3 font-bold'>Submit</button>
    </div>
  </div>

</div>


    </div>
  )
}

export default hospitalwebhome