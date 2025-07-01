import { useState } from 'react'
import BackButton from '../components/BackButton'
import { ProjectCard } from '../components/ProjectCard'
import { Tabs } from '../components/Tabs'
import { PROJECTS_DATA } from '../constants/projects'
import Pagination from '../components/Pagination'

const Project = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const tabs = ['All', 'Web Development', "UI/UX"];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeTab === 'All') return true;
    return project.type === activeTab;
  })

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredProjects / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <BackButton />
        <div className="flex flex-col mb-12 gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold border-b-4 border-button w-fit mx-auto">
            PROJECT SHOWCASE
          </h1>
        </div>
        
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredProjects.length}
        />
      </div>
    </div>
  )
}

export default Project