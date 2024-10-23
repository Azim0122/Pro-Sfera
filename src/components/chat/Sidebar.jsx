import React, { useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {
    const [extended, setExtended] = useState(false)
  return (
    <div className='sidebar6'>
        <div className="top6">
        <img onClick={() => setExtended(prev=>!prev)} class="menu" src="./public/imgs/panel.svg" alt=""/>
        
          
        </div>
        <div className="bottom6">    
          <div className="bottom-item6 recent-entry6">
          <i class="fa-regular fa-message"></i>
           {extended ?  <p>Help</p> : null}
          </div>
          <div className="bottom-item6 recent-entry6">
          <i class="fa-solid fa-clock-rotate-left"></i>
            {extended ? <p>History</p> : null}
          </div>
          <div className="bottom-item6 recent-entry6">
          <i class="fa-solid fa-gear"></i>
           {extended ? <p>Settings</p> : null}
          </div>

        </div>
    </div>
  )
}

export default Sidebar