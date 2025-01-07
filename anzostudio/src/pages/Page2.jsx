import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page2 = () => {

    gsap.registerPlugin(ScrollTrigger)
    

    useGSAP(function(){
        gsap.from(".rotateText",{
            transform:'rotateX(80deg)',
            duration:1,
            opacity:0,
            stagger:1,
            scrub:2,
            scrollTrigger:{
                trigger :'.rotateText',
                // markers:true ,
                start:'top 90%',
                end:'top -270%',
                


            }
        })
    })

  return (
    <div id='section2' className='bg-gray-50 text-black  text-center p-32'>
        <h3 className='text-gray-500 text-xl font-[anzo4]'>©  anzo.studio 2024 | designed and developed</h3>
        <div 
        
        className='mt-40 rotateText '>
            <h1 className='text-[40vw] text-black  font-[anzo3] uppercase leading-[30vw]'>IMPACTFUL</h1>
        </div>
        <div className='rotateText '>
            <h1 className=' text-[40vw] text-black  font-[anzo3] uppercase leading-[30vw]'>DESIGN</h1>
        </div>
        <div className='rotateText '>
            <h1 className='text-[40vw] text-black  font-[anzo3] uppercase leading-[30vw]'>IS THE</h1>
        </div>
        <div className='rotateText '>
            <h1 className='text-[40vw] text-black  font-[anzo3] uppercase leading-[30vw]'>DESIGN</h1>
        </div>
        <div className='rotateText '>
            <h1 className='text-[40vw] text-black  font-[anzo3] uppercase leading-[30vw]'>THAT</h1>
        </div>

        <div className='rotateText '>
            <h1 className='text-[40vw] text-black  font-[anzo3] uppercase leading-[30vw]'>Works</h1>
        </div>
    


    <div className='flex items-center justify-center scale-75'>
    <svg className='w-[70vw]' preserveAspectRatio="xMidYMid meet" data-bbox="4 0 2028.339 83" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2037 91" height="91" width="2037" data-type="ugc" role="img" aria-label="Tesla, Figma, Wix Studio, Google+, BeHance monochrome Logo Design by Anzo Studio ">
    <g>
        <g filter="url(#b3e3b32c-99fe-4d7b-a6f9-ff5000655d82_comp-lmyox36t2)">
            <path fill="#060606" d="M535.527 30.573h-15.619V0h15.619c8.429 0 15.285 6.856 15.285 15.285s-6.856 15.288-15.285 15.288Zm-10.611-5.008h10.611c5.668 0 10.277-4.612 10.277-10.277 0-5.664-4.612-10.277-10.277-10.277h-10.611v20.555Zm0 5.008h-15.615c-8.429 0-15.285-6.856-15.285-15.285S500.872 0 509.301 0h15.618v30.573h-.003ZM509.301 5.008c-5.668 0-10.277 4.612-10.277 10.277 0 5.664 4.609 10.28 10.277 10.28h10.611V5.009h-10.611Zm15.615 51.127h-15.615c-8.429 0-15.285-6.856-15.285-15.285 0-8.428 6.856-15.285 15.285-15.285h15.618v30.57h-.003Zm-15.615-25.562c-5.668 0-10.277 4.613-10.277 10.277 0 5.665 4.612 10.278 10.277 10.278h10.611V30.573h-10.611Zm.082 51.128c-8.473 0-15.37-6.856-15.37-15.285s6.856-15.285 15.285-15.285h15.618V66.25c0 8.52-6.968 15.452-15.533 15.452Zm-.082-25.566a10.289 10.289 0 0 0-10.277 10.277c0 5.668 4.646 10.278 10.362 10.278 5.804 0 10.529-4.684 10.529-10.444v-10.11h-10.614Zm26.226 0h-.334c-8.428 0-15.285-6.856-15.285-15.285 0-8.428 6.857-15.285 15.285-15.285h.334c8.429 0 15.285 6.857 15.285 15.285 0 8.43-6.856 15.285-15.285 15.285Zm-.33-25.562c-5.668 0-10.278 4.613-10.278 10.277 0 5.665 4.613 10.278 10.278 10.278h.333c5.668 0 10.278-4.613 10.278-10.278 0-5.664-4.616-10.277-10.281-10.277h-.33Z"></path>
        </g>
        <g filter="url(#2e56b794-19a3-494a-9caf-005465178713_comp-lmyox36t2)">
            <path fill="#060606" d="M1765.86 14c2.49 0 4.79.193 6.89.762 2.1.382 3.82 1.144 5.35 2.097 1.53.953 2.68 2.288 3.45 4.005.76 1.714 1.14 3.812 1.14 6.1 0 2.666-.57 4.956-1.91 6.671-1.15 1.714-3.06 3.239-5.35 4.383 3.25.953 5.73 2.666 7.26 4.956 1.53 2.287 2.49 5.146 2.49 8.387 0 2.666-.57 4.956-1.53 6.862-.96 1.906-2.49 3.621-4.21 4.765-1.72 1.146-3.82 2.099-6.12 2.669-2.29.57-4.59.953-6.88.953h-25.63V14h25.05Zm-1.53 21.349c2.11 0 3.83-.572 5.17-1.525 1.34-.953 1.91-2.669 1.91-4.765 0-1.144-.19-2.288-.57-3.05-.39-.763-.96-1.335-1.72-1.906-.77-.382-1.53-.763-2.49-.954-.96-.19-1.91-.19-3.06-.19h-11.09v12.39h11.85Zm.58 22.493c1.15 0 2.29-.191 3.25-.38.96-.192 1.91-.574 2.68-1.145.76-.572 1.34-1.144 1.91-2.097.38-.953.76-2.099.76-3.431 0-2.669-.76-4.575-2.29-5.911-1.53-1.144-3.63-1.714-6.12-1.714h-12.62v14.678h12.43Zm36.91-.191c1.53 1.525 3.82 2.287 6.88 2.287 2.11 0 4.02-.572 5.55-1.525 1.53-1.145 2.49-2.287 2.87-3.433h9.37c-1.53 4.575-3.82 7.818-6.88 9.912-3.06 1.907-6.7 3.052-11.1 3.052-3.06 0-5.73-.574-8.22-1.527s-4.4-2.285-6.12-4.191c-1.72-1.716-3.06-3.813-3.83-6.293-.95-2.478-1.33-5.144-1.33-8.196 0-2.86.38-5.526 1.33-8.006.96-2.478 2.3-4.573 4.02-6.479 1.72-1.715 3.83-3.24 6.12-4.193 2.49-.954 4.97-1.525 8.03-1.525 3.25 0 6.12.572 8.61 1.906 2.49 1.334 4.4 2.86 5.93 5.146 1.53 2.097 2.68 4.573 3.44 7.244.38 2.668.57 5.337.38 8.387h-27.73c0 3.05 1.15 5.909 2.68 7.434Zm12.05-20.015c-1.34-1.334-3.44-2.097-5.93-2.097-1.72 0-3.06.38-4.21.954-1.15.571-1.91 1.332-2.68 2.096-.76.765-1.14 1.716-1.33 2.669-.2.953-.39 1.714-.39 2.478h17.22c-.39-2.86-1.34-4.765-2.68-6.1ZM1841.79 14v19.824h.19c1.34-2.287 3.06-3.812 5.16-4.765 2.11-.954 4.02-1.525 6.12-1.525 2.87 0 5.17.38 6.89 1.143 1.72.763 3.25 1.907 4.21 3.24.95 1.335 1.72 3.05 2.1 4.957.38 1.906.57 4.005.57 6.48V66.8h-10.51V45.26c0-3.24-.58-5.527-1.53-7.052-.96-1.525-2.68-2.287-5.17-2.287-2.87 0-4.97.953-6.12 2.48-1.34 1.713-1.91 4.572-1.91 8.385V66.8h-10.52V14h10.52Zm32.89 20.205c1.15-1.715 2.49-2.859 4.21-4.005 1.72-.953 3.64-1.713 5.74-2.096 2.1-.382 4.2-.572 6.31-.572 1.91 0 3.83.19 5.93.381 1.91.19 3.83.76 5.35 1.525 1.73.76 2.87 1.906 4.02 3.24.96 1.337 1.53 3.243 1.53 5.53v20.015c0 1.715.19 3.43.38 4.958.2 1.525.77 2.859 1.34 3.62h-10.71c-.38-.382-.57-1.144-.76-1.714-.19-.574-.19-1.335-.19-1.906-1.73 1.713-3.64 2.859-5.93 3.62-2.3.762-4.59.953-6.89.953-1.91 0-3.44-.191-5.16-.761-1.53-.381-2.87-1.146-4.21-2.099-1.15-.953-2.1-2.097-2.87-3.62-.57-1.526-.95-3.051-.95-5.148 0-2.099.38-4.005 1.14-5.337a12.542 12.542 0 0 1 2.87-3.431c1.15-.76 2.68-1.525 4.21-1.906 1.53-.38 3.06-.761 4.78-.954l4.59-.571a102.2 102.2 0 0 0 4.02-.572c1.14-.381 2.1-.763 2.87-1.335.76-.571.95-1.334.95-2.478 0-1.143-.19-2.096-.57-2.668a5.83 5.83 0 0 0-1.53-1.525c-.58-.381-1.34-.572-2.11-.76-.76-.193-1.72-.193-2.67-.193-2.11 0-3.64.381-4.78 1.334-1.15.953-1.92 2.478-2.11 4.384h-10.52c0-2.287.77-4.384 1.72-5.909Zm20.85 14.868c-.57.19-1.34.381-2.11.572-.76.192-1.53.192-2.48.381-.76.19-1.72.19-2.49.381l-2.29.572c-.77.19-1.53.572-1.92.953-.57.382-.95.953-1.33 1.525-.58.763-.58 1.525-.58 2.478 0 .953.2 1.716.58 2.288.38.572.76 1.145 1.34 1.525.57.38 1.34.573 2.1.762.77.189 1.53.19 2.48.19 2.11 0 3.64-.379 4.79-.952 1.15-.76 1.91-1.525 2.48-2.478.58-.953.96-1.907.96-2.86.19-.953.19-1.713.19-2.287V48.12c-.57.381-1.15.765-1.72.953Zm28.12-20.586v5.337h.19c1.33-2.287 3.06-3.812 5.16-4.765 2.1-.954 4.4-1.525 6.5-1.525 2.87 0 5.16.38 6.89 1.143 1.91.763 3.25 1.907 4.21 3.24.95 1.335 1.71 3.05 2.29 4.957.38 1.906.57 4.005.57 6.48V66.8h-10.51V45.26c0-3.24-.58-5.527-1.54-7.052-.95-1.525-2.67-2.478-5.35-2.478-2.87 0-4.98 1.144-6.31 2.86-1.34 1.715-1.91 4.574-1.91 8.386v20.015h-10.52V28.487h10.33Zm49.33 6.862c-1.72 0-3.06.381-4.2 1.146-1.15.76-2.11 1.713-2.87 3.05-.77 1.143-1.15 2.477-1.53 4.002-.38 1.527-.38 2.86-.38 4.386 0 1.333.19 2.86.38 4.192.38 1.527.76 2.669 1.53 3.812.76 1.146 1.53 2.099 2.68 2.86 1.14.762 2.48 1.145 4.2 1.145 2.49 0 4.4-.762 5.93-2.099 1.34-1.332 2.3-3.238 2.49-5.718h10.14c-.77 5.147-2.68 8.959-5.94 11.63-3.24 2.666-7.45 4.002-12.62 4.002-2.87 0-5.54-.572-7.84-1.525-2.49-.953-4.4-2.287-6.12-4.003-1.72-1.715-3.06-3.812-4.02-6.1-.95-2.477-1.33-4.957-1.33-7.816 0-3.05.38-5.719 1.33-8.197.96-2.478 2.11-4.765 3.83-6.671 1.72-1.907 3.82-3.24 6.12-4.384a22.507 22.507 0 0 1 8.22-1.525c2.3 0 4.4.38 6.5.953 2.11.572 4.02 1.525 5.55 2.666 1.72 1.146 3.06 2.669 4.02 4.575.95 1.716 1.53 4.003 1.72 6.481h-10.33c-.38-4.575-2.86-6.862-7.46-6.862Zm-175.94-17.727h21.42v5.146h-21.42v-5.146Zm210.18 40.029c1.53 1.525 4.02 2.287 6.88 2.287 2.11 0 4.02-.572 5.55-1.525 1.53-1.145 2.49-2.287 2.87-3.433h9.18c-1.53 4.575-3.82 7.818-6.89 9.912-3.06 1.907-6.69 3.052-11.09 3.052-3.06 0-5.74-.574-8.22-1.527a15.23 15.23 0 0 1-6.12-4.191c-1.72-1.716-3.06-3.813-3.83-6.293-.95-2.478-1.34-5.144-1.34-8.196 0-2.86.39-5.526 1.34-8.006a20.54 20.54 0 0 1 4.02-6.479c1.72-1.715 3.82-3.24 6.12-4.193 2.49-.954 5.16-1.525 8.03-1.525 3.25 0 6.12.572 8.42 1.906 2.48 1.334 4.39 2.86 5.92 5.146 1.53 2.097 2.68 4.573 3.45 7.244.76 2.666.95 5.526.76 8.578h-27.73c0 2.859 1.15 5.718 2.68 7.243Zm12.24-20.015c-1.34-1.334-3.45-2.097-5.93-2.097-1.72 0-3.06.38-4.21.954-1.15.571-2.1 1.332-2.67 2.096-.58.765-1.15 1.716-1.34 2.669-.19.953-.38 1.714-.38 2.478h17.21c-.58-2.86-1.53-4.765-2.68-6.1Z"></path>
        </g>
        <g filter="url(#5b65b79f-a8c3-4cbd-8f79-4523e3ad9925_comp-lmyox36t2)">
            <path fill="#060606" d="M1356.3 29.328h-29.67v8.694h21.03c-1.05 12.288-11.33 17.505-21.03 17.505-12.38 0-23.24-9.738-23.24-23.3 0-13.216 10.28-23.417 23.24-23.417 9.93 0 15.89 6.26 15.89 6.26l6.19-6.376S1340.77 0 1326.4 0c-18.34.116-32.59 15.534-32.59 32.11 0 16.345 13.32 32.227 33.06 32.227 17.28 0 30.01-11.824 30.01-29.213 0-3.71-.58-5.796-.58-5.796Zm24.29-6.26c-12.14 0-20.9 9.39-20.9 20.519 0 11.128 8.41 20.75 21.02 20.75 11.33 0 20.67-8.695 20.67-20.519.12-13.794-10.74-20.75-20.79-20.75Zm.12 8.115c5.96 0 11.68 4.753 11.68 12.52 0 7.534-5.61 12.52-11.68 12.52-6.66 0-11.91-5.217-11.91-12.52 0-7.188 5.25-12.52 11.91-12.52Zm45.32-8.115c-12.15 0-20.91 9.39-20.91 20.519 0 11.128 8.41 20.75 21.03 20.75 11.33 0 20.67-8.695 20.67-20.519.12-13.794-10.75-20.75-20.79-20.75Zm.12 8.115c5.95 0 11.68 4.753 11.68 12.52 0 7.534-5.61 12.52-11.68 12.52-6.66 0-11.92-5.217-11.92-12.52.12-7.188 5.26-12.52 11.92-12.52Zm44.5-8.115c-11.22 0-19.98 9.738-19.98 20.634 0 12.404 10.17 20.635 19.74 20.635 5.96 0 9.11-2.319 11.45-4.985v4.057c0 7.071-4.32 11.36-10.98 11.36-6.31 0-9.58-4.636-10.63-7.303l-7.94 3.362C1455.11 76.74 1460.84 83 1471 83c11.09 0 19.62-6.955 19.62-21.562V24.344h-8.76v3.477c-2.69-2.898-6.31-4.753-11.21-4.753Zm.81 8.115c5.49 0 11.1 4.637 11.1 12.52 0 8.114-5.61 12.52-11.21 12.52-5.96 0-11.45-4.754-11.45-12.405-.12-7.998 5.72-12.635 11.56-12.635Zm57.82-8.23c-10.51 0-19.39 8.346-19.39 20.634 0 12.983 9.81 20.75 20.44 20.75 8.76 0 14.25-4.753 17.4-9.042l-7.24-4.753c-1.87 2.898-5.02 5.68-10.16 5.68-5.84 0-8.52-3.13-10.16-6.26l27.92-11.476-1.41-3.362c-2.8-6.607-9.11-12.172-17.4-12.172Zm.35 7.998c3.86 0 6.54 1.97 7.71 4.405l-18.57 7.767c-.82-6.028 4.9-12.172 10.86-12.172Zm-32.94 32.11h9.11V2.318h-9.11v60.743Zm89.12-30.603h-11.21V21.33h-9.11v11.128h-11.21V41.5h11.21v11.129h9.11V41.5h11.21v-9.042Z"></path>
        </g>
        <g filter="url(#5627dd36-a779-48af-8b69-2a6a7f33fdf2_comp-lmyox36t2)">
            <path fill="#060606" d="M290.21 36.329V62.73h8.448V45.152h30.745V62.73h8.442V36.375l-47.635-.046Zm7.506-8.54h32.483c4.512-.9 7.867-4.89 8.813-8.75h-50.107c.936 3.861 4.341 7.85 8.811 8.75Zm-33.091 34.958c4.26-1.81 6.551-4.94 7.429-8.603h-37.889l.024-35.084-8.494.024v43.663h38.93ZM162.536 27.67h29.999c4.522-1.317 8.32-4.77 9.246-8.598h-47.655v25.803h39.004v9.055l-30.594.024c-4.795 1.34-8.86 4.566-10.889 8.828l2.479-.045h47.384v-26.44h-38.974V27.67Zm-74.058.084h32.472c4.518-.903 7.875-4.89 8.817-8.754H79.661c.936 3.864 4.343 7.851 8.817 8.754Zm0 17.256h32.472c4.518-.893 7.875-4.883 8.817-8.75H79.661c.936 3.868 4.343 7.857 8.817 8.75Zm0 17.733h32.472c4.518-.9 7.875-4.89 8.817-8.752H79.661c.936 3.863 4.343 7.851 8.817 8.752ZM4 19.105c.976 3.816 4.273 7.716 8.795 8.693h13.669l.697.276v34.57h8.535v-34.57l.776-.276h13.68c4.574-1.18 7.8-4.877 8.758-8.693v-.084H4v.084Z"></path>
        </g>
        <g clipPath="url(#96a8edfe-3cce-4a8a-8fa1-014070af92c2_comp-lmyox36t2)">
            <g filter="url(#aef381e0-a01b-4767-81f9-2c2e04143cb9_comp-lmyox36t2)">
                <mask height="45" width="113" y="19" x="803" maskUnits="userSpaceOnUse"  id="6fdfdaea-c66e-4c33-992f-dbf7b68cfcfc_comp-lmyox36t2" fill="none">
                    <path fill="#ffffff" d="M915.657 19.798H803.585v43.39h112.072v-43.39Z"></path>
                </mask>
                <g mask="url(#6fdfdaea-c66e-4c33-992f-dbf7b68cfcfc_comp-lmyox36t2)">
                    <path fill="#060606" d="M915.658 19.798h-6.19c-1.718 0-3.323.85-4.287 2.272l-8.279 12.213a.556.556 0 0 1-.919 0l-8.279-12.213a5.177 5.177 0 0 0-4.287-2.272h-6.191l14.748 21.756-14.667 21.634h6.191c1.717 0 3.323-.85 4.287-2.273l8.198-12.091a.556.556 0 0 1 .919 0l8.197 12.091a5.177 5.177 0 0 0 4.287 2.273h6.191L900.91 41.553l14.748-21.755Z"></path>
                    <path fill="#060606" d="M864.483 24.236v38.952h2.959a4.437 4.437 0 0 0 4.438-4.439V19.798h-2.958a4.438 4.438 0 0 0-4.439 4.438Z"></path>
                    <path fill="#060606" d="M859.062 19.798h-2.633a6.207 6.207 0 0 0-6.053 4.83l-5.89 25.894-5.156-24.17c-.953-4.468-5.537-7.48-10.227-6.185-2.988.825-5.203 3.35-5.849 6.38l-5.103 23.943-5.88-25.86a6.21 6.21 0 0 0-6.054-4.832h-2.632l9.868 43.388h3.739a7.19 7.19 0 0 0 7.032-5.69l6.308-29.603a.803.803 0 0 1 .782-.633c.374 0 .704.266.782.633l6.313 29.605a7.189 7.189 0 0 0 7.032 5.688h3.752l9.869-43.388Z"></path>
                </g>
            </g>
            <g filter="url(#d2e92518-4505-4e46-9870-da9ee420c72a_comp-lmyox36t2)">
                <path fill="#060606" d="m925.873 56.092 3.337-3.161c1.835 2.108 3.942 3.766 6.323 4.976 2.42 1.21 5.152 1.815 8.196 1.815 2.264 0 4.273-.351 6.03-1.054 1.756-.702 3.141-1.678 4.156-2.927 1.015-1.288 1.522-2.79 1.522-4.508 0-2.185-.917-3.883-2.751-5.093-1.834-1.249-4.957-2.205-9.367-2.868-3.825-.586-6.888-1.347-9.191-2.284-2.264-.975-3.903-2.185-4.918-3.63-1.014-1.443-1.522-3.18-1.522-5.21 0-2.38.664-4.468 1.991-6.264 1.327-1.834 3.161-3.258 5.503-4.273 2.341-1.015 5.034-1.522 8.079-1.522 3.473 0 6.537.683 9.191 2.049 2.693 1.366 5.073 3.259 7.142 5.678l-3.279 3.103c-1.678-2.068-3.532-3.707-5.561-4.917-1.99-1.21-4.488-1.815-7.493-1.815-3.201 0-5.816.722-7.845 2.166-2.03 1.405-3.044 3.317-3.044 5.737 0 1.873.858 3.337 2.576 4.39 1.717 1.054 4.663 1.894 8.839 2.518 3.981.585 7.162 1.405 9.543 2.459 2.381 1.014 4.098 2.322 5.152 3.922 1.092 1.6 1.639 3.532 1.639 5.796 0 2.498-.703 4.703-2.108 6.615-1.366 1.873-3.278 3.357-5.737 4.45-2.459 1.053-5.308 1.58-8.547 1.58-3.747 0-7.103-.683-10.069-2.05-2.927-1.365-5.523-3.258-7.787-5.678Z"></path>
            </g>
            <g filter="url(#36dc8be9-e14d-4468-8f10-5b935f0ded2f_comp-lmyox36t2)">
                <path fill="#060606" d="M982.174 62.883h-4.508V25.065h-13.933v-4.04h32.374v4.04h-13.933v37.818Z"></path>
            </g>
            <g filter="url(#840e4ba9-59ed-45fc-94cd-fb8597521bb6_comp-lmyox36t2)">
                <path fill="#060606" d="M1034.34 21.025v25.35c0 5.502-1.49 9.795-4.45 12.879-2.97 3.044-7.07 4.566-12.3 4.566-5.19 0-9.29-1.522-12.29-4.566-2.97-3.084-4.45-7.377-4.45-12.88V21.025h4.51v25.35c0 4.331 1.07 7.649 3.22 9.951 2.14 2.264 5.15 3.396 9.01 3.396 3.91 0 6.93-1.132 9.08-3.396 2.14-2.302 3.22-5.62 3.22-9.952V21.025h4.45Z"></path>
            </g>
            <g filter="url(#0dda612c-ac15-4c9a-8185-69a6202644b9_comp-lmyox36t2)">
                <path fill="#060606" d="M1041.93 62.883V21.025h13.52c4.29 0 8.06.898 11.3 2.693 3.28 1.796 5.83 4.274 7.67 7.435 1.83 3.123 2.75 6.713 2.75 10.772s-.92 7.669-2.75 10.83c-1.84 3.162-4.39 5.64-7.67 7.435-3.24 1.796-7.01 2.693-11.3 2.693h-13.52Zm4.51-4.098h9.01c3.47 0 6.48-.702 9.02-2.107 2.57-1.405 4.54-3.376 5.91-5.913 1.4-2.537 2.11-5.484 2.11-8.84s-.71-6.283-2.11-8.781c-1.37-2.537-3.34-4.508-5.91-5.913-2.54-1.405-5.55-2.108-9.02-2.108h-9.01v33.662Z"></path>
            </g>
            <g filter="url(#28141f90-b296-4f7d-a99b-03f5e9d14de7_comp-lmyox36t2)">
                <path fill="#060606" d="M1088.07 62.883h-4.51V21.025h4.51v41.858Z"></path>
            </g>
            <g filter="url(#e9ada13d-57dd-4d3b-81dd-2261c43d0bb0_comp-lmyox36t2)">
                <path fill="#060606" d="M1116.23 63.82c-3.12 0-6.01-.547-8.66-1.64a21.697 21.697 0 0 1-6.91-4.566c-1.95-1.99-3.47-4.312-4.56-6.966-1.06-2.693-1.59-5.6-1.59-8.723 0-3.122.53-6.01 1.59-8.664 1.09-2.654 2.61-4.957 4.56-6.908a21.224 21.224 0 0 1 6.91-4.625c2.65-1.093 5.54-1.64 8.66-1.64 3.13 0 5.99.547 8.61 1.64 2.65 1.093 4.96 2.634 6.91 4.625 1.99 1.951 3.51 4.254 4.56 6.908 1.1 2.654 1.64 5.542 1.64 8.664s-.54 6.03-1.64 8.723a20.312 20.312 0 0 1-4.56 6.966c-1.95 1.952-4.26 3.474-6.91 4.567-2.62 1.093-5.48 1.639-8.61 1.639Zm0-4.098c3.36 0 6.31-.761 8.84-2.283 2.58-1.522 4.59-3.63 6.03-6.323 1.45-2.693 2.17-5.756 2.17-9.19 0-3.435-.72-6.48-2.17-9.134-1.44-2.692-3.45-4.8-6.03-6.322-2.53-1.522-5.48-2.283-8.84-2.283-3.31 0-6.26.76-8.84 2.283-2.57 1.522-4.58 3.63-6.03 6.322-1.44 2.654-2.16 5.699-2.16 9.133 0 3.435.72 6.498 2.16 9.191 1.45 2.693 3.46 4.8 6.03 6.323 2.58 1.522 5.53 2.283 8.84 2.283Z"></path>
            </g>
            <g filter="url(#051c9507-4be0-407a-81f9-24a005c00fd5_comp-lmyox36t2)">
                <path fill="#060606" d="M705.812 5.987c0-.545.441-.987.987-.987h70.082c.545 0 .987.442.987.987V76.07a.987.987 0 0 1-.987.987h-70.082a.987.987 0 0 1-.987-.987V5.987Zm36.028 9.826c-13.929 0-25.22 11.292-25.22 25.22 0 13.929 11.291 25.22 25.22 25.22 13.928 0 25.22-11.291 25.22-25.22 0-13.928-11.292-25.22-25.22-25.22Z" clipRule="evenodd" fillRule="evenodd"></path>
            </g>
        </g>
        <defs fill="none">
            <filter colorinterpolationfilter="sRGB" filterUnits="userSpaceOnUse" height="89.701" width="64.799" y="0" x="490.013" id="b3e3b32c-99fe-4d7b-a6f9-ff5000655d82_comp-lmyox36t2">
                <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite operator="out" in2="hardAlpha"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend result="effect1_dropShadow_206_3" in2="BackgroundImageFix"></feBlend>
                <feBlend result="shape" in2="effect1_dropShadow_206_3" in="SourceGraphic"></feBlend>
            </filter>
            <filter colorinterpolationfilter="sRGB" filterUnits="userSpaceOnUse" height="61.944" width="299.528" y="14" x="1736.81" id="2e56b794-19a3-494a-9caf-005465178713_comp-lmyox36t2">
                <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite operator="out" in2="hardAlpha"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend result="effect1_dropShadow_206_3" in2="BackgroundImageFix"></feBlend>
                <feBlend result="shape" in2="effect1_dropShadow_206_3" in="SourceGraphic"></feBlend>
            </filter>
            <filter colorinterpolationfilter="sRGB" filterUnits="userSpaceOnUse" height="91" width="300" y="0" x="1289.81" id="5b65b79f-a8c3-4cbd-8f79-4523e3ad9925_comp-lmyox36t2">
                <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite operator="out" in2="hardAlpha"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend result="effect1_dropShadow_206_3" in2="BackgroundImageFix"></feBlend>
                <feBlend result="shape" in2="effect1_dropShadow_206_3" in="SourceGraphic"></feBlend>
            </filter>
            <filter colorinterpolationfilter="sRGB" filterUnits="userSpaceOnUse" height="51.782" width="343.013" y="19" x="0" id="5627dd36-a779-48af-8b69-2a6a7f33fdf2_comp-lmyox36t2">
                <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite operator="out" in2="hardAlpha"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend result="effect1_dropShadow_206_3" in2="BackgroundImageFix"></feBlend>
                <feBlend result="shape" in2="effect1_dropShadow_206_3" in="SourceGraphic"></feBlend>
            </filter>
            <filter colorinterpolationfilter="sRGB" filterUnits="userSpaceOnUse" height="51.39" width="120.072" y="19.798" x="799.585" id="aef381e0-a01b-4767-81f9-2c2e04143cb9_comp-lmyox36t2">
                <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite operator="out" in2="hardAlpha"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend result="effect1_dropShadow_206_3" in2="BackgroundImageFix"></feBlend>
                <feBlend result="shape" in2="effect1_dropShadow_206_3" in="SourceGraphic"></feBlend>
            </filter>
            <filter colorinterpolationfilter="sRGB" filterUnits="userSpaceOnUse" height="51.731" width="42.248" y="20.089" x="921.873" id="d2e92518-4505-4e46-9870-da9ee420c72a_comp-lmyox36t2">
                <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite operator="out" in2="hardAlpha"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend result="effect1_dropShadow_206_3" in2="BackgroundImageFix"></feBlend>
                <feBlend result="shape" in2="effect1_dropShadow_206_3" in="SourceGraphic"></feBlend>
            </filter>
            <filter colorinterpolationfilter="sRGB" filterUnits="userSpaceOnUse" height="49.858" width="40.374" y="21.025" x="959.733" id="36dc8be9-e14d-4468-8f10-5b935f0ded2f_comp-lmyox36t2">
                <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite operator="out" in2="hardAlpha"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend result="effect1_dropShadow_206_3" in2="BackgroundImageFix"></feBlend>
                <feBlend result="shape" in2="effect1_dropShadow_206_3" in="SourceGraphic"></feBlend>
            </filter>
            <filter colorinterpolationfilter="sRGB" filterUnits="userSpaceOnUse" height="50.794" width="41.486" y="21.025" x="996.85" id="840e4ba9-59ed-45fc-94cd-fb8597521bb6_comp-lmyox36t2">
                <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite operator="out" in2="hardAlpha"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend result="effect1_dropShadow_206_3" in2="BackgroundImageFix"></feBlend>
                <feBlend result="shape" in2="effect1_dropShadow_206_3" in="SourceGraphic"></feBlend>
            </filter>
            <filter colorinterpolationfilter="sRGB" filterUnits="userSpaceOnUse" height="49.858" width="43.242" y="21.025" x="1037.93" id="0dda612c-ac15-4c9a-8185-69a6202644b9_comp-lmyox36t2">
                <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite operator="out" in2="hardAlpha"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend result="effect1_dropShadow_206_3" in2="BackgroundImageFix"></feBlend>
                <feBlend result="shape" in2="effect1_dropShadow_206_3" in="SourceGraphic"></feBlend>
            </filter>
            <filter colorinterpolationfilter="sRGB" filterUnits="userSpaceOnUse" height="49.858" width="12.508" y="21.025" x="1079.56" id="28141f90-b296-4f7d-a99b-03f5e9d14de7_comp-lmyox36t2">
                <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite operator="out" in2="hardAlpha"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend result="effect1_dropShadow_206_3" in2="BackgroundImageFix"></feBlend>
                <feBlend result="shape" in2="effect1_dropShadow_206_3" in="SourceGraphic"></feBlend>
            </filter>
            <filter colorinterpolationfilter="sRGB" filterUnits="userSpaceOnUse" height="51.731" width="51.44" y="20.089" x="1090.51" id="e9ada13d-57dd-4d3b-81dd-2261c43d0bb0_comp-lmyox36t2">
                <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite operator="out" in2="hardAlpha"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend result="effect1_dropShadow_206_3" in2="BackgroundImageFix"></feBlend>
                <feBlend result="shape" in2="effect1_dropShadow_206_3" in="SourceGraphic"></feBlend>
            </filter>
            <filter colorinterpolationfilter="sRGB" filterUnits="userSpaceOnUse" height="80.056" width="80.057" y="5" x="701.812" id="051c9507-4be0-407a-81f9-24a005c00fd5_comp-lmyox36t2">
                <feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood>
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" in="SourceAlpha"></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite operator="out" in2="hardAlpha"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend result="effect1_dropShadow_206_3" in2="BackgroundImageFix"></feBlend>
                <feBlend result="shape" in2="effect1_dropShadow_206_3" in="SourceGraphic"></feBlend>
            </filter>
            <clipPath id="96a8edfe-3cce-4a8a-8fa1-014070af92c2_comp-lmyox36t2">
                <path transform="translate(705.812 5)" fill="#ffffff" d="M433 0v73H0V0h433z"></path>
            </clipPath>
        </defs>
    </g>
</svg>
    </div>


    <div className='h-[1px] w-1/3 relative left-1/2 -translate-x-1/2 bg-black'>

    </div>



    </div>
  )
}

export default Page2