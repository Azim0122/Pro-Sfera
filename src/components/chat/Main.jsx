import React from 'react'
import './Main.css'
import { NavLink } from 'react-router-dom'
 
function Main() {
  return (
    <div  className='main6'>
       <div className="nav6">
        <div className="logo-ai">
              <NavLink to={"/"}>
              <div className="logo-ai1">
               <img src="./public/imgs/logo-ai.svg" alt="" />
               <p>Sfere</p>
               </div>
              </NavLink>
              

        </div>
       <div className="user-icon6">
       <i class="fa-solid fa-user"></i></div>      
       </div>
       <div className="main-container6">
        <div className="greet6">
            <p><span>Здравствуйте, Гость!</span></p>
            <p>Чем я могу помочь?</p>
        </div>
        <div className="cards6">
            <div className="card6">
                <p>Suggest beatuiful places to see on an upcoming trip</p>
                <i class="fa-regular fa-compass"></i>
            </div>
            <div className="card6">
                <p>Briefly summarize this concept : urban planning   </p>
                <i class="fa-regular fa-lightbulb"></i>
            </div>
            <div className="card6">
                <p>Suggest beatuiful places to see on an upcoming trip</p>
                <i class="fa-regular fa-message"></i>
            </div>
            <div className="card6">
                <p>Suggest beatuiful places to see on an upcoming trip</p>
                <i class="fa-solid fa-code"></i>
            </div>
          
        </div>
        <div className="main-bottom6">
            <div className="search-box6">
                <input type="text" placeholder='Введите запрос' />
                <div>
                <i class="fa-solid fa-file-image"></i>
            <i class="fa-solid fa-microphone"></i>
            <i class="fa-solid fa-paper-plane"></i>
                </div>
            </div>
        
        </div>
       </div>
    </div>
  )
}

export default Main