import React from "react";
import './Footer.css';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';

const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color : "#fff", marginRight: "2rem"}}/>
                <div className="home">
                    <p>New York, New York</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color : "#fff", marginRight: "2rem"}} />
                646-705-7479</h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color : "#fff", marginRight: "2rem"}} />
                tseringsonam34@hotmail.com </h4>
            </div>
        </div>
        <div className="right">
            <h4 className="about">About Me</h4>
            <p>
                My name is Sonam Tsering. I am a software engineer based in New York City. I am passionate about building web applications and learning new technologies.I am currently looking for a full-time position as a software engineer.
            </p>
            <div className="social">
                <FaLinkedin size={20} style={{color : "#fff", marginRight: "1rem"}} />
                <FaGithub size={20} style={{color : "#fff", marginRight: "1rem"}} />
                <FaFacebook size={20} style={{color : "#fff", marginRight: "1rem"}} />
            </div>
        </div>
    </div>
  </div>;
};

export default Footer;
