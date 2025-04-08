'use client'
import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMobileSidebar } from '../redux-store/sidebarSlice'
import Social_links_navbar from './Social_links_navbar';
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {

    const dispatch = useDispatch();

    return (
        <nav className='w-full h-fit px-3 py-4 md:px-12 md:py-6 bg-zinc-950 flex flex-col gap-4'>
            <Social_links_navbar />

            <div className='flex justify-between items-center'>

                {/* logo */}
                <h2 className='uppercase text-xl font-semibold text-white'>Sangam</h2>

                {/* nav links */}
                <div className='hidden md:flex gap-8 items-center'>

                    {/* home */}
                    <button className='text-lg capitalize text-white'>
                        home
                    </button>

                    {/* service */}
                    <button className='text-lg capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                        service
                    </button>

                    {/* projects */}
                    <button className='text-lg capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                        projects
                    </button>

                    {/* about */}
                    <button className='text-lg capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                        about
                    </button>

                    {/* contact */}
                    <button className='text-lg capitalize text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer'>
                        contact
                    </button>

                </div>

                {/* download resume button */}
                <button className='hidden md:block capitalize text-white px-3 py-2 font-semibold rounded-3xl bg-gradient-to-r from-[#194BFD] to-[#AD13FB] cursor-pointer'>
                    download resume
                </button>

                {/* toogle menu button */}
                <button
                    onClick={() => dispatch(toggleMobileSidebar())}
                    className='text-2xl text-white md:hidden'>
                    <IoIosMenu />
                </button>

            </div>
        </nav>
    )
}

export default Navbar