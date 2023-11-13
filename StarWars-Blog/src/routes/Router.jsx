import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';


const Router = () => {
    return (
        <BrowserRouter basename=''>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/detail/:entity/:id" element={<DetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;