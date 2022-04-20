/* eslint-disable @next/next/no-img-element */
import React from 'react'
import projects from '@data/projects.js'
import Link from 'next/link'
import { truncateText } from '@util/truncateText.util'


export default function ProjectItem() {


    return (
        <div className="grid gap-6 row-gap-5 lg:grid-cols-2"  >
            {projects.map((project, index) =>
                <div key={project?.name || idx} className="lg:h-half mx-auto md:h-half h-quart w-11/12  rounded-lg shadow-xl bg-mantis-150 ">
                    {/* <Link href={`/${project.name}`} passHref rel="noreferrer" > */}
                    <div className='rounded-lg h-view relative  '>
                        <div className='absolute rounded-t-lg h-full w-full bg-black bg-opacity-60 z-10 order-first transform  hover:bg-transparent transition duration-700 ease-out' ></div>

                        <img
                            className="w-full h-full rounded-t-lg  "
                            src={project?.img || ""}
                            alt={project?.alt || ""}
                        />
                    </div>
                    {/* </Link> */}
                    <div className=' p-4  lg:p-8  relative h-2/5 '>
                        <Link href={`/${project.name}`} passHref rel="noreferrer" >
                            <h5 className="-mb-8 text-xl  font-bold leading-none sm:text-2xl text-mantis-500 hover:text-mantis-700  cursor-pointer">
                                {project?.name || ""}
                            </h5>
                        </Link>

                        <p className='text-sm lg:text-base md:text-base mb-4'>
                            {truncateText(project?.desc)}
                        </p>


                        <div className='absolute bottom-0 flex justify-around items-center mx-auto w-11/12 text-mantis-100'>



                            <Link href={`/${project.name}`} passHref rel="noreferrer" > View Details</Link>



                            <a passHref href={project.site} target="_blank" rel="noreferrer" >
                                {/* <i className="fas fa-external-link-alt"></i> */}
                                View Site
                            </a>


                        </div>






                    </div>
                </div>
            )}



        </div>


    )
}





