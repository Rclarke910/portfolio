import React from 'react'
import About from './componet/About'
import Contact from './componet/Contact'
import Home from './componet/Home'
import Navbar from './componet/Navbar'
import Skills from './componet/Skills'
import Work from './componet/Work'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App