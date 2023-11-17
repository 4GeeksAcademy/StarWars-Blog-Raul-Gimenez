import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import getFavourites from '../services/getFavourites';
import Navbar from '../components/Navbar';
import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';


const Router = () => {
    const [favourites, setFavourites] = useState(getFavourites());

    return (
      <BrowserRouter basename=''>
        <Navbar favourites={favourites} setFavourites={setFavourites} />
        <Routes>
          <Route path="/" element={<MainPage favourites={favourites} setFavourites={setFavourites} />} />
          <Route path="/detail/:entity/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    );
}
export default Router;