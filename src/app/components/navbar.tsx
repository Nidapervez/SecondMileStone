
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCloudDownloadAlt } from "react-icons/fa";;

const Navbar = () => {
  return (
    <div className=' z-50 sticky top-0'><header className="text-white body-font bg-gray-400">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <Image src={require("../../../public/nidzzzzz.jpg")} alt="nidaportpolio" width={40} height={30}/>
        <span className="ml-3  text-white font-bold font-mono text-4xl">Nida Pervez</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/" className="mr-5 hover:text-red-800">Home</Link>
        <Link href={"/about"}className="mr-5 hover:text-red-800">About</Link>
        <Link href={"/skills"}className="mr-5 hover:text-red-800">Skills</Link>
        <Link href={"/project"}className="mr-5 hover:text-red-800">Projects</Link>
        <Link href={"/contact"}className="mr-5 hover:text-red-800">Contact</Link>
    
      </nav>
      <Link target='_blank'
      href={"https://github.com/Nidapervez"}>
      <button className="inline-flex items-center bg-fuchsia-800 border-0 py-1 px-3 focus:outline-none hover:bg-pink-800 rounded text-base mt-4 md:mt-0">
      
    Github Profile
      </button></Link>
    </div>
  </header></div>
  )
}

export default Navbar