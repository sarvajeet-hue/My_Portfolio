


import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {

  return (
    
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-[85px]  w-full pt-4    ">
      
      <h1 className="font-bold text-center text-[40px] text-blue-900 cursor-pointer mb-4 sm:mb-0 font-serif"><Link to={"/"}>
      <span> &lt;</span>
       Sarvajeet
       <span >/&gt;</span></Link></h1>
      <div className="flex flex-wrap items-center justify-center gap-3 font-sans text-gray-500 font-semibold">
        <p className="hover:text-blue-700 cursor-pointer text-xl font-serif font-bold "><NavLink to="/">Home</NavLink></p>
        <p className="hover:text-blue-700 cursor-pointer text-xl font-serif font-bold"><NavLink to="/Education">Education</NavLink></p>
        <p className="hover:text-blue-700 cursor-pointer text-xl font-serif font-bold"><NavLink to="/Experience">Experience</NavLink></p>
        <p className="hover:text-blue-700 cursor-pointer text-xl font-serif font-bold"><NavLink to="/Projects">Projects</NavLink></p>
        
        
        <p className="hover:text-violet-700 cursor-pointer text-xl font-serif font-bold">Contact </p>
      </div>
    </div>

  )
}
