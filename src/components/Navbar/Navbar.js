/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import React, {useState} from 'react'





export default function Nav() {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    return ( 
        <nav className='navbar'>
            
            <div className="navContainer"> 
             <div className="mobileMenuIcon"
            onClick={handleClick}
            >
               <i className={`fas fa-bars ${click ? 'fas fa-times' : ''}`}></i>
              

            </div>
        
            <ul className={click ? 'active' : 'navMenu'}>
            <li onClick={handleClick} className='li'>
                <Link  className="link" href="/#home" >Home</Link>
            </li>
            <li onClick={handleClick} className='li'>
                <Link  className="link" href="/#about" >About</Link>
            </li>
            <li onClick={handleClick} className='li'>
                <Link  className="link" href="/#experience" >Experience</Link>
            </li>
            <li onClick={handleClick} className='li'>
                <Link  className="link" href="/#projects" >Projects</Link>
            </li>
            <li onClick={handleClick} className='li'>
                <Link className="link" href="/#contact" >Contact</Link>
            </li>
           <div className="socials">
          
          
            <Link  href="https://github.com/fellipxd" passHref aria-label="GitHub" target="_blank" rel="noreferrer"><i className="fab fa-github social-icons"></i></Link>
                   <Link   href="mailto:philipokedi@gmail.com" passHref aria-label="Linkedin" target="_blank" rel="noreferrer"><i className="far fa-envelope social-icons"></i></Link>
                   <Link href="https://www.linkedin.com/in/philip-okedi/" passHref aria-label="Linkedin" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in social-icons"></i></Link>
                 
                  
           </div>
            
        </ul>
       
            </div>
        
      
    </nav>
    )
}
