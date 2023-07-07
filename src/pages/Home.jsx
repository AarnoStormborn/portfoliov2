import React from 'react'
import Intro from '../components/Intro'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  
  return (
    <>
      <div className="container-fluid g-0 mt-1 pt-1 mx-auto home-page" >
        <Intro />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Home