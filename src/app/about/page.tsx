import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const About = () => {
  return (
    <div id="About"><section className="text-white bg-black">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src={require("../../../public/imgg.jpg")}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        About Me
        </h1>
        <p className="mb-8 leading-relaxed">
        I have completed my bachelors degree from Punjab University and am currently pursuing advanced studies in Artificial Intelligence at GIAIC
        </p>
       <Link href="#"></Link>
        <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
        Awarded for outstanding performance in badminton, demonstrating exceptional skills and 
dedication. Recognized for remarkable achievements and excellence in athletics, showcasing 
remarkable talent and hard work.
        </p>
        <div className="flex lg:flex-row md:flex-col">
        <a href="/resume.pdf" >
  <button className="bg-purple-950 inline-flex py-3 px-5 rounded-lg items-center hover:bg-pink-800 focus:outline-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-6 h-6"
      viewBox="0 0 512 512"
    >
      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
    </svg>
    <span className="ml-4 flex items-start flex-col leading-none ">
      <span className="text-xs text-gray-600 mb-1">View CV</span>
    </span>
  </button>
</a>
<a href="/resume.pdf" download >
  <button className="ml-4  bg-purple-950 inline-flex py-3 px-5 rounded-lg items-center hover:bg-pink-800 focus:outline-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-6 h-6"
      viewBox="0 0 512 512"
    >
      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
    </svg>
    <span className="ml-4 flex items-start flex-col leading-none ">
      <span className="text-xs text-gray-600 mb-1">Download CV</span>
    </span>
  </button>
</a>
          
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default About