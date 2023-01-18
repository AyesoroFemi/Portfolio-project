import React from 'react'
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Project from "../components/Project"
import Video from "../components/Video"
import Footer from "../components/Footer"

function Home () {
  return (
    <div>
        <Nav />
        <Hero />
        <Experience />
      <Project />
      <Video/>
      <Footer />
    </div>
  )
}

export default Home