import StackList from '@components/Projects/StackList';
import projects from '@data/projects';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

const SingleProject = ({ project }) => {
    const router = useRouter();
    const { projectItem } = router.query;
    const currentProjectInView = project.filter(
        (myProject) => myProject.name === projectItem
    );
    const stack = currentProjectInView?.[0]?.stack

    return (
        <section className="py-20 font-sans">
            <div className="container px-4 mx-auto mb-16">
                <div className="max-w-xl lg:max-w-2xl mx-auto text-center">
                    <h2 className="mb-6 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading text-mantis-700">
                        {currentProjectInView?.[0].name || ""}
                    </h2>

                </div>
            </div>
            <div className=" mb-12 lg:mb-16 flex justify-center align-center  ">

                <div className=" rounded-xl p-0 ">
                    <Image
                        className="rounded-xl"
                        src={currentProjectInView?.[0].img || ""}
                        alt={currentProjectInView?.[0].name || ""}
                        layout="intrinsic"
                        width={1000}
                        height={700}

                    />
                </div>
            </div>
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto">
                    <p className="mb-6 lg:mb-8 text-lg leading-loose lg:text-xl lg:leading-relaxed ">
                        {currentProjectInView?.[0]?.desc || ""}
                    </p>

                    {currentProjectInView?.[0]?.stack ? <StackList stack={stack} /> : ""}
                </div>
                <div className='flex items-center justify-center'> <a href={currentProjectInView?.[0]?.site} target="blank"><button className='border border-2 rounded-lg border-mantis-100 text-mantis-100 p-4 hover:bg-mantis-100 hover:text-white hover:transition-colors hover:duration-500 hover:ease ease duration-500'>View Project</button></a></div>


            </div>

        </section>
    )
}

export async function getStaticProps() {
    return {
        props: {
            project: projects,
        },
        revalidate: 10,
    };
}

export async function getStaticPaths() {
    const paths = projects.map((post) => ({
        params: { projectItem: post.name },
    }));

    return { paths, fallback: "blocking" };
}

export default SingleProject