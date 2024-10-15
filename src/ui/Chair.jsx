//import React from 'react'
import Sofa from "/sofa.png";
import "../styles/chair.css";
import PingButton from "./PingButton";

const Chair = () => {
  return (
    <div className="main">
      <img className="sofaImg" src={Sofa}  alt="sofa image" />   
      <PingButton /> 
       <div className="Bigcircle"></div>
       <div className="Smallcircle"></div>
    </div>
  )
};

export default Chair;
