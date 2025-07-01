import { Code, Briefcase, Award, Github, Instagram, Linkedin, Mail } from 'lucide-react'

export const HOME_SECTIONS = [
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

export const SOCIAL_LINKS = [
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