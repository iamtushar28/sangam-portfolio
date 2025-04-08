import React from 'react'
import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaInstagram, FaMobile } from "react-icons/fa";
import { CiMail, CiLocationOn } from "react-icons/ci";

const Social_links_navbar = () => {
    return (
        <nav className='flex justify-between items-center'>
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

            {/* conatct info - phone, email, adress */}
            <div className='flex items-center gap-6'>

                {/* phone */}
                <button className='hidden text-zinc-300 md:flex gap-1 items-center'>
                    <FaMobile />
                    <span className='text-sm'> +91 93223 12609</span>
                </button>

                {/* email */}
                <button className='text-zinc-300 hidden md:flex gap-1 items-center'>
                    <CiMail />
                    <span className='text-sm'>sangam@gmail.com</span>
                </button>

                {/* location */}
                <button className='text-zinc-300 flex gap-1 items-center'>
                    <CiLocationOn />
                    <span className='text-sm'>SATARA</span>
                </button>

            </div>
        </nav>
    )
}

export default Social_links_navbar