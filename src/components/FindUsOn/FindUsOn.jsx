import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function FindUsOn() {
   return (
      <div>
         <h1 className='my-3 font-semibold'>Find Us On </h1>
         <div className='join join-vertical w-full'>
            <button className='btn join-item justify-start gap-3'><FaFacebookSquare />Facebook</button>
            <button className='btn join-item justify-start gap-3'><FaXTwitter />Twitter</button>
            <button className='btn join-item justify-start gap-3 '><FaInstagram />Instagram</button>
         </div>
      </div>
   )
}

export default FindUsOn