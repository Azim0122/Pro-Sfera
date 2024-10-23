import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SlideHome.css"
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { Link, NavLink } from "react-router-dom";



function SlideHome() {
    return (
        <>
            <div className="test">
                <Swiper slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    // modules={[Pagination]}
                    className={"mySwiper"}>
                         <SwiperSlide>
                        
                          <NavLink to={'/'}>  <button className='btnbtn1'>Все</button></NavLink>
                        
                    </SwiperSlide>   <SwiperSlide>
                       
                        <NavLink to={'/pictures'}>  <button className='btnbtn2'>Политика</button></NavLink>
                        
                    </SwiperSlide>   <SwiperSlide>
                        
                        <NavLink to={'/video'}>  <button className='btnbtn3'>Спорт</button></NavLink>
                        
                    </SwiperSlide>   <SwiperSlide>
                        
                       <NavLink to={'/news'}>  <button className='btnbtn4'>Музыка</button></NavLink>
                       
                    </SwiperSlide>   
                    <SwiperSlide>
                        <NavLink to={'/more'}><button className='btnbtn5'>Кино</button></NavLink>
                    </SwiperSlide> 
                    <SwiperSlide>
                        <NavLink to={'/more'}><button className='btnbtn5'>Европа</button></NavLink>
                    </SwiperSlide> 
                    <SwiperSlide>
                        <NavLink to={'/more'}><button className='btnbtn5'>Россия</button></NavLink>
                    </SwiperSlide> 
                    <SwiperSlide>
                        <NavLink to={'/more'}><button className='btnbtn5'>Узбекистан</button></NavLink>
                    </SwiperSlide> 
                    <SwiperSlide>
                        <NavLink to={'/more'}><button className='btnbtn5'>Ещё</button></NavLink>
                    </SwiperSlide> 
                </Swiper>
            </div>
        </>

    )
}

export default SlideHome