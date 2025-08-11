import React from 'react';
import { Link } from 'react-router-dom';

const AllAppointments = () => {
  return (
    <>
        <div className='ml-2 bg-[#DDE6ED] p-2 rounded'>
          <p className='text-2xl font-bold text-[#27374D]'>Mr. Raunak</p>
          <p className='italic text-[#526D82] font-semibold'>Country : India</p>
        </div>
        
        <div className='ml-2 mt-3 bg-[#DDE6ED] p-2 rounded'>
          <div className='bg-[#9DB2BF] rounded py-1 px-3 '>
            <p className='text-2xl font-bold text-[#27374D] '>All Appointments</p>
            
          </div>
          <div className='ml-2  p-3 bg-[#DDE6ED] overflow-auto h-[calc(72vh-1rem)]'>
                      <table className=' my_dashboard_table'>
                        <thead>
                          <tr>
                            <th className='text-[#27374D] text-md font-bold '>S.No.</th>
                            <th className='text-[#27374D] text-md font-bold '>Date</th>
                            <th className='text-[#27374D] text-md font-bold '>Time</th>
                            <th className='text-[#27374D] text-md font-bold '>Patient Name</th>
                            <th className='text-[#27374D] text-md font-bold '>Doctor</th>
                            <th className='text-[#27374D] text-md font-bold '>Department</th>
                            <th className='text-[#27374D] text-md font-bold  text-center'>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          
                          <tr>
                            <td>1</td>
                            <td>2022-01-01</td>
                            <td>10:00 AM</td>
                            <td>John Doe</td>
                            <td>Dr. John Doe</td>
                            <td>ENT</td>
                            <td><Link to="/doctor/patient/prescription">Click to View</Link></td>
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
      

        
    </>
  )
}

export default AllAppointments