import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-gray-200'><footer className="text-gray-600 body-font">
    <div className="container px-5 py-1 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image src={require("../../../public/nidzzzzz.jpg")} alt="nidaportpolio" width={40} height={30}/>
        <span className="ml-3 text-xl">Nidz Portfolio</span>
      </a>
      <div className="flex-grow flex flex-wrap md:pl-20">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              LINKS
            </h2>
            <nav className="flex space-x-4 mb-10">
              <li>
                <a 
                  href="https://second-mile-stone-96sf.vercel.app/project" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-800"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Nidapervez" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-800"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/nida-pervez-8468202b6/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-800"
                >
                  LinkedIn
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Contact: <a href="mailto:nnpervez333@gmail.com" className="text-gray-600 hover:text-gray-800">nnpervez333@gmail.com</a>
          </p>
        </div>
      
    </div>
  </footer>
  </div>
  )
}

export default Footer