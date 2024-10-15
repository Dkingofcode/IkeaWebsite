//import React from 'react'
import  "../styles/pingButton.css";

const PingButton = ({ positionleft, positionright, positiontop, positionbottom }) => {
  return (
    <div style={{ position: "absolute", left: positionleft, right: positionright, top: positiontop, bottom: positionbottom}} className="ping">
      <p>+</p>
    </div>
  )
}

export default PingButton;
