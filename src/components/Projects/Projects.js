/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ProjectItem from '@components/Projects/ProjectItem'


export default function Projects() {
  return (
    <section id="projects">
      <div >

        <div >
          <h2 className="text-4xl mb-12">
            Things I've Worked On
          </h2>
          <ProjectItem />

        </div>
      </div>
    </section>
  )
}
