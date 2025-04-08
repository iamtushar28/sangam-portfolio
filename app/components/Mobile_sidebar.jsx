'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeMobileSidebar } from '../redux-store/sidebarSlice'; //import closeMobileSidebar from redux-store
import { RxCross1 } from "react-icons/rx";
import { FaMobile } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Mobile_sidebar = () => {
    // getting status of sidebar - close or open
    const isMobileSidebarOpen = useSelector((state) => state.sidebar.isMobileSidebarOpen);
    const dispatch = useDispatch();

    return (
        <div className={`h-screen w-full py-6 bg-zinc-950 absolute top-0 left-0 text-white ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300`}>

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
                <button className='text-xl capitalize text-white'>
                    home
                </button>

                {/* service */}
                <button className='text-xl capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                    service
                </button>

                {/* projects */}
                <button className='text-xl capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                    projects
                </button>

                {/* about */}
                <button className='text-xl capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                    about
                </button>

                {/* contact */}
                <button className='text-xl capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                    contact
                </button>

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

            </div>

        </div>
    )
}

export default Mobile_sidebar