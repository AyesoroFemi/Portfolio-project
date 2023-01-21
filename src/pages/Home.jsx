import React from 'react'
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Project from "../components/Project"
import Video from "../components/Video"
import Footer from "../components/Footer"

function Home () {
  return (
    <div className="font-['Open Sans'] bg-[#1f2028] ">
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