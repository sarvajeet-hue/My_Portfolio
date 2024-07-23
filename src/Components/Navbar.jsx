


import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 mx-auto w-full sm:w-[412px] md:w-[800px] lg:w-[1650px]">
      <h1 className="font-bold text-[50px] text-violet-600 cursor-pointer mb-4 sm:mb-0"><Link to={"/"}>Sarvajeet</Link></h1>
      <div className="flex flex-wrap items-center justify-center gap-3 font-sans text-violet-500 font-semibold">
        <p className="hover:text-violet-700 cursor-pointer"><NavLink to="/Experience">Experience</NavLink></p>
        <p className="hover:text-violet-700 cursor-pointer"><NavLink to="/Projects">Projects</NavLink></p>
        <p className="hover:text-violet-700 cursor-pointer"><NavLink  to="/Skills" >Skills</NavLink></p>
        <p className="hover:text-violet-700 cursor-pointer">Certification</p>
        <p className="hover:text-violet-700 cursor-pointer">Contact Me</p>
      </div>
    </div>

  )
}
