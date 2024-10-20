//import React from 'react'

import "../styles/button.css";

const Button = ({ styles }) => {
  return (
    <div className="cartBtn" style={styles}>
      Add to cart
      <span>+</span>
    </div>
  )
}

export default Button;
