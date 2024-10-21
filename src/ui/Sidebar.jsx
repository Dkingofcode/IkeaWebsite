//import React from 'react'
import "../styles/sidebar.css";



const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="userAvatar" src="/avatar.svg" />

      <h4>Hello Anna!</h4>
      <span>2</span>

      <p>MY PROPOSALS</p>

      <div>
        <img  />
        <p>Sofa Stockholm</p>  
      </div>   

      <div>
        <img  />
        <p>Sofa Reactive</p>  
      </div>

      <p>MY CHOICES</p>
      <div>
        <img  />
        <p>Armchairs</p>
        <img  />  
      </div>

      <div>
        <img  />
        <p>Fairly big</p>  
        <img />
      </div>


    </div>
  )
}

export default Sidebar;
