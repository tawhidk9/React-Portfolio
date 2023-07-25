import React from 'react'

const Navigation = () => {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-stone-700 m-5">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Tawhid Kamal
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a
            href="#about"
            className="mr-5 hover:text-white active:text-emerald-800"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="mr-5 hover:text-white active:text-emerald-800"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="mr-5 hover:text-white active:text-emerald-800"
          >
            Contact
          </a>
          <a
            href="#resume"
            className="mr-5 hover:text-white active:teemerald-800"
          >
            Resume
          </a>
        </nav>
      </div>
  )
}

export default Navigation