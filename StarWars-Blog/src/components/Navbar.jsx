export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg text-white" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">
                    <img src="https://i.pinimg.com/originals/ee/ec/fb/eeecfb4866cb83c610f0f29400f541ad.png" alt="StarWars" style={{width:"5rem"}} />
                </a>
                <div className="nav-item dropdown">
                    <a className="btn btn-warning dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favourites
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}