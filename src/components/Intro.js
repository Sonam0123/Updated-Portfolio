import React from "react";
import './Intro.css';
import intro from '../assets/view.jpeg';
import { Link } from "react-router-dom";
const Intro = () => {
  return( 
  <div className="intro">
    <div className="mask">
        <img className='intro-img' src={intro} alt="IntroductionImage" />
    </div>
    <div className="intro-text">
        <p>Welcome to my Portfolio</p>
        <h1>Software Engineer</h1>
        <div>
            <Link to='/project' className="btn">Projects</Link>
            <Link to='/contact' className="btn btn-light">Contact</Link>
        </div>
    </div>
  </div>
)};

export default Intro;
