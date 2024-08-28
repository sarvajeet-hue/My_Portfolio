

import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
  
  const array_of_Tags = [
    {
      tag : "Home" , 
      path : "/"
    } , 
    {
      tag : "Education",
      path : "/Education"
    }, 
    {
      tag : "Experience", 
      path : "/Experience"
    } , 
    {
      tag : "Projects", 
      path : "/Projects"
    }, 
    {
      tag : "Contact Me", 
      path : "/ContactMe"
    }
  ]

  return (
    
    <div className="flex flex-col sm:flex-row items-center  justify-between px-[85px] w-full pt-4 ">
      {/* className="font-bold text-center text-[40px] text-blue-900 cursor-pointer mb-4 sm:mb-0 font-serif" */}
      <h1 className='font-bold text-center text-[40px] text-blue-900 cursor-pointer mb-4  font-serif' ><Link to={"/"}>
      <span> &lt;</span>
       Sarvajeet
       <span >/&gt;</span></Link></h1>



      <div className="flex flex-col items-center sm:flex-row flex-wrap justify-center gap-3 font-sans text-gray-500 font-semibold">
        {array_of_Tags.map((data, index) => (
          <div key={index}>
            <NavLink
              to={data?.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-all duration-75 cursor-pointer text-xl font-serif font-bold ${
                  isActive ? "text-white bg-blue-500" : "hover:text-white hover:bg-blue-400"
                }`
              }
            >
              {data?.tag}
            </NavLink>
          </div>
        ))}
      </div>

    </div>

  )
}
