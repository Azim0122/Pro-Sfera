import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Video from './pages/video/Video'
import Pictures from './pages/pictures/Pictures'
import News from './pages/news/News'
import HomeAll from './pages/pagesHome/homeAll/HomeAll'
import ChatSferius from './components/chat/ChatSferius'
import Login from './pages/login/Login'
function App() {

  const [query, setQuery] = useState(()=> localStorage.getItem('query') || '')
  const [limit, setLimit] = useState(10)
  const [srcLimit, setSrcLimit] = useState(10)
  const [data, setData] = useState([])
  const [dataImg, setDataImg] = useState([])
  const [dataVid, setDataVid] = useState([])
  const [maxResults, setMaxResults] = useState('10')
  const [srcImg, setSrcImg] = useState([])

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const saveValue = () => {
    console.log('Saqlangan qiymat:', query);
  };

  const getData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      limit,
      page: 1,
      query
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://api1.sfere.pro/search/text", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.Results)

      })
      .catch((error) => {
        if (error.status === 500) {
          alert("No results found")

        }
      });
  }

  //  console.log(data);

  useEffect(() => {
    localStorage.setItem('query', query);

    if (query) {
      getData();
      getDataImg();
      getDataVid();
      getDataSrcImg()
    }
  }, [query])
  const getDataImg = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      limit: 10,
      page: 1,
      query
    });

 
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://api1.sfere.pro/search/images", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setDataImg(result.results)
      })
      .catch((error) => console.error(error));
  }
  const getDataSrcImg = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      srcLimit,
      page: 1,
      query
    });


    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://api1.sfere.pro/search/images", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setSrcImg(result.results)
      })
      .catch((error) => console.error(error));
  }
  const getDataVid = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      maxResults,
      nextPageToken: "",
      query
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://api1.sfere.pro/search/video", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.Results);

        setDataVid(result.Results)
      })
      .catch((error) => {
        console.error(error);
        if (error.status === 400) {
          alert("No results found")

        }else if (error.status === 500) {
          alert("No results found")

        }
      });
  }

 
  // console.log(dataImg);
  // console.log(dataVid);
console.log(srcImg);


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home data={data} city="Tashkent"  handleChange={handleChange} query={query} setQuery={setQuery} />} />
        <Route path="/search" element={<Search srcImg={srcImg} setQuery={setQuery} saveValue={saveValue} query={query} data={data} />} />
        <Route path='/video' element={<Video query={query} setQuery={setQuery}  dataVid={dataVid} />} />
        <Route path="/pictures" element={<Pictures query={query} setQuery={setQuery} dataImg={dataImg}  />} />
        <Route path='/news' element={<News query={query} setQuery={setQuery} />} />
        <Route path="/all" element={<HomeAll />} />
        <Route path='/ai-sferius' element={<ChatSferius />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App