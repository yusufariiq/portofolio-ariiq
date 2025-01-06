import React, { useEffect } from 'react'
import { User, Code, Briefcase, Award } from 'lucide-react'
import { NavLink } from 'react-router-dom';
import Typed from "typed.js";

const Home = () => {

  useEffect(() => {
    const options = {
      strings: ["I'm a Full Stack Engineer.", "I'm a Data Analyst"],
      typeSpeed: 100, // Kecepatan pengetikan (ms per karakter)
      backSpeed: 100, // Kecepatan penghapusan (ms per karakter)
      showCursor: false, // Menampilkan kursor
      loop: true, // Mengulang ketik
    };

    const typed = new Typed(".full-stack-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  const sections = [
    { title: 'About me', icon: User, link: '/about' },
    { title: 'Skills', icon: Code, link: '/skills' },
    { title: 'Projects', icon: Briefcase, link: '/project' },
    { title: 'Certification', icon: Award, link: '/certificate' },
  ]

  return (
    <div className='h-screen flex flex-col md:flex-row overflow-hidden'>
      {/* Left section */}
      <div className="h-full w-full md:w-1/2 bg-primary flex items-center justify-center p-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Ariiq Yusuf</h1>
          <div className="h-9">
              <h2 className="text-3xl md:text-4xl font-medium full-stack-text"></h2>
          </div>
          <button className="my-8 bg-button text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-colors duration-300">
            View Resume
          </button>
        </div>
      </div>
      
      {/* Right section */}
      <div className="h-full w-full md:w-1/2 grid grid-cols-2 font-medium">
        {sections.map((section, index) => (
          <NavLink
          to={section.link} 
          key={section.title}
          className={`flex flex-col items-center justify-center p-4
          ${index % 3 === 0 ? 'bg-secondary text-third' : 'bg-third text-secondary'} group hover:bg-button transition-colors duration-500 hover:text-white`}>
            <section.icon className='w-20 h-20 mb-2 group-hover:hidden' />
            <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center hidden group-hover:block'>
              {section.title}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Home

