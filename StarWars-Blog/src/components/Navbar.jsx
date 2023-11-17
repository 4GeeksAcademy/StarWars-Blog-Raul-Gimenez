import { Link } from "react-router-dom";
import getFavourites from "../services/getFavourites";
import deleteFavourites from "../services/deleteFavourites";

export default function Navbar({ favourites, setFavourites }) {

  const handleClickDelete = (id, entity) => {
    deleteFavourites({
      favourites,
      id,
      entity,
    });

    setFavourites(getFavourites());
  };

    return (
        <nav className="navbar navbar-expand-lg text-white" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
          <div className="container-fluid">
            <Link to="/" className="navbar-brand text-white">
              <img src="https://i.pinimg.com/originals/ee/ec/fb/eeecfb4866cb83c610f0f29400f541ad.png" alt="StarWars" style={{ width: "5rem" }} />
            </Link>
            <div className="nav-item dropdown">
              <a className="btn btn-warning dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favourites {favourites.length}
              </a>
              <ul className="dropdown-menu dropdown-menu-end bg-black text-white">
                {favourites.map((fav) => (
                  <li key={`${fav.entity}-${fav.id}`} className="d-flex me-3 align-items-center">
                    <Link to={`/detail/${fav.entity}/${fav.id}`} className="dropdown-item text-white">{fav.name}</Link>
                    <button
                      className="btn btn-link text-warning"
                      onClick={() => handleClickDelete(fav.id, fav.entity)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      );
}