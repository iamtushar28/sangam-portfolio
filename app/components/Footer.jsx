import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='w-full h-fit p-16 flex justify-center items-center border border-white mb-8'>

            {/* logo */}
            <div>
                <h2 className='uppercase text-xl font-semibold text-white'>Sangam</h2>
                <p className='text-sm text-zinc-500 w-72'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sunt facere quae! Sit natus consequuntur officia.</p>

                {/* social links - github, linkeding, insta */}
                <div className='flex items-center gap-2'>
                    {/* linkedin  */}
                    <button className='h-8 w-8 text-white bg-[#55555521] rounded-full flex justify-center items-center'>
                        <FaLinkedinIn />
                    </button>

                    {/* github  */}
                    <button className='h-8 w-8 text-white bg-[#55555521] rounded-full flex justify-center items-center'>
                        <FaGithub />
                    </button>

                    {/* instagram  */}
                    <button className='h-8 w-8 text-white bg-[#55555521] rounded-full flex justify-center items-center'>
                        <FaInstagram />
                    </button>
                </div>

            </div>

            {/* quick links */}
            <div>
                {/* title */}
                <h4 className='capitalize text-lg text-white font-semibold'>Quick Links</h4>
                <h6 className='capitalize text-white font-semibold'>Home</h6>
                <ul>
                    <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Service</li>
                    <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Projects</li>
                    <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>About</li>
                    <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Contact</li>
                </ul>
            </div>

            {/* important links */}
            <div>
                {/* title */}
                <h4 className='capitalize text-lg text-white font-semibold'>Important</h4>
                <h6 className='capitalize text-white font-semibold'>Home</h6>
                <ul>
                    <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Career</li>
                    <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Terms & Conditions</li>
                    <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Cookies Policy</li>
                    <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Social Works</li>
                </ul>
            </div>

        </section>
    )
}

export default Footer