"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='bg-black'>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
  <Image src={require("../../../public/nidapic.jpg")} alt="nidaportpolio"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
      Hello I am
      <br className='hidden lg:inline-block'/>
      
      <Typewriter
  options={{
    strings: ['Webdeveloper', 'UI/UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>
       Nida Pervez.
      </h1>
      <p className="mb-8 leading-relaxed text-white">
      Hi, I am Nida, a seasoned web developer dedicated to creating responsive websites that captivate and motivate users.
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button 
        className=" inline-flex text-white  bg-purple-950 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button></Link>
      
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero