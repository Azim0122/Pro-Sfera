import React from 'react'
import './NavbarHome.css'
import Slide from '../slide/Slide'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
function NavbarHome({query, setQuery,saveValue}) {
    const Login = useNavigate();
    const handleNavigate = () => {
        Login("/login");
    };

    return (
        <>
         <nav>
                <div className="container3 media">
                    <Link to={"/"}>
                        <h1><img className='logo' src="/public/imgs/logo-text.svg" alt="" /></h1>
                    </Link>
                    <div className="search1">
                        <div className="search">
                            <div className="search-input">
                          <form action="">
                          <input value={query}  onInput={(e) => {setQuery(e.target.value)}} type="text" name="focus" required class="search-box" placeholder="Введите ваш запрос" />
                                <button onClick={() => setQuery('')}  class="close-icon" type="reset"></button>
                                <button className='button-srch'><i class='bx bx-globe'></i></button>
                          </form>
                            </div>
                        </div>
                    </div>

                    <div className="buttons3">
                        <button onClick={handleNavigate} className='btn1'>Вход по <span>ID</span></button>
                        <button className='btn2 btn-settings'><i class="fa-solid fa-gear"></i></button>
                        <button className='btn2'><i class="fa-solid fa-bars"></i></button>
                    </div>
                </div>
            <main>
                <div className="container4">
                    <div className="btns">
                        <div className="search-buttons3">
                            <NavLink to={'/search'}><button className='btn btn1'>Все</button></NavLink>
                            <NavLink to={'/pictures'}><button className='btn btn2'>Картинки</button></NavLink>
                            <NavLink to={'/video'}><button className='btn btn3'>Видео</button></NavLink>
                            <NavLink to={'/news'}><button className='btn btn4'>Новости</button></NavLink>
                            <button className='btnbtn5'>Ещё</button>
                        </div>
                    </div>
                    <div className="slide">
                        <Slide />
                    </div>
                </div>
            </main>
            </nav>

           

           
        </>
    )
}

export default NavbarHome