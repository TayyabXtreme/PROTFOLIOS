import React from 'react'

const TiltText = ({tiltRef}) => {
  return (
    <div id='tiltDiv' ref={tiltRef} className='mt-40 ml-10 font-extrabold'>

    <h1 className='text-[3.4vw] leading-[4vw] uppercase font-[anzo2]'>I am Dark <span className='text-black text-[4vw] leading-[4vw] uppercase font-[anzo2]'>Dark Mode</span>™</h1>
    <h1 className='uppercase leading-[7vw] text-[8.5vw] font-[anzo1]'>Designer</h1>
    <h1 className='text-[4vw] leading-[4vw] uppercase font-[anzo5]'>To Hire</h1>



    </div>
  )
}

export default TiltText