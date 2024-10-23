import React from 'react'
import './HomeAll.css'
function HomeAll() {
  return (
    <div className="boxs5">

    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
      return (
       <div className="box4">
        <div className="img">
          <img src="./public/imgs/imgs2.svg" alt="" />
        </div>
        <div className="info5">
          <div className="logo">
            <img src="./public/imgs/Logo (1).svg" alt="" />
            <span>Nike</span>
          </div>
          <div className="info-text">
          Apple выпустит часы Watch Ultra 3
          и Watch SE нового поколения в следующем году
          </div>
          <span className='moment'>Сегодня</span>
        </div>
       </div> 
    )
    })}
                </div>
  )
}

export default HomeAll