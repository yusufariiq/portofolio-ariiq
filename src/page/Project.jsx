import React from 'react'
import BackButton from '../components/BackButton'

const Project = () => {
  return (
    <div className="min-h-screen bg-primary text-white gradient-bg">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 ">
        <BackButton />
        <div className="flex flex-col mb-8 gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold border-b-4 border-button w-fit mx-auto">PROJECT SHOWCASE</h1>
        </div>
      </div>
    </div>
  )
}

export default Project