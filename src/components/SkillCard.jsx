const SkillCard = ({ name, icon }) => {
  return (
    <div className="bg-secondary group relative flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
        <div className="relative w-16 h-16 mb-4">
            <img 
                src={icon}
                alt={`${name} icon`}
                className='object-cover'
            />
        </div>
        <h3 className="mt-2 text-xl font-semibold text-white">
            {name}
        </h3>
    </div>
  )
}

export default SkillCard