import React, { useState } from 'react'
import {Link} from "react-router-dom"


const Homepage = () => {
  const [sidebar,setSidebar]=useState(false)
  return (
    <div className='h-[100vh] overflow-hidden bg-[#9DB2BF] grid grid-cols-1 md:grid-cols-[1fr_5fr]'>
      <div className='h-full p-2 pr-0 overflow-auto'>
        
        <div className={`${sidebar ? "flex absolute top-0 right-0 w-[50vw] bg-[#DDE6ED] pl-2" : "hidden"} md:flex gap-3 items-center  border-b-1 border-[#526D82] mb-3 pb-2 h-[3rem] `}>
         <span className='text-2xl text-shadow-sm text-[#27374D] font-semibold'>Hi, Name</span>
        </div>
        <div className={`h-[calc(100vh-5rem)] ${sidebar ? "flex absolute top-12 right-0 w-[50vw]" : "hidden"} md:flex flex-col justify-between  text-[#27374D] bg-[#DDE6ED] p-2 rounded`}>
          <ul>
            <li className=' '>
              <Link className='flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]'>
                <img src='./images/dashboard.svg'/> <span className='text-md font-semibold'>Dashboard</span>
              </Link>
              <Link className='flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]'>
                <img src='./images/dashboard.svg'/> <span className='text-md font-semibold'>Menu</span>
              </Link>
              <Link className='flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]'>
                <img src='./images/dashboard.svg'/> <span className='text-md font-semibold'>Menu</span>
              </Link>
              <Link className='flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]'>
                <img src='./images/dashboard.svg'/> <span className='text-md font-semibold'>Menu</span>
              </Link>
              <Link className='flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]'>
                <img src='./images/dashboard.svg'/> <span className='text-md font-semibold'>Menu</span>
              </Link>
              <Link className='flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]'>
                <img src='./images/dashboard.svg'/> <span className='text-md font-semibold'>Menu</span>
              </Link>
              
            </li>
          </ul>
          
          <ul>
            <li className=' '>
              <Link className='flex gap-2 p-2 mb-2 rounded  bg-[#9DB2BF]'>
                <img src='./images/dashboard.svg'/> <span className='text-md font-semibold'>Profile</span>
              </Link>
              <Link className='flex gap-2 p-2 rounded  bg-[#9DB2BF]'>
                <img src='./images/dashboard.svg'/> <span className='text-md font-semibold'>Settings</span>
              </Link>
              
              
            </li>
          </ul>
        </div>

      </div>
      <div className='h-full p-2 pl-0 overflow-auto'>

        <div className='flex gap-3 items-center justify-end border-b-1 border-[#526D82] mb-3 pb-2 h-[3rem]'>
          <div className='mr-auto' onClick={()=>{setSidebar(prev => !prev)}}>
            <p className='md:hidden'>T</p>
          </div>
          
          
          <div>
            <img src='./images/settings.svg'/>
          </div>
          <div>
            <img src='./images/notification.svg'/>
          </div>
          <div>
            <img src='./images/user.svg'/>
          </div>
          
        </div>

        <div className='ml-2 bg-[#DDE6ED] p-2 rounded'>
          <p className='text-2xl font-bold text-[#27374D]'>Dashboard</p>
          <p className='italic text-[#526D82] font-semibold'>Subheading goes here</p>
        </div>

        <div className='ml-2 my-3  p-3 rounded'>
          <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] gap-4'>
            
            <div className='rounded px-3 py-4 my_box_shadow bg-[#DDE6ED]'>
              <div className='flex items-center pb-2'>
                <div className='grow-1'>
                  <p className='text-2xl font-semibold text-[#27374D]'>All Appointments</p>
                  <p className='font-bold text-xl text-[#27374D]'>53 <span className=' text-sm italic text-[#526D82]'>till today</span></p>
                </div>
                <div className=''>
                  <img src='./images/walkin.svg' className='h-[4rem] w-[4rem]'/>
                </div>
              </div>
              <div className=' border-t-1'>
                <p className=' text-[#526D82] text-shadow-2xs pt-1'>+55% than last week</p>
              </div>
            </div>

            <div className='rounded px-3 py-4 my_box_shadow bg-[#DDE6ED]'>
              <div className='flex items-center pb-2'>
                <div className='grow-1'>
                  <p className='text-2xl font-semibold text-[#27374D]'>All Appointments</p>
                  <p className='font-bold text-xl text-[#27374D]'>53 <span className=' text-sm italic text-[#526D82]'>till today</span></p>
                </div>
                <div className=''>
                  <img src='./images/walkin.svg' className='h-[4rem] w-[4rem]'/>
                </div>
              </div>
              <div className=' border-t-1'>
                <p className=' text-[#526D82] text-shadow-2xs pt-1'>+55% than last week</p>
              </div>
            </div>

            <div className='rounded px-3 py-4 my_box_shadow bg-[#DDE6ED]'>
              <div className='flex items-center pb-2'>
                <div className='grow-1'>
                  <p className='text-2xl font-semibold text-[#27374D]'>All Appointments</p>
                  <p className='font-bold text-xl text-[#27374D]'>53 <span className=' text-sm italic text-[#526D82]'>till today</span></p>
                </div>
                <div className=''>
                  <img src='./images/walkin.svg' className='h-[4rem] w-[4rem]'/>
                </div>
              </div>
              <div className=' border-t-1'>
                <p className=' text-[#526D82] text-shadow-2xs pt-1'>+55% than last week</p>
              </div>
            </div>

            <div className='rounded px-3 py-4 my_box_shadow bg-[#DDE6ED]'>
              <div className='flex items-center pb-2'>
                <div className='grow-1'>
                  <p className='text-2xl font-semibold text-[#27374D]'>All Appointments</p>
                  <p className='font-bold text-xl text-[#27374D]'>53 <span className=' text-sm italic text-[#526D82]'>till today</span></p>
                </div>
                <div className=''>
                  <img src='./images/walkin.svg' className='h-[4rem] w-[4rem]'/>
                </div>
              </div>
              <div className=' border-t-1'>
                <p className=' text-[#526D82] text-shadow-2xs pt-1'>+55% than last week</p>
              </div>
            </div>

          </div>
        </div>

      <div className='ml-2 mt-3  p-2 rounded bg-[#DDE6ED]'>
        <div className='flex gap-5 bg-[#9DB2BF] p-3 rounded'>
          <div>
            <select>
              <option value="option1" selected>Sort by</option>
              <option value="option2">oldest</option>
              <option value="option2">Latest</option>
            </select>
          </div>
          <div className='flex gap-2 ml-auto'>
            <input type='search' className='border-1'/><button>Search</button>
          </div>
          <div>
            <img src='./images/daterange.svg' />
          </div>
        </div>
      </div>
        <div className='ml-2  p-3 bg-[#DDE6ED] overflow-auto h-[calc(49vh-1.2rem)]'>
          <table className=' my_dashboard_table'>
            <thead>
              <tr>
                <th className='text-[#27374D] text-md font-bold '>S.No.</th>
                <th className='text-[#27374D] text-md font-bold '>Date</th>
                <th className='text-[#27374D] text-md font-bold '>Time</th>
                <th className='text-[#27374D] text-md font-bold '>Patient</th>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td>1</td>
                <td>2022-01-01</td>
                <td>10:00 AM</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2022-01-01</td>
                <td>10:00 AM</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2022-01-01</td>
                <td>10:00 AM</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2022-01-01</td>
                <td>10:00 AM</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2022-01-01</td>
                <td>10:00 AM</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2022-01-01</td>
                <td>10:00 AM</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2022-01-01</td>
                <td>10:00 AM</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2022-01-01</td>
                <td>10:00 AM</td>
                <td>John Doe</td>
              </tr>
              
              <tr>
                <td>1</td>
                <td>2022-01-01</td>
                <td>10:00 AM</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2022-01-01</td>
                <td>10:00 AM</td>
                <td>John Doe</td>
              </tr>
              
              
              
            </tbody>
          </table>
        </div>

      </div>
      

    </div>
  )
}

export default Homepage