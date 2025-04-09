import React from 'react'
import { BsDashLg } from "react-icons/bs"; //dash
import { IoLogoReact } from "react-icons/io5"; //react
import { FaJava } from "react-icons/fa6"; //java
import { RiGamepadLine } from "react-icons/ri"; //game

const Specialities = () => {
    return (
        <section className='-mt-20 text-white w-full h-fit py-10 flex flex-col gap-12 justify-center items-center'>

            {/* title */}
            <div className='flex gap-4 flex-col justify-center items-center'>
                <p className='uppercase text-zinc-600 font-semibold'>Specialities</p>
                <h2 className='text-2xl capitalize'>My <span className='text-[#194BFD] font-extrabold'>Specialities</span></h2>
                <p className='text-sm text-zinc-600 text-center md:w-6/12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ab corporis adipisci ducimus beatae vel, veniam voluptate ea neque velit, quia laborum reiciendis illum sunt aliquam, ratione labore! Cumque, magnam?</p>
            </div>

            {/* Specialities cards */}
            <div className='flex flex-wrap justify-center gap-8'>

                {/* card 1 */}
                <div className='w-72 h-fit p-6 flex flex-col items-center bg-gradient-to-tr from-[#17171a42] to-[#17171A]'>

                    {/* icon */}
                    <div className='text-4xl'>
                        <IoLogoReact className='text-blue-500' />
                    </div>

                    {/* title */}
                    <h2 className='capitalize font-semibold'>Frontend Developement</h2>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg />
                        <BsDashLg />
                    </div>
                    <p className='text-sm text-zinc-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatum possimus quis, modi odio pariatur tempore sunt! Doloribus, quia dicta.</p>

                </div>

                {/* card 2 */}
                <div className='w-72 h-fit p-6 flex flex-col items-center bg-gradient-to-tr from-[#17171a42] to-[#17171A]'>

                    {/* icon */}
                    <div className='text-4xl'>
                        <FaJava className='text-orange-400' />
                    </div>

                    {/* title */}
                    <h2 className='capitalize font-semibold'>Backend Developement</h2>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg />
                        <BsDashLg />
                    </div>
                    <p className='text-sm text-zinc-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatum possimus quis, modi odio pariatur tempore sunt! Doloribus, quia dicta.</p>

                </div>

                {/* card 3 */}
                <div className='w-72 h-fit p-6 flex flex-col items-center bg-gradient-to-tr from-[#17171a42] to-[#17171A]'>

                    {/* icon */}
                    <div className='text-4xl'>
                        <RiGamepadLine className='text-white' />
                    </div>

                    {/* title */}
                    <h2 className='capitalize font-semibold'>Game Developement</h2>
                    <div className='text-[#194BFD] text-3xl flex'>
                        <BsDashLg />
                        <BsDashLg />
                    </div>
                    <p className='text-sm text-zinc-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatum possimus quis, modi odio pariatur tempore sunt! Doloribus, quia dicta.</p>

                </div>
            </div>

        </section>
    )
}

export default Specialities