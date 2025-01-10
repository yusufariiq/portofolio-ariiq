import React from 'react'
import BackButton from '../components/BackButton'
import { ProjectCard } from '../components/ProjectCard'
import AdminImage from '../assets/image/admin.png'
import BleuImage from '../assets/image/bleu.png'
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
    description: "Online store for seamless transactions and shopping experiences.",
    image: BlokecoreImage,
    demoUrl: "https://bloke-core-frontend.vercel.app/",
    detailsUrl: "https://github.com/yusufariiq/BlokeCore-frontend"
  },
  {
    title: "Admin Blokecore Online Store",
    description: "Admin dashboard for managing Blokecore online store operations.",
    image: AdminImage,
    demoUrl: "https://bloke-core-admin.vercel.app/",
    detailsUrl: "https://github.com/yusufariiq/BlokeCore-admin"
  },
  {
    title: "Spectrum Movie Web",
    description: "Discover and explore movies with Spectrum Movie Web.",
    image: SpectrumImage,
    demoUrl: "https://spectrum-movieweb-api.netlify.app/",
    detailsUrl: "https://github.com/yusufariiq/Spectrum-MovieWeb-API-React"
  },
  {
    title: "Finance Management System",
    description: "Streamline financial operations with this powerful management tool.",
    image: FmsImage,
    demoUrl: "https://dev-fin.idsurvey.id/",
    detailsUrl: "#"
  },
  {
    title: "LPJ Form Generator",
    description: "Easily create and manage LPJ forms with this tool.",
    image: LPJformImage,
    demoUrl: "#",
    detailsUrl: "https://github.com/Riverroll/LPJFORM"
  },
  {
    title: "Troubleshoot Ticketing",
    description: "Efficiently track and resolve issues with this ticketing system.",
    image: TroubleshootImage,
    demoUrl: "#",
    detailsUrl: "https://github.com/yusufariiq/Troubleshoot-Ticketing-BKI"
  },
  {
    title: "Genius Hoster Landing Page",
    description: "Simple and engaging landing page for Genius Hoster services.",
    image: GeniusImage,
    demoUrl: "https://yusufariiq.github.io/GeniusHoster-LandingPage/",
    detailsUrl: "https://github.com/yusufariiq/GeniusHoster-LandingPage"
  },
  {
    title: "Bookshelf",
    description: "Organize and browse your favorite books with Bookshelf.",
    image: BookshelfImage,
    demoUrl: "https://yusufariiq.github.io/Bookshelf/",
    detailsUrl: "https://github.com/yusufariiq/Bookshelf"
  },
  {
    title: "Product Landing Page",
    description: "Showcase products effectively with this modern landing page.",
    image: ProductlpImage,
    demoUrl: "https://yusufariiq.github.io/Product-Landing-Page-Web/",
    detailsUrl: "https://github.com/yusufariiq/Product-Landing-Page-Web"
  },
  {
    title: "Blog Website",
    description: "A simple blog website for sharing ideas and stories.",
    image: BlogImage,
    demoUrl: "https://yusufariiq.github.io/MyFirstWebsite/",
    detailsUrl: "https://github.com/yusufariiq/MyFirstWebsite"
  },
  {
    title: "Bleu Coffee Apps UI/UX",
    description: "Mobile app for managing coffee orders and enhancing customer experience.",
    image: BleuImage,
    demoUrl: "https://www.figma.com/proto/3DPx3XLw0YIQ1lFv1ULyez/Bleu-Coffee-Apps?node-id=0-1&t=6BDLpnTnFtP2RObV-1",
    detailsUrl: "https://www.figma.com/design/3DPx3XLw0YIQ1lFv1ULyez/Bleu-Coffee-Apps?node-id=0-1&t=6BDLpnTnFtP2RObV-1"
  },
];

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