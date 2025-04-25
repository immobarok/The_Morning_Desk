import React from 'react'
import { Link } from 'react-router'
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div></div>
      <div className='nav space-x-5 text-gray-600 font-medium text-sm'>
        <Link to={"/category/1"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/career"}>Career</Link>
      </div>
      <div className='flex justify-between gap-x-2 items-center '>
        <FaCircleUser size={32}/>
        <button className='btn btn-neutral px-8'>Login</button>
      </div>
    </div>
  )
}

export default Navbar