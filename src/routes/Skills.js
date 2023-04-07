import React from 'react'
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import NavBar from '../Components/NavBar';
import SkillSection from '../Components/SkillSection';

const Skills = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="Skills" text="About My Skills "/>
      <SkillSection/>
      <Footer />
    </div>
  );
}

export default Skills
