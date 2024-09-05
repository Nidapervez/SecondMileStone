import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
  return (
    <div id="Project"
    ><section className="text-gray-600 body-font bg-black">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          My Projects
        </h1>
      </div>
      <div className="flex flex-wrap -m-4">
{/* projects */}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../../public/timer.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Timer Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Count Down Timer
              </h1>
              <p className="leading-relaxed line-clamp-2">
              This  project is the timer project with different functionality.
              </p>
              <Link target="_blank"
              href={"https://counter1st-project.vercel.app/"}>
              <p className="leading-relaxed text-indigo-500 mb-1 hover:underline">
              View Project</p> </Link >
            
            </div>
          </div>
        </div>
        

        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
          <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../../public/gro.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Grocery Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Grocery
              </h1>
              <p className="leading-relaxed line-clamp-2">
              This website project is designed to streamline the shopping experience for groceries, providing an easy-to-navigate platform for users to browse and purchase fresh produce, pantry staples, and specialty items.
              </p>
              <Link target="_blank"
              href={"http://grocery-website-o9959o86c-nida-pervezs-projects.vercel.app"}>
              <p className="leading-relaxed text-indigo-500 mb-1 hover:underline">
              View Project</p> </Link >
            
            </div>
          </div>
        </div>
        


        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
          <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../../public/acc.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Accessories Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Accessories
              </h1>
              <p className="leading-relaxed line-clamp-2">
              This website project is dedicated to showcasing a wide range of premium accessories, from fashion items to tech gadgets, catering to diverse consumer needs.
              </p>
              <Link target="_blank"
              href={"https://accessories-website-nlek30y81-nida-pervezs-projects.vercel.app/index.html"}>
              <p className="leading-relaxed text-indigo-500 mb-1 hover:underline">
              View Project</p> </Link >
            
            </div>
          </div>
        </div>
        

        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
          <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../../public/ani.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Amimated Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Amimation
              </h1>
              <p className="leading-relaxed  line-clamp-2">
              This website project is dedicated to showcasing and distributing animated content, offering a vibrant platform for creators to display their latest animations and connect with audiences.
              </p>
              <Link target="_blank"
              href={"http://animated-z7gfz3jpa-nida-pervezs-projects.vercel.app"}>
              <p className="leading-relaxed text-indigo-500 mb-1 hover:underline ">
              View Project</p> </Link >
            
            </div>
          </div>
        </div>
        

        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
          <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../../public/ama.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Amazon Clone Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Amazon Clone
              </h1>
              <p className="leading-relaxed line-clamp-2 ">
              This website project replicates the functionality of Amazon, providing a comprehensive e-commerce platform where users can browse, purchase, and review a vast array of products across multiple categories.
              </p>
              <Link target="_blank"
              href={"http://amazon-clone-mfaky44e3-nida-pervezs-projects.vercel.app"}>
              <p className="leading-relaxed text-indigo-500 mb-1 hover:underline ">
              View Project</p> </Link >
            
            </div>
          </div>
        </div>
        

        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
          <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../../public/fa.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Facebook Login Clone Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Facebook Login
              </h1>
              <p className="leading-relaxed line-clamp-2 ">
              This website project mimics the Facebook login functionality, offering a secure and user-friendly authentication system for integrating social login features into various applications.
              </p>
              <Link target="_blank"
              href={"http://facebookloginclone-e5u8o20tb-nida-pervezs-projects.vercel.app"}>
              <p className="leading-relaxed text-indigo-500 mb-1 hover:underline ">
              View Project</p> </Link >
            
            </div>
          </div>
        </div>
        


        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
          <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../../public/na.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Navigation bar Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Navigation bar
              </h1>
              <p className="leading-relaxed line-clamp-2 ">
              This website project focuses on creating an intuitive and responsive navigation bar, designed to enhance user experience by providing easy access to key sections and features of the site
              </p>
              <Link target="_blank"
              href={"http://nav-glonf74bu-nida-pervezs-projects.vercel.app"}>
              <p className="leading-relaxed text-indigo-500 mb-1 hover:underline">
              View Project</p> </Link >
            
            </div>
          </div>
        </div>
        


        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
          <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../../public/ca.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Calculator Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Calculator
              </h1>
              <p className="leading-relaxed line-clamp-2">
              This website project features a versatile calculator application, offering users a range of functions from basic arithmetic to advanced mathematical operations with an intuitive interface
              </p>
              <Link target="_blank"
              href={"http://calculator-4hg8rzgo2-nida-pervezs-projects.vercel.app"}>
              <p className="leading-relaxed text-indigo-500 mb-1 hover:underline">
              View Project</p> </Link >
            
            </div>
          </div>
        </div>
        

        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
          <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={require('../../../public/abd.jpg')}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Tribute Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Tribute
              </h1>
              <p className="leading-relaxed line-clamp-2">
              This website project is dedicated to creating a heartfelt tribute, allowing users to design and share personalized pages that honor and celebrate individuals or events with multimedia elements and testimonials
              </p>
              <Link target="_blank"
              href={"http://dr-qadeer-khan-obv89f30m-nida-pervezs-projects.vercel.app"}>
              <p className="leading-relaxed text-indigo-500 mb-1hover:underline ">
              View Project</p> </Link >
            
            </div>
          </div>
        </div>
        








      </div>
    </div>
  </section>
  </div>
  )
}

export default Project

