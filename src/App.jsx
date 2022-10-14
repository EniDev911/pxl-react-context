import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MyContext from "./my_context";
// pages
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";

function App() {

  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const getDataApi = async () => {

    const Api = { 
      base: import.meta.env.VITE_BASE_URL, 
      key: import.meta.env.VITE_KEY 
    }; 

    try {
      const response = await fetch(Api.base.concat(`search?query=people&page=${page}`), {
        headers: {
          Authorization: Api.key
      }});  
      let { photos } = await response.json();
      photos = photos.map(item => {
      return {
        id: item.id,
        src: item.src,
        alt: item.alt,
        liked: item.liked}
    })
    setPhotos(photos)
    } catch(err){
      console.log(err.message)
    }
    };

  useEffect(() => {
    getDataApi();
  }, [page])

  return (
    <div className="App">
      <MyContext.Provider value={{ photos, setPhotos, page, setPage }}>
        <BrowserRouter basename='pxl-react-context'>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='favoritos' element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App
