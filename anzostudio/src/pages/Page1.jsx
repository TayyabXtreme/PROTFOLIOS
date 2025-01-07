import React, { useRef, useState } from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page1 = () => {
    const tiltRef = useRef(null)
    const [xVal, setxVal] = useState(0)
    const [yVal, setyVal] = useState(0)
    const onMouseMoving=(e)=>{
        setxVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/30)
        setyVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/7)
        
        
        
    }

    useGSAP(function(){
        gsap.to(tiltRef.current,{
            transform:`rotateX(${yVal}deg) rotateY(${xVal}deg)`,
            duration:3,
            ease:'power4.out'
        })
    },[xVal,yVal])

  return (
    <div  onMouseMove={(e)=>onMouseMoving(e)} className=' h-screen sm:p-2 md:p-4 lg:p-4 bg-gray-100'>
        <div id='page1-in' className='shadow-xl p-7 shadow-gray-700 h-full w-full rounded-[50px]  bg-cover bg-black bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2648,h_1252,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)]'>
            <img className='w-20 h-20 ml-10' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_140,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="" />
            
            
            <TiltText tiltRef={tiltRef} />



            <Page1Bottom/>
        
        </div>
    </div>
  )
}

export default Page1