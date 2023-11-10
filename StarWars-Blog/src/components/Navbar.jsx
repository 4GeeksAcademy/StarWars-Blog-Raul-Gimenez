import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg text-white" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white">
                    <img src="https://i.pinimg.com/originals/ee/ec/fb/eeecfb4866cb83c610f0f29400f541ad.png" alt="StarWars" style={{width:"5rem"}} />
                </Link>
                <div className="nav-item dropdown">
                    <a className="btn btn-warning dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favourites
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end bg-black text-white">
                        <li className="d-flex me-3 align-items-center">
                            <a className="dropdown-item text-white" href="#">Action</a>
                            <a className="text-warning" href=""><i className="fas fa-trash-alt"></i></a>
                        </li>
                        <li className="d-flex me-3 align-items-center">
                            <a className="dropdown-item text-white" href="#">Action</a>
                            <a className="text-warning" href=""><i className="fas fa-trash-alt"></i></a>
                        </li>
                        <li className="d-flex me-3 align-items-center">
                            <a className="dropdown-item text-white" href="#">Action</a>
                            <a className="text-warning" href=""><i className="fas fa-trash-alt"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}