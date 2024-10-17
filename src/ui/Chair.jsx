//import React from 'react'
import Sofa from "/sofa.png";
import "../styles/chair.css";
import PingButton from "./PingButton";

const Chair = () => {
  return (
    <div className="chair">
      <img className="sofaImg" src={Sofa}  alt="sofa image" />   
      <PingButton class={""} positionleft={"90px"} positionright={"0px"} positiontop={"60px"} positionbottom={"0px"}  /> 
       <div className="Bigcircle"></div>
       <div className="Smallcircle"></div>
    </div>
  )
};

export default Chair;
