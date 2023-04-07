import React from 'react'
import AboutContent from '../Components/AboutContent';
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import NavBar from '../Components/NavBar';

const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="ABOUT" text="I'M a Fullstack Web Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  );
}

export default About
