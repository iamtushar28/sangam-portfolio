import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram, FaMobile } from "react-icons/fa";
import { CiMail, CiLocationOn } from "react-icons/ci";

const Footer = () => {
    return (
        <>
            <section id='contact' className='w-full h-fit px-3 md:px-0 pt-10 pb-4 md:pt-0 md:pb-0 gap-8 md:gap-0 md:p-16 flex flex-wrap md:justify-around items-center mb-4'>

                {/* logo */}
                <div>
                    <h2 className='uppercase text-xl font-extrabold bg-gradient-to-r from-white to-zinc-900 text-transparent bg-clip-text'>Sangam</h2>
                    <p className='text-sm text-zinc-500 w-72 mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sunt facere quae! Sit natus consequuntur officia.</p>

                    {/* social links - github, linkeding, insta */}
                    <div className='flex items-center gap-2 mt-3'>
                        {/* linkedin  */}
                        <button className='cursor-pointer h-8 w-8 text-white bg-[#55555521] rounded-full flex justify-center items-center'>
                            <FaLinkedinIn />
                        </button>

                        {/* github  */}
                        <button className='cursor-pointer h-8 w-8 text-white bg-[#55555521] rounded-full flex justify-center items-center'>
                            <FaGithub />
                        </button>

                        {/* instagram  */}
                        <button className='cursor-pointer h-8 w-8 text-white bg-[#55555521] rounded-full flex justify-center items-center'>
                            <FaInstagram />
                        </button>
                    </div>

                </div>

                {/* quick links */}
                <div>
                    {/* title */}
                    <h4 className='capitalize text-lg text-white font-semibold mb-4'>Quick Links</h4>
                    <ul>
                        <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Home</li>
                        <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Service</li>
                        <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Projects</li>
                        <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>About</li>
                        <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Contact</li>
                    </ul>
                </div>

                {/* important links */}
                <div>
                    {/* title */}
                    <h4 className='capitalize text-lg text-white font-semibold mb-4'>Important</h4>
                    <ul>
                        <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Blog</li>
                        <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Career</li>
                        <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Terms & Conditions</li>
                        <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Cookies Policy</li>
                        <li className='text-sm text-zinc-400 hover:underline hover:text-white cursor-pointer transition-all duration-200'>Social Works</li>
                    </ul>
                </div>

                {/* contact links */}
                <div>
                    {/* title */}
                    <h4 className='capitalize text-lg text-white font-semibold mb-4'>Contacts</h4>
                    {/* conatct info - phone, email, adress */}
                    <div className='flex flex-col items-start gap-4'>

                        {/* phone */}
                        <button className='text-zinc-300 flex gap-2 items-center'>
                            <FaMobile />
                            <span className='text-sm'> +91 93223 12609</span>
                        </button>

                        {/* email */}
                        <button className='text-zinc-300 flex gap-2 items-center'>
                            <CiMail />
                            <span className='text-sm'>sangam@gmail.com</span>
                        </button>

                        {/* location */}
                        <button className='text-zinc-300 flex gap-2 items-center'>
                            <CiLocationOn />
                            <span className='text-sm'>SATARA</span>
                        </button>

                    </div>
                </div>

            </section>
            <p className='text-zinc-400 text-sm text-center mb-4'>&copy; Copyright 2025 | all rights reserved.</p>
        </>
    )
}

export default Footer