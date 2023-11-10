import { Link } from "react-router-dom"
import '../../style.css';

export default function GeneralDiv ({children, link, title}) {
    return(
        <>
            <div className={`vh-auto my-3 text-white`}>
                <div className="border border-0 h-25">
                    <div className={`border-bottom align-baseline d-flex justify-content-between align-items-end bg-transparent`}>
                        <h1 className="mb-0 mt-0 ms-3">{title}</h1>
                        {link && <Link to={link} className={`ms-auto me-0 fs-7 text-end`}>View all</Link>}
                    </div>
                </div>
            </div>
            <div className = "d-flex justify-content-start overflow-x-auto" >
                <div className="d-flex m-2">
                    {children}
                </div>
            </div>
        </>
    )
}