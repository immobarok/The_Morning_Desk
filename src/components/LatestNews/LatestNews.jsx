import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router'

function LatestNews() {
   return (
      <div className='flex items-center gap-2 bg-gray-200/40 mt-5 py-2 px-2'>
         <p className='bg-[#D72050] text-base-100 font-semibold py-3 px-8'>Latest</p>
         <Marquee speed={100} pauseOnHover={true} className='space-x-10'>
            <Link to={'/news'}>I can be a React component, multiple React components, or just some text.</Link>
            <Link to={'/news'}>I can be a React component, multiple React components, or just some text.</Link>
            <Link to={'/news'}>I can be a React component, multiple React components, or just some text.</Link>
         </Marquee>
      </div>
   )
}

export default LatestNews