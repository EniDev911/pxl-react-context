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
  const API_KEY = "563492ad6f917000010000015d84a234b8844671bd5d860647642ee7";
  const endpoint = `https://api.pexels.com/v1/search?query=people&page=${page}`;

  const getDataApi = async () => {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: API_KEY
      }
    });

    let { photos } = await response.json();
    photos = photos.map(item => {
      return {
        id: item.id,
        src: item.src,
        alt: item.alt,
        liked: item.liked
      }
    })
    setPhotos(photos)
  }

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
