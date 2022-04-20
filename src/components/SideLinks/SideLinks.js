/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Image from 'next/image'





export default function Side() {
    return (

        <div className='hidden md:block lg:block'>
            <div className='w-11 fixed bottom-0 left-6 z-10'>
                <ul >
                    <li className='p-2 text-2xl text-mantis-100 '><a href="https://github.com/fellipxd" target="_blank" rel="noreferrer"><i className="fab fa-github  hover:scale-125 hover:transition-transform hover:duration-500 hover:ease ease duration-500 "></i></a></li>
                    <li className='p-2 text-2xl  text-mantis-100'><a href="mailto:philipokedi@gmail.com" target="_blank" rel="noreferrer"><i className="far fa-envelope  hover:scale-125 hover:transition-transform hover:duration-500 hover:ease  ease duration-500"></i></a></li>
                    <li className='p-2 text-2xl  text-mantis-100'><a  href="https://www.linkedin.com/in/philip-okedi/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in  hover:scale-125 hover:transition-transform hover:duration-500 hover:ease  ease duration-500"></i></a></li>
                    <img className="relative left-2 w-4 h-32 " src="/social-media-arrow.png" alt='line' />
                </ul>

                <div className='fixed bottom-0 right-8 z-10 ml-52 ' >
                    <div className='relative flex flex-col items-center'>
                        <a className='email__StyledLinkWrapper' href="mailto:philipokedi@gmail.com">philipokedi@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
