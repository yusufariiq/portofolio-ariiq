import React from 'react'
import { NavLink } from 'react-router-dom'
import BackButton from '../components/BackButton'
import rwdFccCertificates from '../assets/certificates/22-rwd-fcc.jpg'
import udemyHTMLCertificates from '../assets/certificates/23-html5-udemy.jpg'
import { Info } from 'lucide-react'

const certificates = [
  {
    title: "Responsive Web Design FreeCodeCamp",
    image: rwdFccCertificates,
    year: 2023,
    detailsUrl: "https://drive.google.com/file/d/1OHih4wZ3otgi87xvfTlstjBKLtAwnAgc/view?usp=sharing"
  },
  {
    title: "Pemograman HTML5 Udemy",
    image: udemyHTMLCertificates,
    year: 2023,
    detailsUrl: "https://drive.google.com/file/d/1m-fpckJcGQFwGyF3_xiz6V4U_EkGJC1r/view?usp=sharing"
  },
]

const Certificate = () => {
  return (
    <div className="min-h-screen text-white gradient-bg">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 ">
        <BackButton />
        <div className="flex flex-col mb-8 gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold border-b-4 border-button w-fit mx-auto">CERTIFICATE</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate) => (
              <div className="bg-secondary/50 border-0 overflow-hidden rounded-lg group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
                <div className="p-0 flex-grow">
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={certificate.image} 
                      alt={certificate.title}
                      className="w-full h-full object-center transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                    <p className="text-sm text-neutral-300 line-clamp-2">{certificate.year}</p>
                  </div>
                </div>
          
                <div className="px-6 pb-6 mt-auto flex flex-row justify-end gap-3">
                  <NavLink
                      to={certificate.detailsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-4 flex items-center bg-button gap-2 rounded-lg hover:bg-indigo-700 duration-200"
                  >
                      Details
                      <Info className="h-4 w-4" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Certificate