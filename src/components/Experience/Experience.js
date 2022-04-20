/* eslint-disable @next/next/no-img-element */
import React from 'react';
import "react-vertical-timeline-component/style.min.css";
import  {WorkIcon} from '../../../public/work.svg';
import experienceItem from '@data/expeirenceItem';
import { VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import Image from 'next/image';


export default function Experience() {
    let workIconStyles = { background: "#BCB4a1", display: "flex", alignItems:"center", justifyContent: "center" };
    return (
        <div className=" py-10 px-8" id="experience">
              <h2 className="text-4xl mb-8">Experience</h2>
      <VerticalTimeline>
        {experienceItem.map((element) => {
         

          return (
            <VerticalTimelineElement
            contentStyle={{ background: '#262655'  }}
            contentArrowStyle={{ borderRight: '7px solid  #262655' }}
              key={element.id}
              date={element.date}
              ClassName="date"
              iconStyle={ workIconStyles}
              icon={ <img className='h-1/2' src="/work.svg" alt="icon" /> }
            >
           
            <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {element.company}
              </h4>
              <p id="description">{element.description}</p>
        
             
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
        </div>
    )
}
