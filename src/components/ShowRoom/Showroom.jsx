//  import React from 'react';

import "./showroom.css";

const Showroom = () => {
  return (
    <div className="gallery">
      
      <div>
        <h1>From our Clients</h1>
        <p>#STOCKHOLM</p>
        <p>#IKEA</p>

        <a>View Our Instagram</a>
      </div>

        <div className="Images">
           <div className="yellowBox">
           </div> 

           <div className="imgCollage">
            <img className="galle1" src="gallery1.jpg" />
            <div style={{ display: "flex", flexDirection: "column" }}>
            <img className="galle2" src="gallery2.jpg" />
            <img className="galle3" src="gallery3.jpg" />
            </div>
           </div>
        </div>
      <div>

      </div>
    </div>
  )
}

export default Showroom;

























