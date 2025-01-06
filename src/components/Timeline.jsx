import React from 'react'

const Timeline = ({ items }) => {
  return (
    <ol className='relative border-s border-gray-200 dark:border-gray-700'>
        {items.map((item, index) => (
            <li key={index} className='mb-10 ml-4'>
                <div className="absolute w-3 h-3 bg-fourth rounded-full mt-2 -left-[6px]"></div>
                <time className="mb-1 text-sm font-normal leading-none text-purple-300">{item.date}</time>
                <h3 className='text-lg font-semibold text-white'>{item.title}</h3>
                <p className='mb-4 text-base text-gray-300'>{item.subtitle}</p>
            </li>
        ))}
    </ol>
  )
}

export default Timeline