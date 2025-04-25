import React from 'react'
import logo from "../../assets/logo4.png"
import moment from 'moment/moment'
export const Header = () => {
   return (
      <div className='flex flex-col items-center justify-center gap-2 py-2'>
         <div className='logo mt-6'>
            <img className='w-[380px]' src={logo} alt="" />
         </div>
         <p className='text-sm font-medium text-gray-500'>Journalism without fear and Favour</p>
         <p className='text-base font-medium text-gray-600'>{moment().format('LLLL')}</p>
      </div>
   )
}
