//import React from 'react';
import Button from "./Button";
import Price from "./Price";



function HeroLabel({ className }) {
  return (
    <div className={className}>
      Buy All Products(4)
      <Price number={"1,481"} />
      <Button  />
    </div>
  )
}

export default HeroLabel;
