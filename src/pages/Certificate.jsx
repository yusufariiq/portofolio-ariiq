import { NavLink } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { CERTIFICATES_DATA } from '../constants/certificates'
import Pagination from '../components/Pagination';
import { useState } from 'react';

const Certificate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(CERTIFICATES_DATA.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCertificates = CERTIFICATES_DATA.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 ">
        <BackButton />
        <div className="flex flex-col mb-8 gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold border-b-4 border-button w-fit mx-auto">CERTIFICATE</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCertificates.map((certificate) => (
            <NavLink
              key={certificate.title}
              to={certificate.detailsUrl}
              target='_blank'
              className="bg-secondary border-0 overflow-hidden rounded-lg group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-0 flex-grow">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="w-full h-full object-center transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-3 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold">{certificate.title}</h3>
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={CERTIFICATES_DATA.length}
        />
      </div>
    </div>
  )
}

export default Certificate