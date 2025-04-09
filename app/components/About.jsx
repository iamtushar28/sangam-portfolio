import React from 'react'

const About = () => {
    return (
        <section className='mt-6 text-white w-full h-fit py-10 flex flex-col gap-12 justify-center items-center'>

            {/* title */}
            <div className='flex gap-4 flex-col justify-center items-center'>
                <p className='uppercase text-zinc-600 font-semibold'>ABOUT ME</p>
                <h2 className='text-2xl capitalize'>My <span className='text-[#194BFD] font-extrabold'>WORK EXPERIENCE</span></h2>
                <p className='text-sm text-zinc-600 text-center md:w-6/12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ab corporis adipisci ducimus beatae vel, veniam voluptate ea neque velit, quia laborum reiciendis illum sunt aliquam, ratione labore! Cumque, magnam?</p>
            </div>

        </section>
    )
}

export default About