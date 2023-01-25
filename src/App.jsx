import {useState, useEffect} from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about/About'
import ReactGA from 'react-ga';
import Nav from './components/Nav'
import Project from './pages/project/Project';


function App() {

  const [darkMode, setDarkMode] = useState(false)

  ReactGA.initialize("G-MSNESE5KJG");

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className={ darkMode ? "dark" : "" }>
      <BrowserRouter>
      <Nav  mode={setDarkMode} dark={darkMode}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="project" element={<Project/>}/>
      </Routes>
      {/* <Home /> */}
    </BrowserRouter>
    </div>
  )
}

export default App
