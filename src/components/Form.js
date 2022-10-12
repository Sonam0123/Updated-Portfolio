import './Form.css';
import React from "react";

const Form = () => {
  return <div className='form'>
    <form>  
        <label>YOUR NAME</label>
        <input type="text" name="name" placeholder='Name'></input>
        <label>EMAIL</label>
        <input type="text" name="name" placeholder='Email'></input>
        <label>MESSAGE</label>
        <textarea rows="6" placeholder='Type your message here'></textarea>
        <button className='btn' type="submit">SEND</button>
    </form>
  </div>;
};

export default Form;
