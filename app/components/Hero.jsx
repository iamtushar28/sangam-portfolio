import React from 'react'
import Image from 'next/image'
import MyImage from '@/public/image.png'
import Gradient_button from './Gradient_button'
import { FaArrowRightLong } from "react-icons/fa6"; //arrow
import { GiStarShuriken } from "react-icons/gi";
import { BsStars } from "react-icons/bs"; //star icon
import { GoNorthStar } from "react-icons/go"; //star icon 2

const Hero = () => {
    return (
        <section id='home' className='mt-32 hidden w-full h-screen md:flex justify-center items-center'>

            {/* background strip */}
            <div className='w-[78%] h-64 bg-gradient-to-tr from-[#17171a42] to-[#17171A] relative'>

                {/* hero text */}
                <div className='ml-16 relative z-10'>

                    {/* title text */}
                    <h2 className='-mt-20 text-5xl text-white'>This is your <br />
                        developer <br />
                        <span className='text-blue-600 font-semibold'>Sangam Shedage</span>
                    </h2>

                    {/* about paragraph */}
                    <p className='w-7/12 mt-4 mb-6 text-zinc-600 text-sm'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                    <div className='flex gap-6 items-center'>
                        {/* discuss project button */}
                        <Gradient_button title={'discuss for project'} />

                        <button className='capitalize text-white flex gap-4 items-center cursor-pointer'>
                            View portfolio
                            <FaArrowRightLong />
                        </button>
                    </div>

                </div>

                {/* rectangle element */}
                <div className='w-full h-64 border border-[#17171A] absolute -right-8 -bottom-8'></div>

                {/* star icon */}
                <BsStars className='text-4xl text-[#194BFD] absolute -top-32 right-12 animate-pulse' />
                <GoNorthStar className='spin-slow text-4xl text-[#AD13FB] absolute bottom-16 right-97' />

                {/* animated circle text */}
                <div className="spin-slow absolute h-28 w-28 right-10 bottom-20 z-10">
                    <div className="h-28 w-28 rounded-full border border-[#194BFD] absolute right-0 bottom-0 delay-75 flex justify-center items-center">
                        <GiStarShuriken className="text-3xl text-white z-10" />

                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                />
                            </defs>
                            <text fill="white" fontSize="11" fontFamily="Arial" textAnchor="middle">
                                <textPath href="#circlePath" startOffset="50%">
                                    WEB DEVELOPER • GAME DEVELOPER •
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>


                {/* hero image */}
                <Image src={MyImage} alt='MyImage' height={360} width={360} className='absolute right-10 bottom-0' />

            </div>

        </section>
    )
}

export default Hero