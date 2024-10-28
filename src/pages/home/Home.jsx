import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import ProServices from '../../components/proServices/ProServices'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Home({setQuery, handleChange, data, city, query}) {
  const navigate = useNavigate();
  const handleSelectItem = (item) => {
    setQuery(item.title); // Устанавливаем выбранное значение в поле ввода
  };
  
  const handleNavigate = () => {
      navigate("/search");
  };
  const [temperature, setTemperature] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState('');
  const [rate, setRate] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const apiKey = '0b90158b34edc7beb6f0cbe231c6a981'; // Замените на свой API-ключ
            try {
                const response = await axios.get(`http://data.fixer.io/api/latest?access_key=${apiKey}&symbols=USD,UZS`);
                setRate(response.data.rates.UZS);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };
        fetchData();
    }, []);
  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = '2586aa5d0dd8d6f62c17c705f4004f62';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      
      try {
        const response = await axios.get(url);
        const temp = response.data.main.temp;
        const weatherCondition = response.data.weather[0].main;
        
        setTemperature(Math.round(temp));

        if (weatherCondition === "Clear") {
          setWeatherIcon('fa-solid fa-sun');
        } else if (weatherCondition === "Clouds") {
          setWeatherIcon('fa-solid fa-cloud');
        }else if(weatherCondition === "Snow") {
          setWeatherIcon('fa-solid fa-snowflake');
        }else {
          setWeatherIcon('fa-solid fa-cloud-rain'); 
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };
   
    fetchWeather();
  }, [city]);
  console.log(temperature);
  
  useEffect(() => {
    if (window.location.pathname == '/') {
      localStorage.removeItem('query');  // Удаляем значение из localStorage
      setQuery('');
    }
  }, []);
  const [titleIcon, setTitleIcon] = useState([]); 
  const [recentSearches, setRecentSearches] = useState([ 'Новости', 'Погода сегодня', 'Лучшие практики программирования', 'Руководство по React', 'Последние новости технологий', 'Как приготовить пасту', 'Кино и сериалы', 'Музыка', 'Путешествия', 'Здоровый образ жизни', ]); 
  useEffect(() => {
     const icons = recentSearches.map(search => {
       switch (search) {
         case 'Новости': return 'fa-solid fa-newspaper'; 
         case 'Погода сегодня': return 'fa-solid fa-sun'; 
         case 'Лучшие практики программирования': return 'fa-solid fa-code'; 
         case 'Руководство по React': return 'fa-brands fa-react'; 
         case 'Последние новости технологий': return 'fa-solid fa-microchip'; 
         case 'Как приготовить пасту': return 'fa-solid fa-utensils'; 
         case 'Кино и сериалы': return 'fa-solid fa-film'; 
         case 'Музыка': return 'fa-solid fa-music'; 
         case 'Путешествия': return 'fa-solid fa-plane'; 
         case 'Здоровый образ жизни': return 'fa-solid fa-heartbeat'; default: return ''; 
        } 
        })  ;
         setTitleIcon(icons)
       }, [recentSearches])
  const handleSelectItem2 = (item) => {
    setQuery(item); // Устанавливаем выбранное значение в поле ввода
  };
  
  const [category, setCategory] = React.useState('Сервисы');  
  return (
    <>
    <nav>
      <Navbar />
    </nav>
       <main>
        <section className='section_1'>
          <div className="container">
        <div className="ai"> 
        <NavLink to={"/"}><img src="/public/imgs/earth.svg" alt="" /> Поиск</NavLink>
        <NavLink to={"/ai-sferius"}><img src="/public/imgs/Shape Ai.svg" alt="" />AI Sferius</NavLink>
        </div>
          <h1>Добрый день, Гость!</h1>
          <span className='logo2'> Чем можем быть полезны? </span>
          <div className="search">
                            <div className="search-input2">
                          <form action="">
                          <input onInput={(e) => {setQuery(e.target.value)}} type="input" name="focus" required class="search-box" placeholder="Введите ваш запрос" />
                                <button class="close-icon" type="reset" ></button>
                                <button onClick={(e) => {
      e.preventDefault();
      if (query !== "") {
        handleNavigate();  // Переходим к навигации, если есть значение
        
      }else {
        alert("Заполните поле поиска");  // Выводим сообщение, если поле пустое
        
      }
       // Add your navigation logic here
      handleChange(); // Add your handle change logic here
      console.log(handleChange);
      
    }}
 className='button-srch'><i class='bx bx-globe'></i></button>
                               
                          </form>
                       
                          <div className="search-add">
                {query === '' ? (
                    recentSearches.map((item, index) => (
                      <Link 
                      key={index} 
                      onClick={(e) => { 
                        handleSelectItem2(item); 
                          handleNavigate(); 
                          e.preventDefault(); 
                      }}
                  >
                      <div>
                          {item.slice(0, 25)}...
                          &nbsp;
                            <i className={titleIcon[index]}></i>

                          <span>
                              <i className="fa-solid fa-arrow-up"></i>
                          </span>
                      </div>
                  </Link>
                    ))
                ) : (
                    data.map((item, index) => (
                        <Link 
                            key={index} 
                            onClick={(e) => { 
                                handleSelectItem(item); 
                                handleNavigate(); 
                                e.preventDefault(); 
                            }}
                        >
                            <div>
                                {item.title.slice(0, 25)}...
                                <span>
                                    <i className="fa-solid fa-arrow-up"></i>
                                </span>
                            </div>
                        </Link>
                    ))
                )}
            </div>
    
                          <div className="search-info">
            <div className="weather">
            <i className={weatherIcon}></i> 
            <span>{
        temperature !== null ?
        `${temperature >= 0 ? '+' : ''}${temperature}°` :
        "Loading..."
    }</span>
            </div>
            <div className="courses">
            <i className='bx bx-dollar' ></i>  
            <span>{rate ? `${rate.toFixed(2)}` : 'Загрузка курса...'}</span>
        </div>
           </div>
                            </div>
           
          </div>
          </div>
        </section>

        <section>
          <div className=" container4">
          <div className="links">
              <ul>
                <li style={category=="Сервисы" ? {color: "rgba(95, 224, 216, 1)"}:{}} onClick={()=>{setCategory("Сервисы")}}   >Сервисы</li>
                <li style={category=="Новости" ? {color: "rgba(95, 224, 216, 1)"}:{}} onClick={()=>{setCategory("Новости")}}>Новости</li>
                <li style={category=="Виджеты" ? {color: "rgba(95, 224, 216, 1)"}:{}} onClick={()=>{setCategory("Виджеты")}}>Виджеты</li>
              </ul>
          </div>
          <hr />
            <ProServices category={category} />
          </div>
        </section>
       </main>
    </>
  )
}

export default Home