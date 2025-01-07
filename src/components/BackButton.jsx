import React from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const BackButton = () => {
  return (
    <>
        <NavLink to={"/"} className="w-fit mb-8 flex items-center gap-2 text-white ">
            <ArrowLeft className='text-fourth' /> 
            <p className='text-lg'>Back</p> 
        </NavLink>
    </>
  )
}

export default BackButton