import './styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <ul>
                <Link to="/equipes">
                    <li>Equipes</li>
                </Link>
                <li>Jogadores</li>
                <li>Partidas</li>
                <li>Técnicos</li>
            </ul>
        </div>
    );
}

export default Navbar;