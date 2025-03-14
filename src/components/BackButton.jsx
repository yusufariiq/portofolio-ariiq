import React from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

const BackButton = () => {
  return (
    <>
        <NavLink to={"/"} className="relative w-fit mb-8 flex items-center gap-1 text-white">
            <ChevronLeft className='text-button h-12' /> 
            <p className='text-lg'>Back</p> 
        </NavLink>
    </>
  )
}

export default BackButton