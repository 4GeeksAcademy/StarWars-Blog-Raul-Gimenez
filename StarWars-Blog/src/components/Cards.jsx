import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import addFavourites from "../services/addFavourite";
import deleteFavourites from "../services/deleteFavourites";
import getFavourites from "../services/getFavourites";

export default function Card({ img, detail, title, description, id, entity, favourites }) {
  useEffect(() => {
    favourites.setFavourites(getFavourites());
  }, []); 

  const itsFav = () => {
    return favourites.favourites.some(favourite => favourite.id === id && favourite.entity === entity);
  }

  const handleClickAddFav = () => {
    addFavourites({
      favourites: favourites.favourites,
      name: title,
      entity,
      id
    });

    favourites.setFavourites(getFavourites());
  }

  const handleClickDeleteFav = () => {
    deleteFavourites({
      favourites: favourites.favourites,
      id,
      entity
    });

    favourites.setFavourites(getFavourites());
  }

  return (
    <div className="card m-2" style={{ width: "18rem", height: "22rem", backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
      <div className="ratio ratio-16x9">
        <img src={img || "https://pbs.twimg.com/media/EW8eYfrXkAMahio.jpg"} className="card-img-top" style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="..." />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-warning">{title}</h5>
        <div className="card-text overflow-y-auto text-white pe-1" style={{ maxHeight: '75px', overflowY: 'auto' }}>
          {description}
        </div>
        <div className="d-flex mb-0 mt-auto">
          <Link to={detail} className="btn btn-warning">Learn More!</Link>
          {
            itsFav() ? 
            <a href="#" onClick={handleClickDeleteFav} className="text-warning ms-auto me-0 fs-3"><i className="fa-solid fa-star"></i></a>
            :
            <a href="#" onClick={handleClickAddFav} className="text-warning ms-auto me-0 fs-3"><i className="far fa-star"></i></a>
          }
        </div>
      </div>
    </div>
  );
}
