'use client'
import React from 'react'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { closeMobileSidebar } from '../redux-store/sidebarSlice'; //import closeMobileSidebar from redux-store
import Gradient_button from './Gradient_button';
import { RxCross1 } from "react-icons/rx";
import { FaMobile } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Mobile_sidebar = () => {
    // getting status of sidebar - close or open
    const isMobileSidebarOpen = useSelector((state) => state.sidebar.isMobileSidebarOpen);
    const dispatch = useDispatch();

    return (
        <div className={`z-50 h-screen w-full py-6 bg-zinc-950 fixed bottom-0 top-0 left-0 text-white ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300`}>

            <div className='px-8 pb-6 flex justify-between items-center border-b border-zinc-600'>
                <h2 className='text-2xl capitalize text-white'>Menu</h2>

                {/* cancel button */}
                <button
                    onClick={() => dispatch(closeMobileSidebar())}
                    className='text-3xl text-white'>
                    <RxCross1 />
                </button>
            </div>

            {/* nav links */}
            <div className='py-12 px-8 flex flex-col gap-6 items-start'>

                {/* home */}
                <Link href={"#home"} className='text-lg capitalize text-white'>
                    home
                </Link>

                {/* service */}
                <Link href={"#service"} className='text-lg capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                    service
                </Link>

                {/* projects */}
                <Link href={"#project"} className='text-lg capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                    projects
                </Link>

                {/* about */}
                <Link href={"#about"} className='text-lg capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                    about
                </Link>

                {/* contact */}
                <Link href={"#contact"} className='text-lg capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                    contact
                </Link>

                {/* phone */}
                <button className='text-zinc-400 flex gap-1 items-center'>
                    <FaMobile />
                    <span className='text-lg'> +91 93223 12609</span>
                </button>

                {/* email */}
                <button className='text-zinc-400 flex gap-1 items-center'>
                    <CiMail />
                    <span className='text-lg'>sangam@gmail.com</span>
                </button>

                {/* download resume button */}
                <Gradient_button title={'download resume'} />

            </div>

        </div>
    )
}

export default Mobile_sidebar