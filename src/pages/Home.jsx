import React, {useEffect} from 'react'
// import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Card from "../components/Card"
import Experience from "../components/Experience"
// import Navbar from "../components/Navbar"
// import Project from "../components/Project"
import Video from "../components/Video"
import Footer from "../components/Footer"

function Home () {
    useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div className="font-['Open Sans'] bg-[#1f2028] dark:bg-white">
        {/* <Nav /> */}
        {/* <Navbar/> */}
        <Hero />
        <Experience />
      {/* <Project /> */}
      <Card />
      <Video/>
      <Footer />
    </div>
  )
}

export default Home