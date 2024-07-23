


import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex items-start justify-between w-[1250px] mt-2 '>
        <h1 className='font-bold text-lg text-violet-600 cursor-pointer'>PORTFOLIO</h1>

        <div className='flex items-center justify-center gap-3 font-sans text-violet-500 font-semibold'>
            <p>Experience</p>
            <p>Projects</p>
            <p>Skills</p>
            <p>Certification</p>
            <p>Contact Me</p>
        </div>
    </div>
  )
}
