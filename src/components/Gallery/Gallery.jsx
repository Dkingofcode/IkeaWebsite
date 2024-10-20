// import React from 'react'

import Button from "../../ui/Button";
import "./gallery.css";


const Gallery = () => {
  return (
    <div className="gallery">
      
       <div>
          <h1>You Might Like</h1>
          <p></p>

          <button className="toggleBtns">
            <img src="CircledArrow.jfif" />  
            <img src="CircledArrow.jfif" />
          </button>
       </div>


       <div className="GalleryBox">
       <article>
        <img src="similar1.jpg" />

        <div>
          <h2>Serving Bowl</h2>
          <p>STOCKHOLM 2017</p>
          <p>$12</p>
         </div>  

          <Button styles={{position: "absolute"}} />

       </article>

       <article>
        <img src="similar2.jpg" />

        <div>
          <h2>Pendant Lamp</h2>
          <p>FOTO</p>
          <p>$24</p>
         </div>  

          <Button styles={{position: "absolute"}}  />

       </article>

       <article>
        <img src="similar3.jpg" />

        <div>
          <h2>Wall Clock</h2>
          <p>SIPPRA</p>
          <p>$12</p>
         </div>  

          <Button styles={{position: "absolute", top: "190px", left: "90px" }} />

       </article>
       </div>
    
    </div>
  )
}

export default Gallery;
