//import React from 'react'

import Chair from "../../ui/Chair";
import "./hero.modules.css";




const Hero = () => {
  return (
    <div className="main">
      
      <div>
       <Chair />
         
       <article>
         <p>STOCKHOLM (002.450.50)</p>
         <h1>Three-Seat Sofa</h1>
         <p>Highly durable full-grain leather which is soft and has a<br /> natural look and feel. <a>View more</a></p>
       
         <table>
         <th>74cm</th>
         <th>195cm</th>
         <th>86cm</th>
         </table>
       </article>
      </div>

      

    </div>
  )
}

export default Hero;
