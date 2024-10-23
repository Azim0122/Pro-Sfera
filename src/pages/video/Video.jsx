import React from 'react'
import './Video.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Slide from '../../components/slide/Slide'
import NavbarHome from '../../components/navbarHome/NavbarHome'
import ReactPlayer from 'react-player'
function Video({dataVid, query, setQuery}) {
    const navigate = useNavigate()
    const dateString = dataVid[0]?.publishTime;
const year = new Date(dateString).getFullYear();
const month = new Date(dateString).getMonth() + 1;
const day = new Date(dateString).getDate();

    return (
        <>
           <NavbarHome query={query} setQuery={setQuery}/>
           <main>   
               <div className="container4">
               <div className="search-results-vid">
                           {dataVid?.map((item, index) => {
                               return (
                                <div className="info1-box-vid">
                                <div className="name-info-vid">
                                    <div className="name-vid">
                                        <div className="img-info-vid">
                                            <img src={`https://img.icons8.com/color/144/youtube-play.png`} alt="" />
                                        </div>
                                        <div className="name-product-vid">
                                            <h4> <b>Youtube</b></h4>
                                            <a target='_blank' href={item.channelLink}>{item.youtubeChannelTitle}<img src="./public/imgs/Check.svg" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="other">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                    </div>
                                </div>
                                <hr />
                                <div className="about-results-vid">
                                <div className="about-img-vid">
                                
                                <div className="video-container">
      <ReactPlayer
        url={item.videoLink} // Ссылка на ваше видео
        width="100%"
        height="100%"
        controls={true}
        playIcon={<div className="custom-play-button"></div>} // Кастомизация кнопки воспроизведения
        light={item.images.high.url} // Если нужно изображение-заставка
      />
    
    </div>
                                    </div>
                                    <div className="about-text-vid">
                                        <Link target='_blank' >
                                        <h1>{item.title.slice(0, 30)}...</h1>
                                        </Link> 
                                        <div className="about-bottom-vid">
                                    <h3>Youtube</h3>
                                        <span className='date'>{day}.{month}.{year}</span>
                                        </div>
                                    </div>
                                    
                                </div>
                               

                            </div>
                               )
                           })}
                            
                            <div className="button3">
                                <button>Смотреть все</button>
                              </div>
                 </div>
                 </div>
           </main>
        </>
    )
}

export default Video