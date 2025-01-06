import React from 'react'
import { Github, Instagram, Linkedin, Mail,} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const FloatingActionButton = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/ariiqysf',
      color: 'hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/ariiqyusuf',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/yusufariiq',
      color: 'hover:bg-gray-800'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:ariiqyusufdu@gmail.com',
      color: 'hover:bg-red-600'
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Social Links */}
      <div className={"flex flex-col-reverse gap-3 mb-3"}>
        {socialLinks.map((social) => (
          <NavLink
            key={social.name}
            to={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 p-3  rounded-full bg-primary shadow-lg 
              transition-all duration-300 transform hover:scale-110 ${social.color} group`}
            aria-label={social.name}
          >
            <social.icon className="text-white" />
            <span className="absolute right-14 bg-primary px-2 py-1 rounded text-white text-sm 
              opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {social.name}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default FloatingActionButton

