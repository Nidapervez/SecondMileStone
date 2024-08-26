import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { FiGithub } from 'react-icons/fi';
import { SiJavascript, SiNextdotjs, SiTypescript } from 'react-icons/si';

const Skills = () => {
  return (
    <div id="Skills"
    data-aos="fade-up" className="bg-black py-8 px-4 sm:py-16 xl:px-14 text-white">
      <div className='text-center text-4xl lg:text-5xl'>
        <h1 className='font-bold'>Skills And Experience</h1>
        
      </div>
      <div className='md:grid md:grid-cols-2 gap-8 py-8 px-4 sm:py-16 xl:px-16 items-center'>
      <div className="skills-section bg-[#121212] py-8 px-4 sm:py-16 xl:px-14">
  <div className="text-center text-4xl lg:text-5xl text-white">
    <h1 className="font-bold">Skills</h1>
  </div>
  <div className="flex flex-wrap space-x-3 sm:space-x-0 justify-center mt-8">
    <div className="skill-item transition-all duration-300 hover:bg-pink-800 border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4 text-white">
      <h2 className="text-xl font-bold">HTML & CSS</h2>
      <p>Proficient in crafting structured and styled web pages using HTML and CSS, ensuring clean and maintainable code.</p>
    </div>
    <div className="skill-item transition-all duration-300 hover:bg-pink-800 border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4 text-white">
      <h2 className="text-xl font-bold">TypeScript</h2>
      <p>Experienced in developing robust applications with TypeScript, enhancing code quality and maintainability through strong typing.</p>
    </div>
    <div className="skill-item transition-all duration-300 hover:bg-pink-800 border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4 text-white">
      <h2 className="text-xl font-bold">Next.js</h2>
      <p>Skilled in building server-rendered React applications using Next.js, optimizing performance and SEO with its advanced features.</p>
    </div>
    <div className="skill-item transition-all duration-300 hover:bg-pink-800 border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4 text-white">
      <h2 className="text-xl font-bold">GitHub</h2>
      <p>Competent in version control and collaboration using GitHub, managing code repositories and contributing to projects effectively.</p>
    </div>
    <div className="skill-item transition-all duration-300 hover:bg-pink-800 border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4 text-white">
      <h2 className="text-xl font-bold">Deployment on Vercel</h2>
      <p>Experienced in deploying web applications on Vercel, leveraging its powerful platform for seamless and scalable deployments.</p>
    </div>
  </div>
</div>

        {/* Skills */}
        <div className='flex flex-wrap space-x-3 sm:space-x-0 justify-center'>
          <div> 
            <a className='flex transition-all duration-300 hover:bg-pink-700 border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4 text-white'>
              HTML <FaHtml5 className='text-orange-800 ml-1 text-xl' />
            </a>   
          </div>
          <div> 
            <a className='transition-all duration-300 hover:bg-pink-700 flex border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-6 py-2 w-full sm:w-fit rounded-md mr-4 text-white'>
              CSS <FaCss3Alt className='text-indigo-900 ml-1 text-xl' />
            </a>   
          </div>
       
          <div> 
            <a className='transition-all duration-300 hover:bg-pink-700 flex border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4 text-white'>
              TypeScript <SiTypescript className='text-blue-600 ml-1 text-xl' />
            </a>   
          </div>
          
          <div> 
            <a className='transition-all duration-300 hover:bg-pink-700 flex border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4 text-white'>
              Next.js <SiNextdotjs className='text-purple-800 ml-1 text-xl' />
            </a>   
          </div>
          <div> 
            <a className='transition-all duration-300 hover:bg-pink-700 flex border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4 text-white'>
              GitHub <FiGithub className='text-neutral-800 ml-1 text-xl' />
            </a>   
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Skills;