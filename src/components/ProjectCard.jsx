import { CodeXml, ExternalLink } from 'lucide-react'
import { NavLink } from "react-router-dom"


export function ProjectCard({ title, description, image, demoUrl, detailsUrl }) {
  return (
    <div className="bg-secondary/50 border-0 overflow-hidden rounded-lg group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="p-0">
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-neutral-300 line-clamp-2">{description}</p>
        </div>
      </div>

      <div className="px-6 pb-6 flex flex-row justify-end gap-3">
        <NavLink
            to={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 flex items-center bg-button gap-2 rounded-lg hover:bg-indigo-700 duration-200"
        >
            Live Demo
            <ExternalLink className="h-4 w-4" />
        </NavLink>
        
        <NavLink
            to={detailsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 flex items-center bg-third gap-2 rounded-lg hover:bg-secondary duration-200"
        >
            Code
            <CodeXml className="h-4 w-4" />
        </NavLink>
      </div>
    </div>
  )
}

