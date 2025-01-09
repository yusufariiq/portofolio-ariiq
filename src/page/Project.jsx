import React from 'react'
import BackButton from '../components/BackButton'
import { ProjectCard } from '../components/ProjectCard'
import AdminImage from '../assets/image/admin.png'
import BlogImage from '../assets/image/blog.png'
import BlokecoreImage from '../assets/image/blokecore.png'
import BookshelfImage from '../assets/image/bookshelf.png'
import FmsImage from '../assets/image/fms.png'
import GeniusImage from '../assets/image/genius.png'
import LPJformImage from '../assets/image/lpjform.png'
import ProductlpImage from '../assets/image/productlp.png'
import SpectrumImage from '../assets/image/spectrum.png'
import TroubleshootImage from '../assets/image/troubleshoot.png'


const projects = [
  {
    title: "Blokecore Online Store",
    description: "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara otomatis.",
    image: BlokecoreImage,
    demoUrl: "https://bloke-core-frontend.vercel.app/",
    detailsUrl: "https://github.com/yusufariiq/BlokeCore-frontend"
  },
  {
    title: "Admin Blokecore Online Store",
    description: "Buku Catatan adalah website yang memungkinkan pengguna untuk membuat, menyimpan, dan mengelola catatan secara digital.",
    image: AdminImage,
    demoUrl: "https://bloke-core-admin.vercel.app/",
    detailsUrl: "https://github.com/yusufariiq/BlokeCore-admin"
  },
  {
    title: "Spectrum Movie Web",
    description: "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal. Pengguna dapat mengatur waktu dan pesan yang akan dikirim.",
    image: SpectrumImage,
    demoUrl: "https://spectrum-movieweb-api.netlify.app/",
    detailsUrl: "https://github.com/yusufariiq/Spectrum-MovieWeb-API-React"
  },
  {
    title: "Finance Management System",
    description: "Growtopia Surgery Shop Calculator membantu pemain Growtopia menghitung keuntungan dan pengeluaran tools di game.",
    image: FmsImage,
    demoUrl: "https://dev-fin.idsurvey.id/",
    detailsUrl: "#"
  },
  {
    title: "LPJ Form Generator",
    description: "Growtopia Surgery Shop Calculator membantu pemain Growtopia menghitung keuntungan dan pengeluaran tools di game.",
    image: LPJformImage,
    demoUrl: "#",
    detailsUrl: "https://github.com/Riverroll/LPJFORM"
  },
  {
    title: "Troubleshoot Ticketing",
    description: "Website Portfolio-V4 adalah versi sebelumnya dari website ini yang berisi informasi mengenai berbagai proyek yang telah saya kerjakan.",
    image: TroubleshootImage,
    demoUrl: "#",
    detailsUrl: "https://github.com/yusufariiq/Troubleshoot-Ticketing-BKI"
  },
  {
    title: "Genius Hoster Landing Page",
    description: "Website IT Support Bekasi adalah proyek yang saya buat atas permintaan guru di sekolah, untuk menyediakan layanan IT support.",
    image: GeniusImage,
    demoUrl: "https://yusufariiq.github.io/GeniusHoster-LandingPage/",
    detailsUrl: "https://github.com/yusufariiq/GeniusHoster-LandingPage"
  },
  {
    title: "Bookshelf",
    description: "Website IT Support Bekasi adalah proyek yang saya buat atas permintaan guru di sekolah, untuk menyediakan layanan IT support.",
    image: BookshelfImage,
    demoUrl: "https://yusufariiq.github.io/Bookshelf/",
    detailsUrl: "https://github.com/yusufariiq/Bookshelf"
  },
  {
    title: "Product Landing Page",
    description: "Website IT Support Bekasi adalah proyek yang saya buat atas permintaan guru di sekolah, untuk menyediakan layanan IT support.",
    image: ProductlpImage,
    demoUrl: "https://yusufariiq.github.io/Product-Landing-Page-Web/",
    detailsUrl: "https://github.com/yusufariiq/Product-Landing-Page-Web"
  },
  {
    title: "Blog Website",
    description: "Website IT Support Bekasi adalah proyek yang saya buat atas permintaan guru di sekolah, untuk menyediakan layanan IT support.",
    image: BlogImage,
    demoUrl: "https://yusufariiq.github.io/MyFirstWebsite/",
    detailsUrl: "https://github.com/yusufariiq/MyFirstWebsite"
  },
]

const Project = () => {
  return (
    <div className="min-h-screen text-white gradient-bg">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <BackButton />
        <div className="flex flex-col mb-12 gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold border-b-4 border-button w-fit mx-auto">
            PROJECT SHOWCASE
          </h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project