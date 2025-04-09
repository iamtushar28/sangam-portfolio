import React from 'react'
import Work_process_block from './Work_process_block'
import { FaArrowRightLong } from "react-icons/fa6"; //arrow


const About = () => {
    return (
        <section className='mt-6 text-white w-full h-fit py-10 flex flex-col gap-12 justify-center items-center'>

            {/* title */}
            <div className='flex gap-4 flex-col justify-center items-center'>
                <p className='uppercase text-zinc-600 font-semibold'>ABOUT ME</p>
                <h2 className='text-2xl capitalize'>My <span className='text-[#194BFD] font-extrabold'>WORK EXPERIENCE</span></h2>
                <p className='text-sm text-zinc-600 text-center md:w-6/12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ab corporis adipisci ducimus beatae vel, veniam voluptate ea neque velit, quia laborum reiciendis illum sunt aliquam, ratione labore! Cumque, magnam?</p>
            </div>

            {/* work process blocks */}
                <div className='mr-28 flex gap-36 relative'>
                    <Work_process_block title={'empathize'} />

                    {/* direction arrow */}
                    <div className='absolute -bottom-4 left-36 rotate-45 text-xl text-[#194BFD]'>
                        <FaArrowRightLong />
                    </div>

                    <Work_process_block title={'ideate'} />

                    {/* direction arrow */}
                    <div className='absolute -bottom-4 left-[19rem] -rotate-45 text-xl text-[#194BFD]'>
                        <FaArrowRightLong />
                    </div>

                    <Work_process_block title={'qualitative taste'} />

                    {/* direction arrow */}
                    <div className='absolute -bottom-4 left-[28rem] rotate-45 text-xl text-[#194BFD]'>
                        <FaArrowRightLong />
                    </div>

                </div>
                <div className='ml-48 -mt-12 flex gap-36 relative'>

                    {/* direction arrow */}
                    <div className='z-20 absolute -top-4 right-[19rem] -rotate-45 text-xl text-[#194BFD]'>
                        <FaArrowRightLong />
                    </div>

                    <Work_process_block title={'define'} />

                    {/* direction arrow */}
                    <div className='z-20 absolute -top-4 right-36 rotate-45 text-xl text-[#194BFD]'>
                        <FaArrowRightLong />
                    </div>

                    <Work_process_block title={'prototype'} />
                    <Work_process_block title={'quantitative taste'} />
                </div>

        </section>
    )
}

export default About