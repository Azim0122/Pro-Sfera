import React, { useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
function Navbar(loginNavigate) {
  const Log = useNavigate();
  const Navigate = () => {
      Log("/login");
  };
  return (
    <>
    <nav>
      <div className=" media">
        <h1><img className='logo'  src="/public/imgs/logo-text.svg" alt="" /> </h1>
        <div className="buttons">
          <button onClick={(e) => { Navigate() }}  className='btn1'>Вход по <span>ID</span></button>
         <div className="btns">
         <button className='btn2 btn-settings'><i class="fa-solid fa-gear"></i></button>
         <button className='btn2'><i class="fa-solid fa-bars"></i></button>
         </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar