import React, { useEffect, useState } from 'react'
import { Code, Briefcase, Award, Github, Instagram, Linkedin, Mail, FileText, } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Typed from "typed.js"
import ResumeFile from "../assets/files/cv.pdf"
import ProfilePicture from '../assets/image/profil2.jpg'

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
    {
      title: 'Projects',
      icon: Briefcase,
      link: '/project',
      description: 'Accomplished Works Unveiled.'
    },
    {
      title: 'Certificates',
      icon: Award,
      link: '/certificate',
      description: 'Recognitions showcasing my expertise.'
    },
    {
      title: 'Tech Stack',
      icon: Code,
      link: '/skills',
      description: 'Tools and technologies I excel with.'
    }
  ]

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/ariiqysf',
      color: 'hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ariiqyusuf',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Github,
      href: 'https://github.com/yusufariiq',
      color: 'hover:bg-gray-800'
    },
    {
      icon: Mail,
      href: 'mailto:ariiqyusufdu@gmail.com',
      color: 'hover:bg-red-600'
    }
  ]

  return (
    <div className='min-h-screen bg-primary flex flex-col justify-center items-center p-12'>
      <div className="w-full max-w-6xl flex flex-row mb-20 gap-8 sm:gap-10">
        <div className="basis-2/3 text-white flex flex-col justify-center gap-2 md:gap-5">
          <h1 className="text-3xl md:text-6xl font-bold">Hi, I'm Ariiq Yusuf</h1>
          <div className="h-9 mb-1">
            <h2 className="text-xl md:text-4xl font-medium full-stack-text"></h2>
          </div>
          <p className='text-xs sm:text-sm md:text-base text-justify mb-3 text-neutral-300'>A highly motivated eighth semester student at with a passion for web design and development, experienced at developing responsive and user-friendly websites using ReactJS and other modern frameworks. Eager to contribute and grow professionally in a dynamic company.</p>
          <button 
            className="flex items-center gap-2 w-fit bg-button hover:bg-indigo-700 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-lg font-medium hover:bg-opacity-90 transition-colors duration-300"
            onClick={handleDownload}
          >
            <FileText className='h-5' />
            Download CV
          </button>
        </div>
        <div className="basis-1/3 flex flex-col items-center gap-6">
          <img src={ProfilePicture} alt="Profile" className="rounded-full h-40 sm:h-60 object-cover" />
          <div className="flex gap-5 sm:gap-10 text-white">
            {socialLinks.map((social) => (  
              <NavLink 
                to={social.href}
                className={`bg-button p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${social.color} group`}
              >
                <social.icon/>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {sections.map((section) => (
          <div className=" bg-secondary p-6 rounded-lg text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            <NavLink
              to={section.link} 
              key={section.title}
              className={`flex flex-col group transition-colors duration-500 gap-3`}
            >
              <div className="flex justify-between">
                <div className="space-y-2">
                  <p className="text-lg lg:text-2xl font-bold uppercase">
                    {section.title}
                  </p>
                  <p className="text-sm text-neutral-300">
                    {section.description}
                  </p>
                </div>

                <div className="px-2">
                  <section.icon className="w-12 h-12 bg-third rounded-full p-2" />
                </div>
              </div>       
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

