import React from 'react'

const Page5 = () => {
  return (
    <div className='h-screen p-4 bg-gray-50'>
        <div className='relative h-full w-full bg-black overflow-hidden rounded-[100px]'>
            <video autoPlay='true' loop muted='true' className='h-full w-full object-cover ' src="/src/assets/moon.mp4"></video>
            <h1  className=' will-change-contents text-white text-[38vw] absolute left-20 font-[anzo3] uppercase  -bottom-40'>ABOUT</h1>
        
        </div>
    </div>
  )
}

export default Page5