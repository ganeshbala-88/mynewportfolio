
import About from './components/About'
import Contact from './components/Contact'

import EducationExperienceToggle from './components/EducationExperienceToggle'
import Effects from './components/Effects'

import Navbar from './components/Navbar'
import Projects from './components/Projects'

import Skills from './components/Skills'
function App() {
  

  return (
    <>
      <div>      <Effects/>
       
       <Navbar/>
       <About/>
       <Skills/>
       <Projects/>
      
       <EducationExperienceToggle/> 
       <Contact/>
      
      </div>
      
    </>
  )
}

export default App
