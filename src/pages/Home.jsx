import React from 'react'
import Intro from '../components/Intro'
import About from '../components/About'
import Education from '../components/Education'
import WorkExp from '../components/WorkExp'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  
  return (
    <>
      <div className="container-fluid g-0 mt-1 pt-1 mx-auto home-page" >
        <Intro />
        <About />
        <WorkExp />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Home