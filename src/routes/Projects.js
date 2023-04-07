import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import HeroImg2 from '../Components/HeroImg2';
import Work from '../Components/Work';

const Projects = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Projects
