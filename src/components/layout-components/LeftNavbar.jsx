import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router';

function LeftNavbar() {
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      fetch('/categories.json')
         .then((res) => res.json())
         .then(data=>setCategories(data))
   }, []);
   return (
      <div className='flex flex-col gap-3 mt-4 '>
         {
            categories.map(category=><NavLink to={`category/${category.id}`} className='text-start btn' key={category.id}>{category.name}</NavLink>)
         }
      </div>
   )
}

export default LeftNavbar