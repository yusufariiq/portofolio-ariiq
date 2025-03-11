import React, { useEffect, useState } from 'react'
import { FileText, } from 'lucide-react'
import { SOCIAL_LINKS, HOME_SECTIONS } from '../constants/data'
import { NavLink } from 'react-router-dom'
import Typed from "typed.js"
import ResumeFile from "../assets/files/cv.pdf"
import ProfilePicture from '../assets/image/profil2.jpg'
import ShinyText from '../components/ShinyText'

const Home = () => {
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const options = {
      strings: ["I'm a Full Stack Engineer.", "I'm a Data Analyst."],
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

  return (
    <div className='min-h-screen flex flex-col justify-center items-center p-12 overflow-hidden'>
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row mb-10 md:mb-20 gap-8 sm:gap-10">
        <div className="w-full md:w-2/3 text-white flex flex-col justify-center gap-2 md:gap-5">
          <ShinyText text="Hi, I'm Ariiq Yusuf" disabled={false} speed={5} className='text-3xl md:text-6xl font-bold' />
          {/* <h1 className="text-3xl md:text-6xl font-bold">Hi, I'm Ariiq Yusuf</h1> */}
          <div className="h-9 mb-1">
            <h2 className="text-xl md:text-4xl font-medium full-stack-text"></h2>
          </div>
          <p className='text-xs sm:text-sm md:text-base text-justify mb-3 text-neutral-300'>An enthusiastic final-year student with a strong passion for web design and development, skilled in building responsive and user-friendly websites using ReactJS and modern frameworks. Excited to bring creativity and expertise to a forward-thinking company while growing professionally.</p>
          <button 
            className="relative flex items-center gap-2 w-fit bg-button hover:bg-indigo-700 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-lg font-medium hover:bg-opacity-90 transition-colors duration-300"
            onClick={handleDownload}
          >
            <FileText className='h-5' />
            Download CV
          </button>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center gap-6">
          <img src={ProfilePicture} alt="Profile" className="border-4 rounded-full h-40 sm:h-60 object-cover" />
          <div className="flex gap-5 sm:gap-10 text-white">
            {SOCIAL_LINKS.map((social) => (  
              <NavLink 
                to={social.href}
                target='_blank'
                className={`bg-button p-2 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${social.color} group`}
              >
                <social.icon/>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {HOME_SECTIONS.map((section) => (
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

