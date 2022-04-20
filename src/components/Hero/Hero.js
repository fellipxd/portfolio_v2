/* eslint-disable react/no-unescaped-entities */

import Container from "@components/Container/Container";




export default function Hero() {
    return (

        <div id="#home" className=" mt-12 h-max  m-auto flex flex-col  items-center justify-center lg:py-24  lg:px-24" >
     
                <h1 className="  text-4xl lg:text-7xl  leading-snug flex flex-col font-bold">
                    <span className="text-2xl  inline-block ">Hello, I'm</span>
                    <span className="inline-block "> Philip Okedi.</span>
                    <span className="inline-block ">I enjoy building things for the web.</span>
                </h1>
                <div className="-mt-8  " >
                    <p>I am a frontend web dev with a passion for building beautifully clean and interactive sites.
                    </p>
                </div>
            
        </div>


    )
}
