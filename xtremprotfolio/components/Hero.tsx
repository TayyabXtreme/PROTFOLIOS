import React from 'react'
import { Spotlight } from './ui/SpotLight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-26'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:top-20 h-screen' fill='white' />
            <Spotlight className='top-10 left-4  h-[80vh] w-[50]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50]' fill='blue' />
            <Spotlight className='-top-40 -left-10 md:-left-32 md:top-20 h-screen' fill='white' />
        </div>

    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-center absolutet top-0 left-0">
     
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">

    </div>

    <div className="flex justify-center relative my-20 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                Dynamic Web Magix With Next.js
                
            </h2>
            <TextGenerateEffect
            className='text-center text-[40px] md:text-[5xl] lg:text-[6xl] '
            words='Transforming Complex Ideas Into Simple Solutions'/>

            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                Hi, I&apos;m Tayyab, 
                a Full Stack Developer with a passion for building web applications.
            </p>
            <a href="#about">
            <MagicButton
            title='Show my Work'
            icon={<FaLocationArrow/>}
            position='right'
            otherClasses='gap-2'

            />
            </a>

        </div>
    </div>
      
    </div>



    </div>
  )
}

export default Hero