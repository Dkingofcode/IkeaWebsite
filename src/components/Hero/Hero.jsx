//import React from 'react'

import Chair from "../../ui/Chair";
import "./hero.modules.css";
import Sidebar from "../../ui/Sidebar";
import Button from "../../ui/Button";
import Price from "../../ui/Price";
//import PingButton from "../../ui/PingButton";
import PingButton from "../../ui/heroPing";
import HeroLabel from "../../ui/heroLabel";


const Hero = () => {
  return (
    <div className="main">
      
      <div>
      <div className="heroTop">
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

         <div style={{ display: "flex", gap: "20px",  }}>
          <Price number={"1,400"}  />
          <Button  />
         </div>
       </article>

         <div className="hero-feature">
          <div>

          <div>  
          <img src="giftcardicon.jpg" />
          </div>

          <div>
          <img src="clock.png"  />
          </div>

          <div>
          <img src="Securityshield.webp"  />
          </div> 

          <div>
          <img src="Grid.jfif"  />
          </div>

          </div>

          <div className="features">
           <p className="slant-text">FEATURES</p>
            <div className="line"></div>
          </div>
         </div>

      </div>

      <div className="hero-main">
      

        <div className="slide">

        <img className="showcase" src="showcase.jpg" alt="livingroom picture" /> 

         <PingButton className={"pingBtn"}  positionleft={"290px"} positionright={"0px"} positionbottom={"0px"} positiontop={"90px"} />
         <PingButton className={"pingBtn"}  positionleft={"180px"} positionright={"0px"} positionbottom={"0px"} positiontop={"130px"} />
         <PingButton className={"pingBtn"}  positionleft={"110px"} positionright={"0px"} positionbottom={"0px"} positiontop={"250px"} />
         <HeroLabel className={"label"} />

        <img className="preview1" src="/preview1.jpeg" />
        <img className="preview2" src="/preview2.jpeg" />
        <img className="preview3" src="/preview3.jpeg" />
        </div>

        <div className="hero-footer">
          <div className="giftCard">
            <img src="giftcardicon.jpg" />
            <h3>Bonus card as a gift</h3>
            <img src="/CircledArrow.jfif"  />
          </div>

          <div className="giftCard">
            <img src="clock.png" />
            <h3>24 hour support</h3>
            <img src="/CircledArrow.jfif" />
          </div>

          <div className="giftCard">
            <img src="Securityshield.webp" />
            <h3>10 year guarantee</h3>
           <img src="/CircledArrow.jfif" />
          </div>

          <div className="giftCard">
            <img src="Grid.jfif" />
            <h3>Newest technologies</h3>
            <img src="/CircledArrow.jfif" />
          </div>
        </div>
      
      </div>
      </div>

    
      <Sidebar />
      

    </div>
  )
}

export default Hero;
