import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png";
import Background from "../assets/background.jpg";
import Doctor from "../assets/doctor.png";
import Ambulance from "../assets/ambulance.svg";
import Ambulance_1 from "../assets/ambulance_1.svg";
import healthicons from "../assets/healthicons.svg";
import happy from "../assets/happy.jpg";
import patient from "../assets/patient.jpg";
import Appointment from "../assets/appointment.svg";
import preventive from "../assets/preventive.svg";
import insurance from "../assets/insurance.svg";
import mask from "../assets/mask.svg";
import laboratory from "../assets/laboratory.svg";
import Emergency from "../assets/emergency.svg";
import xray from "../assets/xray.svg";
import pharmacy from "../assets/pharmacy.svg";
import physiotherapy from "../assets/physiotherapy.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
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
      <div>
        <div className=''>
          <p className='p-2 bg-[#A0C878] flex gap-4 justify-end text-[0.8rem] md:text-[1rem]'>
            <Link to="/patient" className='font-bold text-[#143D60]'>Patient's Login</Link>
             | 
            <Link to="/doctor" className='font-bold text-[#143D60]'>Doctor's Login</Link>
            | 
            <Link to="/admin" className='font-bold text-[#143D60]'>Admin's Login</Link>
          </p>
        </div>
      </div>


      <div className='flex justify-between items-center p-2 '>
        <div className='md:pl-10'>
          <img src={Logo} className='w-[10rem]' />
        </div>
        <div className='md:hidden'>
          TOGGLE
        </div>
        <div className='hidden md:block'>
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
              <div className='flex flex-col justify-center p-3 md:p-7 md:px-15'>
                <h2 className='text-5xl font-bold text-[#143D60] text-shadow-2xs'>We Do The Best Practices</h2>
                <p className='text-lg font-semibold text-[#143D60] mt-5 text-shadow-2xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere? Voluptas ut itaque nulla sequi molestias quaerat delectus nesciunt impedit assumenda ad? A, atque? Inventore rerum deserunt ab rem assumenda.</p>
                <div className='flex gap-3 mt-5'>
                  <button className='bg-[#143D60] text-[#fff] font-semibold p-3 rounded cursor-pointer hover:bg-[#A0C878] flex gap-2'><img src={Appointment} className='w-[1.5rem]' />Book Appointment</button>
                  <button className='bg-[#143D60] text-[#fff] font-semibold p-3 rounded hover:bg-[#A0C878] flex gap-2'><img src={Emergency} className='w-[1.5rem]' />Emergency</button>

                </div>

              </div>
              <div className='hidden md:flex items-center justify-center w-full' >
                <img src={Doctor} className=''/>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>

      <div className='p-2 md:px-10 md:p-10 md:flex gap-5 justify-around  bg-[#143D60] text-[#fff] '>
        <div className='flex flex-col gap-3 items-center'>
          <img src={Medical} className='w-[7rem]' />
          <p className='font-bold text-2xl'>Advanced Technology</p>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo</p>
        </div>
        <div className='flex flex-col gap-3 items-center md:border-l-1 md:border-r-1 border-[#DDEB9D] md:p-3'>
          <img src={healthicons} className='w-[7rem]' />
          <p className='font-bold text-2xl'>Healthcare Solutions</p>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo</p>
        </div>
        <div className='flex flex-col gap-3 items-center'>
          <img src={Ambulance} className='w-[7rem]' />
          <p className='font-bold text-2xl'>24/7 Availability</p>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo</p>
        </div>
      </div>

      <div className=' flex my-5 w-[90%] mx-auto gap-3 '>

        <div className='grow-1 relative rounded-b-2xl rounded-tl-2xl hidden md:block' style={{ backgroundImage: `URL(${happy})`, backgroundSize: "cover" }}>

          {/* <img src={patient} className='absolute w-[30%] rounded-4xl bottom-2 right-2'/> */}
          <div className='absolute  bg-[#fff] p-5 border-l-1 border-t-1 border-[#fff] bottom-0 right-0 rounded-tl-2xl'>
            <p className='text-2xl font-bold text-[#143D60]'>5 Years</p>
            <p className='text-lg text-[#A0C878] font-semibold'>of Service</p>

          </div>
          <div className='absolute top-8 bottom-8 left-8 right-8 bg-[#fff]/50  rounded-br-full  p-3 flex flex-col'>
            <p className='text-4xl font-semibold text-[#143D60] text-shadow-2xs'>Consult with Trusted Doctors </p>
            <p className='text-lg font-semibold text-[#143D60]'>Whether it’s a general check-up or a specialist consultation, we make it easy for you to connect with experienced healthcare professionals.</p>
            <p className='text-md font-semibold text-[#143D60] mt-auto'>Secure & Confidential | 24/7 Availability | Online & In-Clinic Appointments</p>
          </div>
        </div>
        <div className='border-1 border-[#DDEB9D] w-[25rem]'>
          <div className='bg-[#143D60] text-[#fff] p-3 text-lg text-center font-semibold '>
            <p className=''>Book An Appointment</p>
          </div>
          <div className='flex flex-col gap-5 p-2'>
            <select>
              <option value="option1">Select Department</option>
              <option value="option2">Option 2</option>
            </select>
            <input type="text" placeholder='First Name' className='text-lg p-2 border-b-1 border-[#ddd] focus:outline-0' />
            <input type="text" placeholder='Phone Number ' className='text-lg p-2 border-b-1 border-[#ddd] focus:outline-0' />
            <input type="text" placeholder='Email' className='text-lg p-2 border-b-1 border-[#ddd] focus:outline-0' />
            <textarea placeholder='Message' className='text-lg p-2 focus:outline-0'></textarea>
            <button className='bg-[#143D60] text-[#fff] p-2 font-semibold'>Submit</button>
          </div>
        </div>

      </div>



      <div className='my-20 bg-[#143D60] py-15'>
        <div className='text-4xl font-bold text-[#DDEB9D] p-3 text-center'>
          <p>Our Services</p>
          <hr className='w-[40%] mx-auto bg-[#DDEB9D] p-[0.05rem] mt-2' />
          <p className='text-lg md:w-[50%] mx-auto my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo</p>

        </div>
        <div className='grid md:grid-cols-5 gap-3 py-5 px-3'>
          <div className='boxShadow1  text-center rounded rotating-border rotating-border--google '>
            <img src={laboratory} className='w-[7rem] h-[7rem] mx-auto bg-[#DDEB9D] p-2 rounded' />
            <p className='text-3xl font-semibold text-shadow-2xs text-[#fff] my-7'>Laboratory</p>
            <p className='mt-4 text-sm font-semibold text-shadow-2xs text-[#fff]'>Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet </p>
          </div>
          <div className='boxShadow1  text-center rounded rotating-border rotating-border--google '>
            <img src={xray} className='w-[7rem] h-[7rem] mx-auto bg-[#DDEB9D] p-2 rounded' />
            <p className='text-3xl font-semibold text-shadow-2xs text-[#fff] my-7'>X-Ray</p>
            <p className='mt-4 text-sm font-semibold text-shadow-2xs text-[#fff]'>Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet </p>
          </div>
          <div className='boxShadow1  text-center rounded rotating-border rotating-border--google '>
            <img src={Ambulance_1} className='w-[7rem] h-[7rem] mx-auto bg-[#DDEB9D] p-2 rounded' />
            <p className='text-3xl font-semibold text-shadow-2xs text-[#fff] my-7'>Ambulance</p>
            <p className='mt-4 text-sm font-semibold text-shadow-2xs text-[#fff]'>Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet </p>
          </div>
          <div className='boxShadow1  text-center rounded rotating-border rotating-border--google '>
            <img src={pharmacy} className='w-[7rem] h-[7rem] mx-auto bg-[#DDEB9D] p-2 rounded' />
            <p className='text-3xl font-semibold text-shadow-2xs text-[#fff] my-7'>Pharmacy</p>
            <p className='mt-4 text-sm font-semibold text-shadow-2xs text-[#fff]'>Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet </p>
          </div>
          <div className='boxShadow1  text-center rounded rotating-border rotating-border--google '>
            <img src={physiotherapy} className='w-[7rem] h-[7rem] mx-auto bg-[#DDEB9D] p-2 rounded' />
            <p className='text-3xl font-semibold text-shadow-2xs text-[#fff] my-7'>Physiotherapy</p>
            <p className='mt-4 text-sm font-semibold text-shadow-2xs text-[#fff]'>Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet </p>
          </div>


        </div>

      </div>

      <div className='my-20'>
        <div className='text-4xl font-bold text-[#143D60] p-3 text-center'>
          <p>Our Blogs</p>
          <hr className='w-[40%] mx-auto bg-[#143D60] p-[0.05rem] mt-2' />
          <p className='text-lg md:w-[50%] mx-auto my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo</p>

        </div>
        <div className='grid md:grid-cols-3 gap-3 py-5 px-3 md:w-[90%] mx-auto'>
          <div className='flex items-center gap-2 boxShadow1 py-[1rem] px-[1rem] rounded'>
            <div className=' flex flex-col gap-3 '>
              <p className='text-2xl font-semibold text-shadow-2xs text-[#143D60]'>Covid-19 Information</p>
              <p className='mt-4 text-shadow-2xs text-[#A0C878]'>Stay safe during COVID-19. Read our updates on vaccines, symptoms, and prevention measures to protect yourself and your loved ones.</p>
              <p className='text-[#143D60]'>Read More</p>
            </div>
            <div>
              <img src={mask} className='w-[15rem] ' />
            </div>

          </div>

          <div className='flex items-center gap-2 boxShadow1 py-[1rem] px-[1rem] rounded'>
            <div className=' flex flex-col gap-3 '>
              <p className='text-2xl font-semibold text-shadow-2xs text-[#143D60]'>Preventive Healthcare</p>
              <p className='mt-4 text-shadow-2xs text-[#A0C878]'>Stay Ahead of Illness: Proactively Take Charge of Your Well-being by Embracing Preventive Health Measures.</p>
              <p className='text-[#143D60]'>Read More</p>
            </div>
            <div>
              <img src={preventive} className='w-[11rem] ' />
            </div>

          </div>

          <div className='flex items-center gap-2 boxShadow1 py-[1rem] px-[1rem] rounded'>
            <div className=' flex flex-col gap-3 '>
              <p className='text-2xl font-semibold text-shadow-2xs text-[#143D60]'>Insurance & TPA</p>
              <p className='mt-4 text-shadow-2xs text-[#A0C878]'>Stay protected and worry-free with our insurance and TPA services. Enjoy seamless and hassle-free medical assistance.</p>
              <p className='text-[#143D60]'>Read More</p>
            </div>
            <div>
              <img src={insurance} className='w-[11rem] ' />
            </div>

          </div>




        </div>

      </div>

      <div className='md:my-20 bg-[#143D60] py-15'>
        <div className='text-4xl font-bold text-[#DDEB9D] p-3 text-center'>
          <p>Our Achievements</p>
          <hr className='w-[40%] mx-auto bg-[#DDEB9D] p-[0.05rem] mt-2' />
          <p className='text-lg md:w-[50%] mx-auto my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo</p>

        </div>
        <div className='grid md:grid-cols-5 gap-3 py-5 px-3'>
          <div className=' py-[4rem] text-center rounded rotating-border rotating-border--google'>
            <p className='text-6xl font-semibold text-shadow-2xs text-[#DDEB9D]'>7 +</p>
            <p className='mt-4 text-2xl font-semibold text-shadow-2xs text-[#A0C878]'>Years of Experience</p>
          </div>
          <div className=' py-[4rem] text-center rounded rotating-border rotating-border--google'>
            <p className='text-6xl font-semibold text-shadow-2xs text-[#DDEB9D]'>7 +</p>
            <p className='mt-4 text-2xl font-semibold text-shadow-2xs text-[#A0C878]'>Beds Available</p>
          </div>
          <div className=' py-[4rem] text-center rounded rotating-border rotating-border--google'>
            <p className='text-6xl font-semibold text-shadow-2xs text-[#DDEB9D]'>7 +</p>
            <p className='mt-4 text-2xl font-semibold text-shadow-2xs text-[#A0C878]'>Our Specialists</p>
          </div>
          <div className=' py-[4rem] text-center rounded rotating-border rotating-border--google'>
            <p className='text-6xl font-semibold text-shadow-2xs text-[#DDEB9D]'>7 +</p>
            <p className='mt-4 text-2xl font-semibold text-shadow-2xs text-[#A0C878]'>Our Staff</p>
          </div>
          <div className=' py-[4rem] text-center rounded rotating-border rotating-border--google'>
            <p className='text-6xl font-semibold text-shadow-2xs text-[#DDEB9D]'>24 / 7</p>
            <p className='mt-4 text-2xl font-semibold text-shadow-2xs text-[#A0C878]'>We are Working</p>
          </div>

        </div>

      </div>

      <div className='my-20'>
        <div className='text-4xl font-bold text-[#143D60] p-3 text-center'>
          <p>Why Choose Us</p>
          <hr className='w-[40%] mx-auto bg-[#DDEB9D] p-[0.05rem] mt-2' />
          <p className='text-lg md:w-[50%] mx-auto my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis placerat urna. Nulla nulla diam, adipiscing non ornare non, commodo</p>

        </div>
        <div className='md:flex gap-2 w-[90%] mx-auto'>
          <div className='rotating-border rotating-border--google '>
            <p className='text-2xl font-semibold text-shadow-2xs text-center mt-7 tracking-normal'>Expert Doctors & Specialists</p>
            <p className='text-lg tracking-wider text-justify my-7'>Our hospital is home to a highly qualified team of doctors, surgeons, and medical staff dedicated to delivering world-class care across multiple specialties.</p>
          </div>
          <div className='rotating-border rotating-border--google '>
            <p className='text-2xl font-semibold text-shadow-2xs text-center mt-7 tracking-normal'>24/7 Emergency & Critical Care</p>
            <p className='text-lg tracking-wider text-justify my-7 '>With fully equipped emergency and ICU facilities, we provide round-the-clock care for life-threatening conditions and urgent needs.</p>
          </div>
          <div className='rotating-border rotating-border--google '> 
            <p className='text-2xl font-semibold text-shadow-2xs text-center mt-7 tracking-normal'>State-of-the-Art Infrastructure</p>
            <p className='text-lg tracking-wider text-justify  my-7'>From advanced diagnostics to modern operating theatres, our hospital is equipped with the latest medical technology to ensure accurate treatment.</p>
          </div>
          <div className='rotating-border rotating-border--google '>
            <p className='text-2xl font-semibold text-shadow-2xs text-center mt-7 tracking-normal'>Patient-Centric Approach</p>
            <p className='text-lg tracking-wider text-justify  my-7'>We believe in personalized care that respects every patient’s needs, dignity, and comfort throughout their journey with us.</p>
          </div>
        </div>
      </div>

      <div className='bg-[#143D60] text-[#DDEB9D] py-10 '>
        <div className='w-[90%] mx-auto grid md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-4'>
          <div>
            <p className='font-bold text-4xl'>Doctor Hospital</p>
            <hr className='bg-[#143D60] p-[0.05rem] mt-2' />
            <p className='my-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis consequuntur quis quae iure vel autem eveniet itaque .

            </p>
            <p>
              Rajinder Nagari, New Delhi,</p>
            <p>
              Pin Code - 110960</p>
            <div className='flex gap-3 my-2'>
              <img src={facebook} className='w-[2rem]' />
              <img src={instagram} className='w-[2rem]' />
              <img src={twitter} className='w-[2rem]' />
            </div>
          </div>
          <div className='pt-2 text-center'>
            <p className='font-bold text-2xl'>Links</p>
            <hr className='bg-[#143D60] p-[0.05rem] mt-2 w-[50%] mx-auto' />
            <ul className='my-2'>
              <li>Home</li>
              <li>About</li>
              <li>Treatments</li>
              <li>Services</li>
              <li>Home</li>
              <li>About</li>
              <li>Treatments</li>
            </ul>
          </div>
          <div className='pt-2 text-center'>
            <p className='font-bold text-2xl'>Departments</p>
            <hr className='bg-[#143D60] p-[0.05rem] mt-2 w-[60%] mx-auto' />
            <ul className='my-2'>
              <li>Cardiology</li>
              <li>Gastroenterology </li>
              <li>Hematology </li>
              <li>Nephrology </li>
              <li>Cardiology</li>
              <li>Gastroenterology </li>
              <li>Hematology </li>
            </ul>
          </div>
          <div className='pt-2 text-center'>
            <p className='font-bold text-2xl'>Contact</p>
            <hr className='bg-[#143D60] p-[0.05rem] mt-2 w-[70%] mx-auto' />
            <ul className='my-2'>
              <li className='flex items-center justify-center gap-3'><img src={email} className='w-[2rem]' /> doctor@doctor.com</li>
              <li className='flex items-center justify-center gap-3'><img src={phone} className='w-[2rem]' /> +91 9191919191</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default hospitalwebhome