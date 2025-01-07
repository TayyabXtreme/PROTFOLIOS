import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <div className='fixed  w-full flex items-center justify-end z-10 py-14 px-16'>
        <button className='bg-black  hover:transition-colors   px-12 hover:bg-gray-500 py-3 rounded-full border-4 border-white text-md font-[anzo4]'>Hire me</button>
        <i className="ri-more-2-line text-3xl ml-3 text-gray-500"></i>
    </div>
  )
}

export default Header