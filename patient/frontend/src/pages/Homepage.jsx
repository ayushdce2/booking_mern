import React from 'react'
import {Link} from "react-router-dom"


const Homepage = () => {
  return (
    <div className='h-[100vh] overflow-hidden bg-[grey] grid grid-cols-[1fr_5.5fr]'>
      <div className='h-full border-2 p-2'>
        <div className='flex gap-3 items-center justify-center border-b-2 pb-2'>
          <img src='./images/logo.svg'/><span>Admin</span>
        </div>
        <div>
          <ul>
            <li>
              <Link className='flex gap-2'>
                <img src='#'/> <span>Dashboard</span>
              </Link>
            </li>
          </ul>
        </div>

      </div>
      <div className='h-full border-2'>

      </div>
      

    </div>
  )
}

export default Homepage