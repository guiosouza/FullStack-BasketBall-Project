import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Equipe from './pages/Equipe';

const Rotas = () => {
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Equipe />}></Route>
            </Routes>
        </BrowserRouter>
    </>
}

export default Rotas;