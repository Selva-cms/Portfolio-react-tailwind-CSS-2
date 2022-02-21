import React from 'react'

const projects = () => {
  return (
    <div className='bg-indigo-600 w-full md:h-screen h-auto'>
        <div className='max-w-4xl mx-auto'>
            <div className='py-20 tracking-wide mx-2'>
                <h3 className='pb-5 font-semibold text-xl text-center md:text-left text-white'>My Projects</h3>

                <div className='gap-2 md:flex'>
                    <div className='md:w-1/4 w-full h-auto py-5 bg-slate-500 rounded mb-2 md:mb-0'>
                        <img src="./heroImg.png" alt='projects-1' className='w-full h-full'></img>                       
                    </div>
                    <div className='md:w-1/4 w-full h-auto py-5 bg-slate-500 rounded mb-2 md:mb-0'>
                        <img src="./heroImg.png" alt='projects-1' className='w-full h-full'></img>
                    </div>
                    <div className='md:w-1/4 w-full h-auto py-5 bg-slate-500 rounded mb-2 md:mb-0'>
                        <img src="./heroImg.png" alt='projects-1' className='w-full h-full'></img>
                    </div>
                    <div className='md:w-1/4 w-full h-auto py-5 bg-slate-500 rounded mb-2 md:mb-0'>
                        <img src="./heroImg.png" alt='projects-1' className='w-full h-full'></img>
                    </div>
                </div>

                <a href='#' className='block mx-auto w-20 bg-slate-800 text-slate-300 py-2 text-center rounded hover:bg-slate-900 hover:text-slate-200 mt-5'>More</a>

                <h4 className='pt-5 font-semibold text-lg text-center md:text-left text-white'>Description</h4>

                <div className='text-white tracking-wide leading-relaxed max-w-3xl mx-auto my-3'>
                    <p>This is our description of projects.This is our description of projects This is our description of projects This is our description of projectsThis is our description of projectsThis is our description of projectsThis is our description of projectsThis is our description of projectsThis is our description of projectsThis is our description of projectsThis is our description of projectsThis is our description of projectsThis is our description of projectsThis is our description of projects</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default projects