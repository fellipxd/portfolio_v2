/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function About() {
  return (
    <section id="about" className="  m-auto  py-24  lg:px-24   items-center justify-center   " >
      <h2 className="text-4xl">ABOUT ME</h2>
      <div className="flex flex-col lg:flex-row lg:mt-8" >
        <div className="lg:flex-1  lg:pr-4" >


          <p>
            I am a frontend web developer from Abuja, Nigeria. I love bringing
            designs to life. My love for programing was sparked after after my
            university years where I bagged a B.sc Economics. I was fortunate to
            come across frontend development and was amazed at how it all worked  and since then it's been no looking back for me.

          </p>
          <p>
            My goal is to build solutions to real life problems through
            innovation and thoughtful collaboration. I want to leverage the
            recent trend in digitization to build products that lead people into
            the future.
          </p>


          <a passHref href="https://drive.google.com/file/d/19DEprgpuyOp0Ct0gdy0Ig-z0SFUGeUHj/view?usp=sharing" target="blank" >
            <button className="mt-8 rounded-lg text-mantis-100 border border-2 py-2.5 px-5 border-mantis-100 hover:bg-mantis-100 hover:text-white  hover:transition-colors hover:duration-500 hover:ease ease duration-500">
              View Resume
            </button>
          </a>

          {/* <Link  href="	https://medium.com/@philipokedi">
           View my Blog
          </Link> */}


        </div>

        <div className=" relative h-60 w-60 lg:h-full lg:w-full  m-auto  lg:flex-1 hidden lg:flex lg:order-last items-center justify-center mt-8 lg:mt-0">
          <img className=" z-20 h-full w-full  rounded-3xl absolute lg:relative" src="/about.jpeg" alt="" />
          <div className="border z-10 border-4 h-full w-full absolute rounded-3xl top-6 left-6 "></div>
        </div>

      </div>
    </section>
  );
}
