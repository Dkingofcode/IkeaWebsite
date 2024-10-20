//import React from 'react'
import  "../styles/pingButton.css";
import PropTypes from "prop-types";


const PingButton = ({ positionleft, positionright, positiontop, positionbottom, className }) => {
  return (
    <div className={className} style={{  left: positionleft, right: positionright, top: positiontop, bottom: positionbottom}}>
      <p>+</p>
    </div>
  )
}

PingButton.propTypes = {
  positionleft: PropTypes.string,
  positionright: PropTypes.string,
  positiontop: PropTypes.string,
  positionbottom: PropTypes.string,
  className: PropTypes.string,
}

export default PingButton;
