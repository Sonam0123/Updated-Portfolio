import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";
const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  }
  window.addEventListener('scroll', changeColor);

    return <div className={color ? "header header-bg" : "header"}>
        <Link to='/'>
            <h1>Sonam Tsering</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/project'>Project</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className="burger">
            {click ? (
                <FaTimes onClick={handleClick} size={22} style={{color: "#fff"}}/>
             ):(
                <FaBars onClick={handleClick} size={22} style={{color: "#fff"}}/>
            )}
        </div>
    </div>;
};

export default Navbar;
