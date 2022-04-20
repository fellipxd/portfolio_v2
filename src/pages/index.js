import About from '@components/About/About'
import Contact from '@components/Contact/Contact'
import Container from '@components/Container/Container'
import Experience from '@components/Experience/Experience'
import Nav from '@components/Navbar/Navbar'
import Projects from '@components/Projects/Projects'
import Side from '@components/SideLinks/SideLinks'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero/Hero'


export default function Home() {
  return (
    <Container>
      <div className=' min-h-screen  md:p-16'>
        <Nav />
        <Side />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Container>
  )
}
