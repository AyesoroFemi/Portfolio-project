import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ReactGA from 'react-ga';

function App() {

  ReactGA.initialize("G-MSNESE5KJG");

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      {/* <Home /> */}
    </BrowserRouter>
  )
}

export default App
