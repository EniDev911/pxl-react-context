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
      query: import.meta.env.VITE_QUERY,
      key: import.meta.env.VITE_KEY
    };

    try {
      const response = await fetch(Api.base + Api.query + "&page=" + page, {
        headers: {
          Authorization: Api.key
        }
      });

      if (response.status === 429) {
        return alert("Se han hecho demasiadas peticiones en un plazo muy corto");
      }

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
    } catch (err) {
      console.log(err.message)
    }
  };

  const setFavoritos = (id) => {
    const fotoIndex = photos.findIndex((photo) => photo.id === id);
    photos[fotoIndex].liked = !photos[fotoIndex].liked;
    setPhotos([...photos]);
  };

  // USEEFFECT 
  useEffect(() => {
    getDataApi();
  }, [page])

  return (
    <div className="App">
      <MyContext.Provider value={{ photos, setPhotos, page, setPage, setFavoritos }}>
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
