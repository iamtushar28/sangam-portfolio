import React from 'react'
import Image from 'next/image'
import MyImage from '@/public/image.png'
import Gradient_button from './Gradient_button'
import { FaArrowRightLong } from "react-icons/fa6"; //arrow
import { GiStarShuriken } from "react-icons/gi";
import { BsStars } from "react-icons/bs"; //star icon
import { GoNorthStar } from "react-icons/go"; //star icon 2

const Mobile_hero = () => {
    return (
        <section className='md:hidden w-full h-fit py-8 flex gap-24 flex-col justify-center items-center'>

            {/* hero text */}
            <div>

                {/* title text */}
                <div className='text-4xl text-white text-center'>This is your <br />
                    developer <br />
                    <span className='text-blue-600 font-semibold'>Sangam Shedage</span>
                </div>

                <div className='flex mt-5 gap-4 justify-center items-center'>
                    {/* discuss project button */}
                    <Gradient_button title={'discuss for project'} />

                    <button className='capitalize text-white flex gap-2 items-center cursor-pointer'>
                        View portfolio
                        <FaArrowRightLong />
                    </button>
                </div>

            </div>

            <div className='h-64 w-full bg-gradient-to-tr from-[#17171a42] to-[#17171A] relative flex justify-center items-center'>

                {/* hero image */}
                <Image
                    src={MyImage}
                    alt='MyImage'
                    height={300}
                    width={300}
                    className='absolute bottom-0'
                />

                {/* star icon */}
                <BsStars className='text-4xl text-[#194BFD] absolute -top-16 right-12 animate-pulse' />
                <GoNorthStar className='text-4xl text-[#AD13FB] absolute top-10 left-6' />

                {/* animated circle text */}
                <div className="absolute h-20 w-20 right-4 bottom-4 z-10">
                    <div className="h-20 w-20 rounded-full border border-[#194BFD] absolute right-0 bottom-0 delay-75 flex justify-center items-center">
                        <GiStarShuriken className="text-xl text-white z-10" />

                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                />
                            </defs>
                            <text fill="white" fontSize="11" fontFamily="Arial" textAnchor="middle">
                                <textPath href="#circlePath" startOffset="50%">
                                    WEB DEVELOPER • WEB DEVELOPER •
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Mobile_hero