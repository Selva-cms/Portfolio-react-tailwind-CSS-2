import React from 'react'

const about = () => {
  return (
    
    <div className='max-w-4xl mx-auto'>
        <div className='about md:flex h-screen'>
            <div className='about-left md:w-1/3 '>
                <div className='bg-slate-100 md:mt-20 mx-2 h-96'>
                    <img src='./heroImg.png' alt='my-img' className='w-full h-full'>
                    </img>
                </div>
            </div>
            <div className='about-right md:w-2/3'>
                <div className='md:mt-20 mx-3 h-auto tracking-wide leading-relaxed'>
                    <h3 className='font-semibold text-xl text-center md:text-left py-3'>About Me</h3>
                    <p>This is the about section. This is the about section This is the about section This is the about section This is the about sectionThis is the about sectionThis is the about sectionThis is the about sectionThis is the about sectionThis is the about sectionThis is the about sectionThis is the about section</p>

                    <a href='#' className='block mx-auto w-20 bg-slate-800 text-slate-300 py-2 text-center rounded hover:bg-slate-900 hover:text-slate-200 my-5'>Profile</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about