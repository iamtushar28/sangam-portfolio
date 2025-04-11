import React from 'react'
import Image from 'next/image'
import Project1 from '../../public/images/project.png'
const Projects = () => {
    return (
        <section className='mt-6 text-white w-full h-fit py-10 flex flex-col gap-12 justify-center items-center'>

            {/* title */}
            <div className='flex gap-4 flex-col justify-center items-center'>
                <p className='uppercase text-zinc-600 font-semibold'>PORTFOLIOS</p>
                <h2 className='text-2xl capitalize'>My <span className='text-[#194BFD] font-extrabold'>Completed Projects</span></h2>
                <p className='text-sm text-zinc-600 text-center px-1 md:w-6/12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ab corporis adipisci ducimus beatae vel, veniam voluptate ea neque velit, quia laborum reiciendis illum sunt aliquam, ratione labore! Cumque, magnam?</p>
            </div>

            {/* project images section */}


            <div className="overflow-hidden w-full h-fit">
                <div className="project1-scroll-left-infinite">
                    {/* Duplicate everything for seamless scroll */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-5 px-3">
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                            {/* image */}
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                            {/* image */}
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                            {/* image */}
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="overflow-hidden w-full h-fit">
                <div className="project2-scroll-left-infinite">
                    {/* Duplicate everything for seamless scroll */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-5 px-3">
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                            {/* image */}
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                            {/* image */}
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                            {/* image */}
                            <div className='h-[13rem] w-[22rem] p-4 bg-gradient-to-tr from-[#5f7ff2] to-[#cc7ff3] flex justify-center items-center rounded-lg'>

                                <Image src={Project1} alt="project image" className='rounded-lg' />

                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    )
}

export default Projects