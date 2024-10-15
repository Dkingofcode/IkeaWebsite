//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inspirations from "./Pages/Inspirations"
import Products from './Pages/Products';
import Rooms from './Pages/Rooms';



function App() {

  return (
    <>
      <div>
        <BrowserRouter>
         <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/Products'  element={<Products />} />
          <Route path='/Inspirations'  element={<Inspirations />} />
          <Route path='/rooms'  element={<Rooms />} />
         </Routes>
        </BrowserRouter>
      </div>
        
    </>
  )
}

export default App;
