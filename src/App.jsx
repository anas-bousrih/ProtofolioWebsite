import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/projects'
  
const App = () => {
  return (
    <div className='w-full bg-primary text-white'> 
    {/* navbar */}
    <Navbar /> 
    {/* hero */}
    <Hero />
    {/* about */}
    <About />
    {/* This Project (Also Mentioning the user experimental Dahboard.) */}
    {/* Projects with timeline (to show how I progressed with my software developemnt skills.) */}
    <Projects />
    <section className="min-h-screen"> </section>
    {/* Contact + Resume */}
    {/* Footer */}

    </div>
    )
}

export default App
