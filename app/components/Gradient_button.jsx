import React from 'react'

const Gradient_button = ({title}) => {
  return (
    <button className='capitalize text-white px-3 py-2 font-semibold rounded-3xl bg-gradient-to-r from-[#194BFD] to-[#AD13FB] cursor-pointer'>
        {title}
    </button>
  )
}

export default Gradient_button