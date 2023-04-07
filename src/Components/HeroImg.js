import "./HeroimgStyle.css";
import React from "react";
import IntroImg from "../assets/Hero.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="Hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I'M A FREELANCER </p>
        <h1>MERN Stack Developer</h1>

        <Link to="/projects" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn-light">
          Contact
        </Link>
      </div>
     
    </div>
  );
};

export default HeroImg;
