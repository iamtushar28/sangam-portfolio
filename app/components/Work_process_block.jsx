import React from 'react'

const Work_process_block = ({title}) => {
    return (
        <div className='h-40 w-40 bg-gradient-to-tl from-[#000000] to-[#17171A] border border-zinc-400 border-dashed rounded-xl flex justify-center items-center rotate-45 relative'>

            <div className='h-32 w-32 border border-zinc-400 rounded-xl flex justify-center items-center'>

                <h2 className='capitalize text-lg text-white font-semibold -rotate-45 text-center'>{title}</h2>

            </div>

        </div>
    )
}

export default Work_process_block