export default function Card () {
    return( 
        <div className="card m-2" style={{width: "18rem", height:"22rem", backgroundColor: 'rgba(255, 255, 255, 0.15)'}}>
            <div className="ratio ratio-16x9">
                <img src="https://frikipolis.com/wp-content/uploads/2023/07/star-wars-the-black-series-darth-vader-obi-wan7.jpg" className="card-img-top" style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt="..."/>
            </div>
        <div className="card-body">
            <h5 className="card-title text-warning">Card title</h5>
            <p className="card-text overflow-y-auto text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-warning">Larn More!</a>
        </div>
        </div>
    )
}
