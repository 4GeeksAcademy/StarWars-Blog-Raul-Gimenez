import { Link } from "react-router-dom";

export default function Card({ img, detail, title, description }) {
  return (
    <div className="card m-2" style={{ width: "18rem", height: "22rem", backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
      <div className="ratio ratio-16x9">
        <img src={img || "https://pbs.twimg.com/media/EW8eYfrXkAMahio.jpg"} className="card-img-top" style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="..." />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-warning">{title}</h5>
        <p className="card-text overflow-y-auto text-white pe-1" style={{ maxHeight: '75px', overflowY: 'auto' }}>
          {description}
        </p>
        <div className="d-flex mb-0 mt-auto">
          <Link to={detail} className="btn btn-warning">Learn More!</Link>
          <a href="#" className="text-warning ms-auto me-0 fs-3"><i className="far fa-star"></i></a>
        </div>
      </div>
    </div>
  );
}