import React from 'react'
import Footer from '../../Components/Footer'
import Services from '../../Components/Services'
import About from '../../Components/About'
import { FloatingNavbar } from '../../Components/FloatingNavbar'
import Hero from '../../Components/Hero'

const Home = () => {
  return (
    <div >
        <FloatingNavbar />
        <Hero />
        <About />
        <Services />
        <Footer />
    </div>
  )
}

export default Home
