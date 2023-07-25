import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-stone-700 ">
        <p className="title-font font-medium text-white mb-4 md:mb-0">
          < Link to = "/" className="ml-3 text-xl">
            Tawhid Kamal
          </Link>
        </p>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link
           to ="/"
            className="mr-5 hover:text-white active:text-emerald-800"
          >
            About Me
          </Link>
          <Link
             to="/projects"
            className="mr-5 hover:text-white active:text-emerald-800"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="mr-5 hover:text-white active:text-emerald-800"
          >
            Contact
          </Link>
          {/* <Link
            href="#resume"
            className="mr-5 hover:text-white active:teemerald-800"
          >
            Resume
          </a> */}
        </nav>
      </div>
    </>
    
  )
}

export default Navigation