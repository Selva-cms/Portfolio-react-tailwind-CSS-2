import React from 'react'
import Nav from './pages/nav';
import Hero from './pages/hero';
import About from './pages/about';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Contact from './pages/contact'; 

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
