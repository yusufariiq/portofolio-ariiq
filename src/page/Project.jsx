import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import { ProjectCard } from '../components/ProjectCard'
import { PROJECTS_DATA } from '../constants/data'
import { Tabs } from '../components/Tabs'

const Project = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Web Development', "UI/UX"];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeTab === 'All') return true;
    return project.type === activeTab;
  })

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <BackButton />
        <div className="flex flex-col mb-12 gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold border-b-4 border-button w-fit mx-auto">
            PROJECT SHOWCASE
          </h1>
        </div>
        
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
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