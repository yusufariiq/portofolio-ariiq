import React, { useEffect, useState } from 'react'
import { User, Code, Briefcase, Award } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Typed from "typed.js"
import ResumeFile from "../assets/files/cv.pdf"

const Home = () => {
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const options = {
      strings: ["I'm a Full Stack Engineer.", "I'm a Data Analyst"],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: false,
      loop: true,
    };

    const typed = new Typed(".full-stack-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  const handleDownload = () => {
    if (!downloaded) {
      const link = document.createElement("a");
      link.href = ResumeFile;
      link.download = "Ariiq_Yusuf_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloaded(true);
    }
  }

  const sections = [
    { title: 'About me', icon: User, link: '/about' },
    { title: 'Skills', icon: Code, link: '/skills' },
    { title: 'Projects', icon: Briefcase, link: '/project' },
    { title: 'Certification', icon: Award, link: '/certificate' },
  ]

  return (
    <div className='min-h-screen flex flex-col lg:flex-row'>
      {/* Top section (Left on larger screens) */}
      <div className="w-full lg:w-1/2 bg-primary flex items-center justify-center p-8 min-h-screen">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Ariiq Yusuf</h1>
          <div className="h-9">
            <h2 className="text-3xl md:text-4xl font-medium full-stack-text"></h2>
          </div>
          <button 
            className="my-8 bg-button hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-colors duration-300"
            onClick={handleDownload}
          >
            View resume
          </button>
        </div>
      </div>
      
      {/* Bottom section (Right on larger screens) */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 font-medium min-h-screen">
        {sections.map((section, index) => (
          <NavLink
            to={section.link} 
            key={section.title}
            className={`flex flex-col items-center justify-center p-4
            ${index % 3 === 0 ? 'bg-secondary text-third' : 'bg-third text-secondary'} 
            group hover:bg-button transition-colors duration-500 hover:text-white`}
          >
            <section.icon className='w-12 h-12 md:w-20 md:h-20 mb-2 group-hover:hidden' />
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center hidden group-hover:block'>
              {section.title}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Home

