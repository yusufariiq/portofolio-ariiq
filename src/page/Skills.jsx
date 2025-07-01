import SkillCard from '../components/SkillCard'
import BackButton from '../components/BackButton'
import { SKILLS_DATA } from '../constants/data'

const Skills = () => {
  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 ">
        <BackButton />

        <div className="flex flex-col mb-8 gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold border-b-4 border-button w-fit mx-auto">TECH STACKS</h1>
        </div>

        {/* All Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SKILLS_DATA.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
      </div>
    </div>
  )
}

export default Skills

