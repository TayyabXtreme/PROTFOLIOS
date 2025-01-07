import React from 'react'

const Page3 = () => {
  return (
    <div className='relative h-screen bg-gray-50 flex items-center justify-center'>
        <img className='absolute z-20' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_892,h_513,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="" />
        <video loop muted autoPlay className='z-10 h-[65vh] w-[50vw] object-cover' src="/src/assets/anzovideo.mp4"
        
         ></video>

         <div className='h-0.5 w-3/5 z-0 top-[40%] bg-black absolute '></div>
         <div className='h-0.5 w-4/5 z-0 top-[58%] bg-black absolute '></div>
         <div className='h-0.5 w-full z-0 top-[78%] bg-black absolute '></div>
    </div>
  )
}

export default Page3