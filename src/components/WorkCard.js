import './WorkCard.css';
import { NavLink } from "react-router-dom";
import React from "react";

const WorkCard = (props) => {
  return <div className='project-card'>
  <img src={props.imgsrc} alt="cryptoProject" />
  <h2 className='project-title'>{props.title}</h2>
  <div className='pro-details'>
      <p>{props.text}</p>
      <div className='pro-btns'>
          <a href={props.view} className="btn" target="_blank" rel="noopener noreferrer" >VIEW</a>
          <a href='https://github.com/Sonam0123/Crypto-Viewer' className="btn" target="_blank" rel="noopener noreferrer" >SOURCE</a>
      </div>
  </div>
</div>
};

export default WorkCard;
