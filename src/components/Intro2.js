import React from "react";
import './intro2.css';


const Intro2 = ({heading, text}) => {
  return <div>
    <div className="hero-img">
        <div className="heading">
            <h1>{text}</h1>
        </div>
    </div>
  </div>;
};

export default Intro2;
