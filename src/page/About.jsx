import React from 'react'
import { ArrowLeft, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import ProfilePicture from '../assets/image/profil2.jpg'
import Timeline from '../components/Timeline'
import { NavLink } from 'react-router-dom'

const About = () => {
  const workExperience = [
    {
      title: 'PT. BIRO KLASIFIKASI INDONESIA (BKI)',
      subtitle: 'Backend Developer',
      date: 'Aug 2024 – Oct 2024',
    },
    {
      title: 'ASTON SIMATUPANG HOTEL & CONFERENCE CENTER',
      subtitle: 'IT Support',
      date: 'Jul 2023 – Nov 2023',
    },
    {
      title: 'PT. PUTRA TIMUR JAYA (Telkom Indonesia)',
      subtitle: 'IT Support',
      date: 'Jul 2019 – Nov 2019',
    },
  ]

  const education = [
    {
      title: 'Asia E University',
      subtitle: 'Undergraduate Bachelor Degree in Information Technology',
      date: '2021 - Present',
    },
    {
      title: 'CCIT Fakultas Teknik Universitas Indonesia',
      subtitle: 'Diploma Information Technology',
      date: '2021 - 2023',
    },
  ]

  return (
    <div className='min-h-screen flex flex-col lg:flex-row'>
        <div className="w-full lg:w-1/2 ">
          <div className="lg:sticky lg:top-0 h-1/2 lg:h-screen">
            <img 
              src={ProfilePicture} 
              alt="Profile Picture" 
              className='h-full w-full object-cover'
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-primary p-8">
          <NavLink to={"/"} className="mb-8 flex items-center gap-2 text-white ">
            <ArrowLeft className='text-fourth' /> 
            <p className='text-lg'>Back</p> 
          </NavLink>
          <div className="mb-8 flex flex-col gap-5">
            <h1 className='text-5xl font-semibold text-white'>ABOUT ME</h1>
            <h2 className='text-xl text-fourth font-medium'>Ariiq Yusuf Dhiya Ulhaq - Fullstack Engineer</h2>
            <p className='text-white text-justify'>A highly motivated eighth semester student at with a passion for web design and development, experienced at developing responsive and user-friendly websites using ReactJS and other modern frameworks. Has a disciplined personality and can adjust to technological changes. Capable of working in groups or on individually, with strong communication and problem-solving abilities. Eager to contribute and grow professionally in a dynamic company.</p>
          </div>
          <div className="mb-8">
            <div className="flex gap-5">
              <BriefcaseBusiness size={35} className='text-fourth'/>
              <h1 className='text-3xl font-semibold text-white mb-5'>Work Experience</h1>
            </div>
            <Timeline items={workExperience} />
          </div>
          <div className="mb-8">
            <div className="flex gap-5">
              <GraduationCap size={35} className='text-fourth'/>
              <h1 className='text-3xl font-semibold text-white mb-5'>Education</h1>
            </div>
            <Timeline items={education} />
          </div>
        </div>
    </div>
  )
}

export default About