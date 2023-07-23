import React from 'react'

function ProjectItem({title, imgUrl, stack, link}) {
  return (
    <div>
        <img
        src={imgUrl}
        alt='project'
        className='w-full h-36 md:h-48 object-cover cursor-pointer '
        />
        <div className='w-full p-4'>
            <h3>{title}</h3>
            <p>
                {stack.map(item => (
                    <span>
                        {item}
                    </span>
                ))}
            </p>
        </div>
    </div>
  )
}

export default ProjectItem;