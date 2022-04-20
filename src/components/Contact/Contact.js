/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Contact = () => {
    return (
        <div className="flex items-center justify-center py-20 mt-10" id="contact">
            <div className=" w-11/12 lg:w-1/2 py-10 px-16 flex flex-col items-center justify-center  bg-mantis-150 rounded-xl shadow-xl">
                <div className="text-center  ">
                    <h2 className='text-4xl'>
                        Get in touch
                    </h2>
                    <p className="mt-4 text-lg">
                        I'm currently open to new opportunities. Have a project in mind or just want to say hi, my inbox is always open.
                    </p>

                    <ul className="my-4 flex justify-center items-center w-10/12 lg:w-1/2 mx-auto justify-around ">
                        <li className=''><a href="https://github.com/fellipxd" target="_blank" rel="noreferrer"><i className="fab fa-github text-3xl lg:text-4xl  hover:text-mantis-100"></i></a></li>

                        <li><a href="mailto:philipokedi@gmail.com" target="_blank" rel="noreferrer"><i className="far fa-envelope text-3xl lg:text-4xl hover:text-mantis-100"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/philip-okedi/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in text-3xl lg:text-4xl hover:text-mantis-100"></i></a></li>

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Contact