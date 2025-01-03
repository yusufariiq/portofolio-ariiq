import React, { useEffect } from 'react'
import Typed from "typed.js";

const Home = () => {


  useEffect(() => {
    const options = {
      strings: ["I'm a Full Stack Engineer."],
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

  return (
    <div className='h-screen flex overflow-hidden'>
      {/* Left section */}
      <div className="w-1/2 bg-secondary  flex items-center justify-center p-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Ariiq Yusuf</h1>
          <div className="h-9">
              <h2 className="text-3xl md:text-4xl font-medium full-stack-text"></h2>
          </div>
          <button className="my-8 bg-primary text-fourth px-6 py-3 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-colors duration-300">
            View Resume
          </button>
        </div>
      </div>
      
      {/* Right section */}
      <div className="w-1/2 grid grid-cols-2 font-medium">
        <div className="bg-primary flex items-center justify-center p-4">
          <p className='text-fourth text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center'>About Me</p>
        </div>
        <div className="bg-fourth flex items-center justify-center p-4">
          <p className='text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center'>Skills</p>   
        </div>
        <div className="bg-fourth flex items-center justify-center p-4">
          <p className='text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center'>Project</p>
        </div>
        <div className="bg-primary flex items-center justify-center p-4">
          <p className='text-fourth text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center break-words hyphens-auto'>Certificate</p>
        </div>
      </div>
    </div>
  )
}

export default Home

