//import React from 'react'
import "../styles/price.css";
import Proptypes from "prop-types";


const Price = ({ number }) => {
  return (
    <div className="price">
     ${number}    
    </div>
  )
}

Price.propTypes = {
    number: Proptypes.string
}

export default Price;
